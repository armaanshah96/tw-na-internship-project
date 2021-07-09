package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/api/echo")
    public String echoHelloWorld(@RequestBody String wordsToEcho) {
        return wordsToEcho;
    }
}
