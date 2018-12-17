import React, { Component } from 'react';

/* Styles */
import "./list-item.scss";

export default class ListItem extends Component {
    render() {
        const { label, important, done, onDeleted, onToggleImportant, onToggleDone } = this.props;

        /* ================ Classes ================ */

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        /* ================ Markup ================ */

        return (
            <span className={classNames}>
                <span className="todo-list-item-label" onClick={ onToggleDone }>{ label }</span>
                <button className="btn btn-outline-success btn-sm float-right" onClick={ onToggleImportant }>
                    <i className="fa fa-exclamation" />
                </button>
                <button className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        )
    }
}