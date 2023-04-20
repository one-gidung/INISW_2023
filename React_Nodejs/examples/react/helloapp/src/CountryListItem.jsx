import React from 'react';
import styles from './styles';

const CountryListItem = (props) => {
    let item = props.countryitem;
    return (
        <li style={styles.listItemStyle} className={item.visited ? "list-group-item active" : "list-group-item"}>
            {item.country}
        </li>
    );
};

export default CountryListItem;