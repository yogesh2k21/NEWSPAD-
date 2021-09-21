import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div style={{margin:"100px"}} className="flex justify-center ">
                <img src={loading} alt="loading" />
            </div>
        )
    }
}
