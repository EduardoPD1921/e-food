import React from 'react'
import axios from 'axios'

import Nav from '../components/Nav'

// Material-ui components
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'


import illustration from '../../../public/images/loginIllustration.png'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            isLoading: false,
            isSnackbarOpen: false
        }
    }

    onChangeTextHandler(event, type) {
        this.setState({
            [type]: event.target.value
        })
    }

    onSubmitFormHandler() {
        this.setState({ isLoading: true })

        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/user/register',
            data: data
        }).then(resp => {
            console.log(resp)
            this.setState({ isLoading: false, isSnackbarOpen: true })
        })
        .catch(error => {
            console.log(error.response.data)
            this.setState({ isLoading: false })
        })
    }

    renderLoading() {
        if (this.state.isLoading) {
            return <CircularProgress className="loading-animation" color="secondary" />
        }

        return <button onClick={() => this.onSubmitFormHandler()} className="form-input form-content form-submit-button">Cadastrar</button>
    }

    onCloseSnackbar(event, reason) {
        if (reason === 'clickaway') {
            return
        }

        this.setState({ isSnackbarOpen: false })
    }

    render() {
        return (
            <div className="container-fluid">
                <Snackbar open={this.state.isSnackbarOpen} autoHideDuration={6000} onClose={() => this.onCloseSnackbar}>
                    <Alert onClose={() => this.onCloseSnackbar()} severity="success">
                        Conta criada com sucesso!
                    </Alert>
                </Snackbar>
                <Nav />
                <div className="login-page-content">
                    <div className="content-illustration">
                        <img className="img-fluid" src={illustration}></img>
                    </div>
                    <div className="login-form">
                        <div className="login-inputs">
                            <span>Falta pouco para matar sua fome!</span>
                            <input onChange={e => this.onChangeTextHandler(e, 'name')} className="form-input form-content" type="text" placeholder="Nome"></input>
                            <input onChange={e => this.onChangeTextHandler(e, 'email')} className="form-input form-content" type="text" placeholder="Email"></input>
                            <input onChange={e => this.onChangeTextHandler(e, 'password')} className="form-input form-content" type="password" placeholder="Senha"></input>
                            {this.renderLoading()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage