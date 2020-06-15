import React from 'react';
import {Header} from "../common/Header";
import {Comment} from "../common/Comment";
import {Article} from "../common/Article";
import {Price} from "../common/Price1";
import {Access} from "../common/Access";
import {City} from "../common/City";
import {Why} from "../common/Why";
import {Reg} from "../common/Reg";
import {Footer} from "../common/Footer";

export default function HomePage() {

    return (
        <div>
            <h1>HOME PAGE</h1>
            <Header/>
            <Comment/>
            <Article/>
            <Price/>
            <Access/>
            <City/>
            <Why/>
            <Reg/>
            <Footer/>
        </div>
    )
}