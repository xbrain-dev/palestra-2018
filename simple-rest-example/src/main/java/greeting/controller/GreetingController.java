package greeting.controller;

import greeting.model.Greeting;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    private List<Greeting> greetings = new ArrayList<>();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        Greeting greeting = new Greeting(counter.incrementAndGet(),
                String.format(template, name));
        greetings.add(greeting);
        return greeting;
    }

    @RequestMapping("/all-greeting")
    public List<Greeting> getAllGreeting() {
        return greetings;
    }

}
