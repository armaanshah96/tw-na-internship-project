package com.example.demo.controller;

import com.example.demo.service.CatService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

/*
Key concepts: mock, verify a method is called, BeforeEach in tests
New Terms: Mockito (mocking library)

CHECKPOINT: What does `verify(someObject, times(someInt)).someMethod()` do? What is its purpose in the existing two tests?
CHECKPOINT: Can you identify the "Arrange, Act, Assert" stages of the test?

To go over together: test code flow, using a debugger breakpoint
 */

@ExtendWith(MockitoExtension.class)
public class CatControllerTests {
    private CatController controller;

    @Mock
    private CatService catService;

    @BeforeEach
    void init() { controller = new CatController(catService); }

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
