import React, { Component } from "react";

import "./list-item.scss";

import classNames from "classnames";

export default class ListItem extends Component {
  render() {
    const {
      label,
      important,
      done,
      onDeleted,
      onToggleImportant,
      onToggleDone,
    } = this.props;

    return (
      <span
        className={classNames("todo-list-item", {
          done: done,
          important: important,
        })}
      >
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <button
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>
        <button
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
