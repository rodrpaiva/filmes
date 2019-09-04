import React, { Component } from 'react';
import './login.css';
import Auth, { autenticado } from 'D:/Google Drive/Intcode/filmes/src/auth';
import Routes from '../../routes';




class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            senha: '',
            
        }

        this.logar = this.logar.bind(this);
        this.digitarUser = this.digitarUser.bind(this);
        this.digitarSenha = this.digitarSenha.bind(this);
    }

    logar(e) {
        if (this.state.username !== '' && this.state.senha !== '') {

            let auth = true;
            Routes(auth);
           
        } else {
            alert('oops, campo vazio')
        }

    }
    

    digitarUser(e) {

        this.setState({ username: e.target.value });
    }

    digitarSenha(e) {

        this.setState({ senha: e.target.value });
    }


    render() {
        return (
            <div className='container'>
                <form className='login'>
                    <img src={require("D:/Google Drive/Intcode/filmes/src/assets/icon.png")}/>
                    <h1>Sign In</h1><br/>
                    <input onChange={this.digitarUser} type="text" name="user" value={this.state.username} /><br />
                    
                    <input onChange={this.digitarSenha} type="password" name="senha" value={this.state.senha} /><br />
                    <a className='botao' onClick={this.logar}>ENTRAR</a>
                    
                </form>

            </div>
        );
    }
}

export default Login;