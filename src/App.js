import React from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import AllClinic from "./components/pages/AllClinic";
import Why from "./components/pages/Why";
import Work from "./components/pages/Work";
import Price1 from "./components/pages/Price1";
import City from "./components/pages/City";
import Partnership from "./components/pages/Partnership";

import './css/main.css'
import './css/media.css'
import './css/all-clinic.css'
import './css/all-clinic-media.css'
import './css/city.css'
import './css/city-media.css'
import './css/connect.css'
import './css/connect-media.css'
// import './fonts.css'
import './css/partnership.css'
import './css/partnership-media.css'
import './css/price.css'
import './css/price-media.css'
import './css/why.css'
import './css/work-media.css'
import './css/work.css'
import './css/why-media.css'


import './css/vendor/bootstrap.min.css'
// import './css/vendor/chosen.css'
import './css/vendor/fm.revealator.jquery.min.css'
// import './css/vendor/font-awesome.css'
// import './css/vendor/jquery.arcticmodal-0.3.css'
// import './css/vendor/owl.carousel.min.css'
// import './css/vendor/pushy.css'
import './css/vendor/slick.css'


// import './css/vendor/slick-theme.css'


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/all-clinic.html' exact component={AllClinic}/>
                <Route path='/why.html' exact component={Why}/>
                <Route path='/work.html' exact component={Work}/>
                <Route path='/price.html' exact component={Price1}/>
                <Route path='/city.html' exact component={City}/>
                <Route path='/partnership.html' exact component={Partnership}/>
            </Switch>
        </Router>
    );
}
