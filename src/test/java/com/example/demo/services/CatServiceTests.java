package com.example.demo.services;

import com.example.demo.models.Cat;
import com.example.demo.repositories.CatRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.*;

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
}
