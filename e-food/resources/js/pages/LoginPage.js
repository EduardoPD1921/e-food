import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { red } from '@material-ui/core/colors'

import Nav from '../components/Nav'
import LoginInput from '../components/LoginInput'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            isLoading: false
        }

        this.onChangeTextHandler = this.onChangeTextHandler.bind(this)
    }

    onChangeTextHandler(event, type) {
        this.setState({
            [type]: event.target.value
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <Nav />
                <section className="main-content">
                    <div className="login-form">
                        <AccountCircleIcon className="user-img" style={{ fontSize: 100, color: red[600] }} />
                        <LoginInput onChangeTextHandler={this.onChangeTextHandler} email />
                        <LoginInput onChangeTextHandler={this.onChangeTextHandler} />
                        <button className="login-form-submit">Login</button>
                    </div>
                </section>
            </div>
        )
    }
}

export default LoginPage