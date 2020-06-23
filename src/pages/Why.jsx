import React from 'react';
import Clinic from "../components/Why/Clinic";
import Turn from "../components/Why/Turn";
import Doctor from "../components/Why/Doctor";
import WhyPrice from "../components/Why/WhyPrice";

export default function Why() {

    return (
        <div>
            <Clinic/>
            <Turn/>
            <Doctor/>
            <WhyPrice/>
        </div>
    )
}