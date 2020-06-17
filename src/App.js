import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './containers/HomePage';
// import AllClinic from "./components/pages/AllClinic";
// import Why from "./components/pages/Why";
// import Work from "./components/pages/Work";
// import Price1 from "./components/pages/Price1";
// import City from "./components/pages/City";
// import Partnership from "./components/pages/Partnership";
import Header from './components/Header';
import Footer from './components/Footer';

// TODO: что это блять за роутер (c .html)??

const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route path='/' exact component={HomePage} />
            {/* <Route path='/all-clinic.html' exact component={AllClinic} />
            <Route path='/why.html' exact component={Why} />
            <Route path='/work.html' exact component={Work} />
            <Route path='/price.html' exact component={Price1} />
            <Route path='/city.html' exact component={City} />
            <Route path='/partnership.html' exact component={Partnership} /> */}
        </Switch>
        <Footer />
    </Router>
);

export default App;
