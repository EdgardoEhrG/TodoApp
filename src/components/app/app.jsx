import React, { Component } from 'react';

/* Components */

import AppHeader from "../app-header/app-header";
import Search from "../search/search";
import List from "../list/list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

/* Styles */
import "./app.scss";

export default class App extends Component {
    render() {
        const todoData = [
            { label: 'Learn React', id: 1 },
            { label: 'Learn Redux', id: 2 },
            { label: 'Learn Next', id: 3 }
        ];
        
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <Search />
                    <ItemStatusFilter />
                </div>
                <List todoData={ todoData } />
            </div>
        );
    }
}

