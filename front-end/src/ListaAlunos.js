import React, { Component } from 'react';

import { fetchAlunos } from './Api';

import './App.css';

class App extends Component {
  state = {
    alunos: null
  };

  componentDidMount() {
    this.initialize();
  }

  initialize = async () => {
    fetchAlunos()
      .then(results => results.json())
      .then(data => {
        this.setState({ alunos: data });
      });
  };

  render() {
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
  }
}

export default App;
