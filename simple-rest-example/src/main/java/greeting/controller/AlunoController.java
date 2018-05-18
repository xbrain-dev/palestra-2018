package greeting.controller;

import greeting.model.Aluno;
import greeting.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "aluno")
public class AlunoController {

    @Autowired
    private AlunoService service;

    @RequestMapping(method = RequestMethod.POST)
    public Aluno save(@RequestBody Aluno aluno) {
        return service.save(aluno);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Aluno> getAll() {
        return service.getAll();
    }
}
