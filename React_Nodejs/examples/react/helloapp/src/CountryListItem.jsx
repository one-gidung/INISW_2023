import React from 'react';

const CountryListItem = (props) => {
    let item = props.countryitem;
    return (
        <li className={item.visited ? "list-group-item active" : "list-group-item"}>
            {item.country}
        </li>
    );
};

export default CountryListItem;