import React from 'react';

import Comment from '../components/Comment';
import Article from '../components/Article';
import Price from "../components/Price1";
import Access from '../components/Access';
import City from '../components/Access';
import Why from '../components/Why';
import Reg from '../components/Reg';

const HomePage = () => (
    <div>
        <h1>HOME PAGE</h1>
        <Comment/>
        <Article/>
        <Price/>
        <Access/>
        <City/>
        <Why/>
        <Reg/>
    </div>
);

export default HomePage;
