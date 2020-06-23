import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import Why from "./pages/Why";
import Work from "./pages/Work";
import Price1 from "./pages/Price1";
import City from "./pages/City";
import Header from './components/HomePage/Header';
import Footer from './components/HomePage/Footer';
import AllClinic from "./pages/AllClinic";
import Reg from "./components/HomePage/Reg";
import Partnership from "./pages/Partnership";
import Article from "./components/HomePage/Article";
import Connect from "./pages/Connect";

const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/all-clinic' exact component={AllClinic} />
            <Route path='/why' exact component={Why} />
            <Route path='/work' exact component={Work} />
            <Route path='/price' exact component={Price1} />
            <Route path='/city' exact component={City} />
            <Route path='/partnership' exact component={Partnership} />
            <Route path='/connect' exact component={Connect} />
        </Switch>
        <Article/>
        <Reg/>
        <Footer />
    </Router>
);

export default App;
