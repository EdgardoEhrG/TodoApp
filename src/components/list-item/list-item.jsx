import React, { Component } from 'react';

/* Styles */
import "./list-item.scss";

export default class ListItem extends Component {

    /* ================ State ================ */

    state = {
        done: false,
        important: false
    };

    /* ================ Events ================ */

    onLabelClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            }
        });
    };

    onMarkImportant = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        });
    }

    /* ================ Render ================ */

    render() {
        const { label } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span className="todo-list-item-label" onClick={ this.onLabelClick.bind(this) }>{ label }</span>
                <button className="btn btn-outline-success btn-sm float-right" onClick={ this.onMarkImportant }>
                    <i className="fa fa-exclamation" />
                </button>
                <button className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        )
    }
}