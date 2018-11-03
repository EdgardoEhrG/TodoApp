import React from 'react';

/* Components */
import ListItem from '../ListItem/ListItem';

const List = ({ todoData }) => {
    const elements = todoData.map((item) => {
        return (
            <li key={item.id}>
                <ListItem label={item.label} />
            </li>
        );
    });

    return (
        <ul>
            { elements }
        </ul>
    );
};

export default List;