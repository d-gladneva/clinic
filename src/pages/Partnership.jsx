import React from 'react';
import Consultations from "../components/Pathership/Consultations";
import Application from "../components/Pathership/Application";
import Save from "../components/Pathership/Save";
import Cost from "../components/Pathership/Cost";

export default function Partnership() {

    return (
        <div>
            <Consultations/>
            <Application/>
            <Save/>
            <Cost/>
        </div>
    )
}