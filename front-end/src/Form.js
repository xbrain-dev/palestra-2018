import React, { Component } from 'react';

import { salvarAluno } from './Api';
import Button from './components/Button';
import TextField from './components/TextField';

import './App.css';
import Logo from './assets/logo.png';

class App extends Component {
  state = {
    nome: '',
    idade: '',
    rg: ''
  };

  handleChangeNome = event => {
    this.setState({ nome: event.target.value });
  };

  handleChangeIdade = event => {
    this.setState({ idade: event.target.value });
  };

  handleChangeRg = event => {
    this.setState({ rg: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { nome, idade, rg } = this.state;

    if (!nome) {
      return alert('Preencha o campo nome.');
    }

    if (!idade) {
      return alert('Preencha o campo idade.');
    }

    if (!rg) {
      return alert('Preencha o campo RG.');
    }

    try {
      await salvarAluno({
        nome: this.state.nome,
        idade: this.state.idade,
        rg: this.state.rg
      });

      this.setState({ nome: '', idade: '', rg: '' }, () => alert('Usuário salvo com sucesso'));
    } catch (error) {
      throw error;
    }
  };

  render() {
    const { nome, idade, rg } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <img className="logo" src={Logo} alt="" />
        <div className="container">
          <h2>Cadastrar Aluno</h2>
          <TextField
            value={nome}
            autoFocus
            onChange={this.handleChangeNome}
            label="Nome *"
            name="nome"
          />
          <TextField value={idade} onChange={this.handleChangeIdade} label="Idade *" name="idade" />
          <TextField value={rg} onChange={this.handleChangeRg} label="RG *" name="rg" />
          <Button type="submit">Salvar Aluno</Button>
        </div>
      </form>
    );
  }
}

export default App;
