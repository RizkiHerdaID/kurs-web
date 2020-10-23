import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListKursComponent from './components/ListKursComponent';
import ListErateComponent from './components/ListErateComponent';
import ListUsdComponent from './components/ListUsdComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateKursComponent from './components/CreateKursComponent';
import CreateErateComponent from './components/CreateErateComponent';
import CreateUsdComponent from './components/CreateUsdComponent';
import ViewKursComponent from './components/ViewKursComponent';
import ViewErateComponent from './components/ViewErateComponent';
import ViewUsdComponent from './components/ViewUsdComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {ListKursComponent}></Route>

                          <Route path = "/kurs" component = {ListKursComponent}></Route>
                          <Route path = "/add-kurs/:id" component = {CreateKursComponent}></Route>
                          <Route path = "/view-kurs/:id" component = {ViewKursComponent}></Route>

                          <Route path = "/erate" component = {ListErateComponent}></Route>
                          <Route path = "/add-erate/:id" component = {CreateErateComponent}></Route>
                          <Route path = "/view-erate/:id" component = {ViewErateComponent}></Route>

                          <Route path = "/usd" component = {ListUsdComponent}></Route>
                          <Route path = "/add-usd/:id" component = {CreateUsdComponent}></Route>
                          <Route path = "/view-usd/:id" component = {ViewUsdComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>

  );
}

export default App;