package com.example.demo.controller;

import org.junit.jupiter.api.Test;

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
