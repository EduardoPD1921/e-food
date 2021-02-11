import React from 'react'

const Header = props => {
    return (
        <ul className="nav justify-content-end" id="header">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Payload</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Payload</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Payload</a>
            </li>
            <li className="nav-item">
                <button type="button" className="btn btn-outline-danger">Entrar</button>
            </li>
        </ul>
    )
}

export default Header