package com.example.demo.services;

import com.example.demo.models.Cat;
import com.example.demo.repositories.CatRepository;
import org.springframework.stereotype.Service;

@Service
public class CatService {

    private final CatRepository catRepository;

    public CatService(CatRepository catRepository) {
        this.catRepository = catRepository;
    }

    public Iterable<Cat> getAllCats() {
        return catRepository.findAll();
    }

    public Cat getMostGrumpyCat() {
        Iterable<Cat> allCats = catRepository.findAll();
        Cat mostRecentCat = allCats.iterator().next();

        for(Cat cat : allCats) {
            if(mostRecentCat.getGrumpiness() < cat.getGrumpiness()) {
                mostRecentCat = cat;
            }
        }

        return mostRecentCat;
    }
}
