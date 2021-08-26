/*
 * © 2021 Thoughtworks, Inc.
 */

package com.example.demo.controller;

import com.example.demo.service.CatService;
import com.example.demo.service.KYRService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest
class HelloWorldControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CatService catService;

    @MockBean
    private KYRService cyrService;

    @Test
    public void shouldReturnSentMessage() throws Exception {
        mockMvc.perform(get("/api/echo").content("Hello!"))
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("Hello")));
    }

}
