import React from 'react'
import ReactDOM from 'react-dom'

import MainPage from './pages/MainPage'

const maincontent = document.getElementById('maincontent')

if (maincontent) {
    ReactDOM.render(<MainPage />, document.getElementById('maincontent'))
}