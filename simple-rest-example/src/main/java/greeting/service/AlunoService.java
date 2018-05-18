package greeting.service;

import greeting.model.Aluno;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AlunoService {

    private List<Aluno> alunos = new ArrayList<>();

    public Aluno save(Aluno aluno) {
        alunos.add(aluno);
        return aluno;
    }

    public List<Aluno> getAll() {
        return alunos;
    }

}
