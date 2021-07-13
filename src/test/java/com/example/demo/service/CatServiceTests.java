package com.example.demo.service;

import com.example.demo.model.Cat;
import com.example.demo.repository.CatRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.*;

/*
Key concepts: mock, verify a method is called, stub, BeforeEach in tests
New Terms: Mockito (mocking library)

CHECKPOINT: What does `when(someObject.someMethod()).thenReturn(someReturnObject)` do? What is its purpose in the existing test?
CHECKPOINT: Can you identify the "Arrange, Act, Assert" stages of the test?

To go over together: why use a stub for `getMostGrumpyCat` test?
 */

@ExtendWith(MockitoExtension.class)
public class CatServiceTests {
    CatService service;

    @Mock
    private CatRepository catRepository;

    @BeforeEach
    void init() {
        service = new CatService(catRepository);
    }

    @Test
    public void getAllCats_shouldFetchCatsFromRepository() {
        service.getAllCats();
        verify(catRepository, times(1)).findAll();
    }

    @Test
    public void mostRecentlyAddedCat_shouldReturnCatWithHighestGrumpinessLevel() {
        Cat firstCat = new Cat("first", "orange", 5);
        Cat secondCat = new Cat("second", "green", 9);
        Cat thirdCat = new Cat("third", "blue", 2);

        when(catRepository.findAll()).thenReturn(Arrays.asList(firstCat, secondCat, thirdCat));

        Cat actualCat = service.getMostGrumpyCat();

        assertThat(actualCat).isEqualTo(secondCat);
    }

    /*
        NEW AS OF 7/13/21:

        CHECKPOINT: What is being "verified" here?

     */

    @Test
    public void createRandomCat_shouldSaveWithACat() {
        service.createRandomCat("Jr");
        verify(catRepository, times(1)).save(any(Cat.class));
    }
}
