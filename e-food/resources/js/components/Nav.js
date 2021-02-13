import React from 'react'

const Nav = ({ mainPage }) => {
    const renderLoginButton = () => {
        if (mainPage === true) {
            return <a href="/login" id="login-btn"><span>Entrar</span></a>
        }
    }

    return (
        <nav>
            {renderLoginButton()}
            <a href="#" className="header-item">payload</a>
            <a href="#" className="header-item">payload</a>
            <a href="#" className="header-item">payload</a>
        </nav>
    )
}

export default Nav