import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Painel from './pages/Painel';
import Erro from './pages/Erro';
import Header from './components/Header';
import Filme from './pages/Filme';
import Login from './pages/Login';



const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route{...rest} render={props => (
        props.auth ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
    )} />
);

const verifyAuth = (auth) => {
	if(auth) {
        alert("verificado!")
		return (<Route exact path="/" component={Painel} />);
	} else {
		return (<Route exact path="/" component={Login} />);
	}
}

const Routes = (auth) => {
 return (
        <BrowserRouter>
            <Header />
            <Switch>
            
             {verifyAuth(auth)}

           
            
                <PrivateRoute exact path="/painel" component={Painel} auth={auth} />
                <Route exact path="/filme/:id" component={Filme} />

                <Route path="*" component={Erro} />


            </Switch>
        </BrowserRouter>
    )
}

export default Routes;