import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ HomeContainer }></Route>
          <Route exact path="/customers" component={ CustomersContainer }></Route>
          <Switch>
            <Route path="/customers/new" component={ NewCustomerContainer }></Route>
            <Route path="/customers/:dni" render={ props => <CustomerContainer dni={ props.match.params.dni }/> }></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
