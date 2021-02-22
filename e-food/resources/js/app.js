import React from 'react'
import ReactDOM from 'react-dom'

import MainPage from './pages/MainPage'
import LoginPage from './pages/RegisterPage'

const maincontent = document.getElementById('maincontent')
const registercontent = document.getElementById('register-content')

if (maincontent) {
    ReactDOM.render(<MainPage />, document.getElementById('maincontent'))
}

if (registercontent) {
    ReactDOM.render(<LoginPage />, document.getElementById('register-content'))
}

