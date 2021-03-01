import React, { useState, useContext } from 'react'
import axios from 'axios'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { red } from '@material-ui/core/colors'

import Nav from '../components/Nav'
import LoginInput from '../components/LoginInput'

import AuthContext from '../AuthContext'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

function LoginPage(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)

    const context = useContext(AuthContext)
    console.log(context)

    const onChangeTextHandler = (event, type) => {
        switch(type) {
            case 'email':
                setEmail(event.target.value)
                break
            case 'password':
                setPassword(event.target.value)
                break
        }
    }

    const onSubmitLoginFormHandler = () => {
        setIsLoading(true)

        const data = {
            email: email,
            password: password
        }

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/user/login',
            data: data
        }).then(resp => {
            setIsLoading(false)

            console.log(resp)
        })
        .catch(error => {
            setIsLoading(false)

            console.log(error.response)
        })
    }

    const onCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setIsSnackbarOpen(false)
    }

    const renderLoading = () => {
        if (isLoading) {
            return <CircularProgress style={{ color: red[700], fontSize: 5 }} />
        }

        return 'Login'
    }

    return (
        <div className="container-fluid">
                <Snackbar open={isSnackbarOpen}  autoHideDuration={6000} onClose={(event, reason) => onCloseSnackbar(event, reason)}>
                    <Alert onClose={() => onCloseSnackbar()} severity="error">
                        Credenciais inválidas!
                    </Alert>
                </Snackbar>
                <Nav />
                <section className="main-content">
                    <div className="login-form">
                        <AccountCircleIcon className="user-img" style={{ fontSize: 100, color: red[600] }} />
                        <LoginInput onChangeTextHandler={onChangeTextHandler} email />
                        <LoginInput onChangeTextHandler={onChangeTextHandler} />
                        <button 
                            onClick={() => onSubmitLoginFormHandler()}
                            disabled={isLoading} 
                            className="login-form-submit">
                            {renderLoading()}
                        </button>
                    </div>
                </section>
            </div>
    )
}


export default LoginPage