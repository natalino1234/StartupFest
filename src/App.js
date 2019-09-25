import React, { Component } from 'react';
import './App.css';
import { routes } from './routes';
import { Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import MenuItem from './components/MenuItem/MenuItem';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu>
                    <MenuItem nome="Empresas" icon="fa-th-list" path="/" />
                    <MenuItem nome="Ranking" icon="fa-clipboard-list" path="/Ranking" />
                </Menu>
                <main>
                    {routes.map((value, index) => {
                        return <Route key={index} exact={value.exact} path={value.path} component={value.component} />;
                    })}
                </main>
            </div>
        );
    }
}

export default App;
