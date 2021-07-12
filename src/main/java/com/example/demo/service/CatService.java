package com.example.demo.service;

import com.example.demo.model.Cat;
import com.example.demo.repository.CatRepository;
import org.springframework.stereotype.Service;

@Service
public class CatService {

    /*
    Key concepts: Dependency Injection (we will not be going over this bc of time), @Service annotation

    CHECKPOINT: What layer of the application is this?
    CHECKPOINT: What is the point of the service layer here?

    To go over together: go over functions
     */

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
