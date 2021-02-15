import React from 'react'
import axios from 'axios'

import Nav from '../components/Nav'

import illustration from '../../../public/images/loginIllustration.png'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onChangeTextHandler(event, type) {
        this.setState({
            [type]: event.target.value
        })
    }

    async onSubmitFormHandler() {
        try {
            const response = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/user/register',
                data: this.state
            })
    
            console.log(response)
        } catch(error) {
            console.log(error.response)
        } 
    }

    render() {
        return (
            <div className="container-fluid">
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
                            <button onClick={() => this.onSubmitFormHandler()} className="form-input form-content form-submit-button">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage