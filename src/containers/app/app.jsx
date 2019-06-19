import React, { Component } from 'react';

import AppHeader from "../../components/app-header/app-header";
import Search from "../../components/search/search";
import List from "../../components/list/list";
import ItemStatusFilter from "../../components/item-status-filter/item-status-filter";
import ItemAddForm from "../../components/item-add-form/item-add-form";

import "./app.scss";

export default class App extends Component {

    /* ================ Static Properties ================ */

    maxId = 100;

    /* ================ State ================ */

    state = {
        todoData: [],
        term: '',
        filter: 'all'  // active, all (default) , done
    }

    /* ================ Handlers ================ */

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }
        });
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const arrItems = [ ...todoData, newItem ];
            return {
                todoData: arrItems
            }
        });
    }

    toggleProperty (arr, id, property) {
        const idx = arr.findIndex((el) => el.id === id);

            // 1. Update Object
            const oldItem = arr[idx];
            const newItem = { ...oldItem, [property]: !oldItem[property] };

            // 2. Construct New Array
            return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
            ];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    }

    onSearchChange = (term) => {
        this.setState({term});
    }

    onFilterChange = (filter) => {
        this.setState({filter});
    }

    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    filter(items, filter) {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    /* ================ Render ================ */

    render() {
        const { todoData, term, filter } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        const visibleItems = this.filter(this.search(todoData, term), filter);
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <Search onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
                </div>
                <List
                    todoData={ visibleItems }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}

