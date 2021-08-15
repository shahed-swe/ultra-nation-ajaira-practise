import React from 'react';
import '../../App.css'

const Country = (props) => {

    const flagStyle = {height: '50px'}
    const {name, population, area, region, flag}= props.country;
    return (
        <div className="country" key={name}>
            <img src={flag} alt="" style={flagStyle}/>
            <div className="countryname">{name}</div>
            <div className="population">{population}</div>
            <div className="area">{area}</div>
            <div className="region">{region}</div>
            <button className="add-button" onClick={() => props.handleCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;