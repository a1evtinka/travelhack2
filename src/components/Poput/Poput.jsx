import React, {useRef, useState} from "react";
import {data} from '../tinderActions/data.js';
import Tinder from "../tinderActions/Tinder";


const Poput = () => {

    return (
        <>
            <Tinder data={data}/> 
        </>
    )
}

export default Poput;
