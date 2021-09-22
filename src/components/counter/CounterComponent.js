import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import CounterButton from './CounterButton'

class CounterComponent extends Component {
    
    constructor(props) {
        super(props);
        console.log("Constructor called")
    }

    state = {
        count: 0
    }

    handleChange = (newValue) => {
        if (this.state.count == 0 && newValue == -1) {
            this.setState({
                count : this.state.count
            })
        }
        else {
            this.setState({
                count : this.state.count + newValue
            })
        }  
    }

    componentDidMount() {
        console.log("ComponentDidMount called")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("ComponentDidUpdate called")
    }
    
    render() {
        console.log("Render Called")
        return (
            <Col className="mt-5">
                <h3>{this.state.count}</h3>
                <CounterButton onHandleChange={(value) => this.handleChange(value)}/>
            </Col>
        )
    }
}

export default CounterComponent;