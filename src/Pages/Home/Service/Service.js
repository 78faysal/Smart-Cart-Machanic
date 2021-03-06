import React from 'react';
import './Service.css'

const Service = ({service}) => {
    // const {service} = props;
    const {name, price, description, img} = service;
    return (
        <div className='service'>
            <img className='img-fluid' src={img} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Service;