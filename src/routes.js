import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Painel from './pages/Painel';
import Erro from './pages/Erro';
import Header from './components/Header';
import Filme from './pages/Filme';
import Login from './pages/Login';
import { autenticado } from './auth';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route{...rest} render={props => (
        autenticado() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
    )} />
);

const Routes = () => {




    return (
        <BrowserRouter>
            <Header />
            <Switch>

            {!autenticado() ? (<Route exact path="/" component={Login} />
            ):(
                <Route exact path="/" component={Painel} />
            )}

           
            
                <PrivateRoute exact path="/painel" component={Painel} />
                <Route exact path="/filme/:id" component={Filme} />

                <Route path="*" component={Erro} />


            </Switch>
        </BrowserRouter>
    )
}

export default Routes;