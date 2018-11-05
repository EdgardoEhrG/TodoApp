import React, { Component } from 'react';

/* Styles */
import "./search.scss"

export default class Search extends Component {
    render() {
        return (
            <input className="form-control search-input" placeholder="Search" />
        )
    }
}