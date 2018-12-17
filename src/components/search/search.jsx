import React, { Component } from 'react';

/* Styles */
import "./search.scss";

export default class Search extends Component {

    /* ================ State ================ */

    state = {
        term: ''
    }

    /* ================ Events ================ */

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    }

    /* ================ Render ================ */

    render() {
        const { term } = this.state;
        return (
            <input 
                className="form-control search-input"
                placeholder="Search"
                value={term}
                onChange={this.onSearchChange}
            />
        )
    }
}