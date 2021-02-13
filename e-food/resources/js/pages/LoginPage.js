import React from 'react'

import Nav from '../components/Nav'

import illustration from '../../../public/images/loginIllustration.png'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

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

                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage