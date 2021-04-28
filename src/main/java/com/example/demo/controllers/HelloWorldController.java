package com.example.demo.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @PostMapping("/api/echo")
    public String echoHelloWorld(@RequestBody String wordsToEcho) {
        return "\"Server says: " + wordsToEcho + "\"";
    }
}
