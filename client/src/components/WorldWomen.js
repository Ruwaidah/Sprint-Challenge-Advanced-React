import React, { Component } from 'react'
import axios from 'axios';
import AllPlayers from './AllPlayers'

class WorldWomen extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
            .then(respo => this.setState({
                    data: respo.data
            }))
    }

    render() {
        console.log(this.state.data)
    return (
        <AllPlayers data = {this.state.data} />
    )
    }
}

export default WorldWomen