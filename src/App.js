import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Routes from './router'

function App() {
  return (
    <HashRouter>
      <div >
  
          <Switch>
            {
              Routes.map((item, index) => {
                return <Route key={'route_' + index}
                  path={item.path}
                  component={item.component}
                  exact={item.exact || false}
                />
              })
            }
          </Switch>
        </div>
  
    </HashRouter>
  );
}

export default App;
