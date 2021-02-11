import React from 'react'

import Header from '../components/Header'

class MainPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container-fluid">
                <Header />
            </div>
        )
    }
}

export default MainPage