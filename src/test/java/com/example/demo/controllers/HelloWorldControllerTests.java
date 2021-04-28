package com.example.demo.controllers;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

class HelloWorldControllerTests {
    HelloWorldController subject = new HelloWorldController();

    @Test
    public void echoHelloWorld_shouldReturnHelloWorld() {
        String expectedEcho = "Hello world!";
        String actualEcho = subject.echoHelloWorld(expectedEcho);
        assertThat(actualEcho).isEqualTo(expectedEcho);
    }

}
