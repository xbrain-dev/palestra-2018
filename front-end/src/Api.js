export const salvarAluno = aluno => {
  return fetch('http://localhost:8080/aluno', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(aluno)
  });
};

export const fetchAlunos = aluno => {
  return fetch('http://localhost:8080/aluno', {
    method: 'GET'
  });
};
