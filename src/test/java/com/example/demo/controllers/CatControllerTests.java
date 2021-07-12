package com.example.demo.controllers;

import com.example.demo.services.CatService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class CatControllerTests {
    private CatController controller;

    @Mock
    private CatService catService;

    @BeforeEach
    void init() {
        controller = new CatController(catService);
    }

    @Test
    public void shouldFetchCatsFromService() {
        controller.getAllCats();
        verify(catService, times(1)).getAllCats();
    }

    @Test
    public void shouldCallServiceForGrumpiestCat() {
        controller.findGrumpiestCat();
        verify(catService, times(1)).getMostGrumpyCat();
    }
}
