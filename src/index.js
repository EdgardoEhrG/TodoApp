import React from 'react';
import ReactDOM from 'react-dom';

/* React Components */

import AppHeader from './components/AppHeader/AppHeader';
import Search from './components/Search/Search';
import List from './components/List/List';

const App = () => {
    const todoData = [
        { label: 'Learn React', id: 1 },
        { label: 'Learn Redux', id: 2 },
        { label: 'Learn Next', id: 3 }
    ];
    
    return (
        <div>
            <AppHeader />
            <Search />
            <List todoData={ todoData } />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));