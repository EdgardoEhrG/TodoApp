import React, { Component } from 'react';

/* Styles */
import "./item-add-form.scss";

export default class ItemFormAdd extends Component {

    /* ================ State ================ */

    state = {
        label: ''
    }

    /* ================ Events ================ */

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    }

    /* ================ Render ================ */

    render() {
        const { label } = this.state;
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control"
                    value={label}
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done?"
                />
                <button className="btn btn-outline-secondary">Add Item</button>
            </form>
        )
    }
}