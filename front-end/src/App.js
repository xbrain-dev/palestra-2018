import React, { Component } from 'react';

import { salvarAluno } from './Api';
import Button from './components/Button';
import TextField from './components/TextField';

import './App.css';
import Logo from './assets/logo.png';
import { fetchAlunos } from './Api';

class App extends Component {
  state = {
    nome: '',
    idade: '',
    rg: '',
    alunos: null
  };

  componentDidMount() {
    this.fetchAllAlunos();
  }

  fetchAllAlunos = async () => {
    fetchAlunos()
      .then(results => results.json())
      .then(data => {
        this.setState({ alunos: data });
      });
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

      this.setState({ nome: '', idade: '', rg: '' }, () => {
        this.fetchAllAlunos();
      });
    } catch (error) {
      throw error;
    }
  };

  renderForm = () => {
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
  };

  renderListaAlunos = () => {
    const { alunos } = this.state;

    return (
      Array.isArray(alunos) &&
      alunos.length > 0 && (
        <div className="container">
          <h2>Listar Alunos</h2>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>RG</th>
              </tr>
            </thead>
            <tbody>
              {alunos.map(aluno => (
                <tr key={aluno.rg}>
                  <td>{aluno.nome}</td>
                  <td>{aluno.idade}</td>
                  <td>{aluno.rg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    );
  };

  render() {
    return (
      <div>
        {this.renderForm()}
        {this.renderListaAlunos()}
      </div>
    );
  }
}

export default App;
