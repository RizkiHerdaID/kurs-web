import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListKursComponent from './components/ListKursComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateKursComponent from './components/CreateKursComponent';
import ViewKursComponent from './components/ViewKursComponent';

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
                          {/* <Route path = "/update-kurs/:id" component = {UpdateKursComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>

  );
}

export default App;