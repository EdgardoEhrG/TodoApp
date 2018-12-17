import React from 'react';

/* Components */
import ListItem from "../list-item/list-item";

const List = ({ todoData, onDeleted, onToggleImportant, onToggleDone }) => {
    const elements = todoData.map((item) => {

        const { id, label, important, done } = item;

        return (
            <li key={id} className="list-group-item">
                <ListItem label={label} important={important} done={done}
                onDeleted={() => onDeleted(id) }
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id) } />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default List;