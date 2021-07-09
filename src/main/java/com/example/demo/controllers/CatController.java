package com.example.demo.controllers;

import com.example.demo.models.RandomCatResponseDTO;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class CatController {
    /*
    * Rest template is used to make synchronous restful requests in Spring
    * The builder allows us to modify the created rest template, eg we could add
    * basic auth or an interceptor for more complex modifications/additions/headers
    * */
    RestTemplate restTemplate = new RestTemplateBuilder().build();

    @GetMapping("/api/cats")
    public RandomCatResponseDTO echoHelloWorld() {
        /*
        * getForObject returns whatever data is associated with the response, getForEntity would give us access
        * to the original response object itself. The actual response object contains status code and whatever
        * else you'd expect to be returned from the server in addition to the thing we actually ask for
        * */
        return restTemplate.getForObject("https://aws.random.cat/meow", RandomCatResponseDTO.class);
    }
}
