import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { red } from '@material-ui/core/colors'

import Nav from '../components/Nav'

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
                <section className="main-content">
                    <div className="login-form">
                        <AccountCircleIcon style={{ fontSize: 60, color: red[600] }} />
                    </div>
                </section>
            </div>
        )
    }
}

export default LoginPage