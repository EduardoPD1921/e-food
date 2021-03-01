import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './Routes'

import { AuthProvider } from '../AuthContext'

const ReactRouter = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<ReactRouter />, document.getElementById('app'))
}