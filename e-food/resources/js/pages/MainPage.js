import React from 'react'

import Test from '../components/Test'

class MainPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            test: 1
        }
    }

    render() {
        return (
            <div>
                <h1>Test</h1>
                <h2>{this.state.test}</h2>
                <Test />
            </div>
        )
    }
}

export default MainPage