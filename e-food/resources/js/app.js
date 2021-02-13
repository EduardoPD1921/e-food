import React from 'react'
import ReactDOM from 'react-dom'

import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'

const maincontent = document.getElementById('maincontent')
const logincontent = document.getElementById('login-content')

if (maincontent) {
    ReactDOM.render(<MainPage />, document.getElementById('maincontent'))
}

if (logincontent) {
    ReactDOM.render(<LoginPage />, document.getElementById('login-content'))
}

