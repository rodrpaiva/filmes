import React, { Component } from 'react';
import './login.css';
import { autenticado } from '..../auth';



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
            <div >
                <form className='login'>

                    <a>USERNAME</a><br />
                    <input onChange={this.digitarUser} type="text" name="user" value={this.state.username} /><br />
                    <a>SENHA</a><br />
                    <input onChange={this.digitarSenha} type="password" name="senha" value={this.state.senha} /><br />
                    <a className='botao' onClick={this.logar}>ENTRAR</a>
                    
                </form>

            </div>
        );
    }
}

export default Login;