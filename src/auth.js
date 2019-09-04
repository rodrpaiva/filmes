import React, {Component} from 'react';
import Routes from './routes';

class Auth extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: props.username,
            senha: props.senha
        }



    }

    componentDidMount(){
        //testar se user e senha estão corretos
        let auth = true;
        autenticado(auth);
    }
    render(){
        return(
            <div>

            </div>
        );
    }
}
export default Auth;



export var autenticado = (auth) =>{
    
    return auth;
}



