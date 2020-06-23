import React from 'react';
import PricePrice from "../components/Price/PricePrice";
import PriceAdvantage from "../components/Price/PriceAdvantage";
import More from "../components/Price/More";
import Subscription from "../components/Price/Subscription";

export default function Price() {

    return (
        <div>
            <PricePrice/>
            <PriceAdvantage/>
            <More/>
            <Subscription/>
        </div>
    )
}