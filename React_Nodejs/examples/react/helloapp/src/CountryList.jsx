import React from 'react';
import CountryListItem from './CountryListItem';

const CountryList = (props) => {
    let list = [
        { no:1, country:'이집트', visited:false },
        { no:2, country:'일본',  visited:true },
        { no:3, country:'피지', visited:false },
        { no:4, country:'콜롬비아', visited:false }
    ];

    let countries = props.countries.map((item)=>{
        return (
            <CountryListItem key={item.no} countryitem={item} />
        );
    });

    return (
        <ul className='list-group'>
            {countries}
        </ul>
    );
};

export default CountryList;