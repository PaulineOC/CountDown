
import React, { Component } from 'react';

const Lego = ({text}, key) => {
    return (<p className = "unit" key={key}>{text}</p>)
}

export default Lego;
