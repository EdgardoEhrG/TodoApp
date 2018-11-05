import React from 'react';

/* Components */
import ListItem from "../list-item/list-item";

/* Styles */
import "./list.scss";

const List = ({ todoData }) => {
    const elements = todoData.map((item) => {

        const { id, label, important } = item;

        return (
            <li key={id} className="list-group-item">
                <ListItem label={label} important={important} />
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