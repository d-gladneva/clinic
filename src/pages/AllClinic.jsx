import React from 'react';
import Advantage from "../components/AllClinic/Advantage";
import BestClinic from "../components/AllClinic/BestClinic";
import BurgerMenu from "../components/AllClinic/BurgerMenu";
import BestService from "../components/AllClinic/BestService";
import Check from "../components/AllClinic/Check";
import AllClinicArticle from "../components/AllClinic/AllClinicArticle";

export default function AllClinic() {

    return (
        <div>
            <Advantage/>
            <BestClinic/>
            <BestService/>
            <Check/>
        </div>
    )
}