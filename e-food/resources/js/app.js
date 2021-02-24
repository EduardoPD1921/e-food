import React from 'react'
import ReactDOM from 'react-dom'

import MainPage from './pages/MainPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

const maincontent = document.getElementById('maincontent')
const registercontent = document.getElementById('register-content')
const logincontent = document.getElementById('login-content')

if (maincontent) {
    ReactDOM.render(<MainPage />, document.getElementById('maincontent'))
}

if (registercontent) {
    ReactDOM.render(<RegisterPage />, document.getElementById('register-content'))
}

if (logincontent) {
    ReactDOM.render(<LoginPage />, document.getElementById('login-content'))
}