import React from 'react'

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
            </div>
        )
    }
}

export default LoginPage