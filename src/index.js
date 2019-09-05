import React from 'react';
import Router from 'router';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProductDetails from './product/productDetails';
import NotFound from './not_found';

import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
ReactDOM.render(<BrowserRouter>
    <div>
        <Switch>
           <Router>
               <Route path="/productDetails/:id" component={ProductDetails}></Route>
                <Route  exact path="/" component={App}></Route>
                <Route path="*" component = {NotFound}></Route>
           </Router>
        </Switch>
    </div>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
