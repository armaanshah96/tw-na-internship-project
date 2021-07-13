package com.example.demo.service;

import com.example.demo.model.Cat;
import com.example.demo.repository.CatRepository;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Random;

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
        Cat mostGrumpyCat = allCats.iterator().next();

        for(Cat cat : allCats) {
            if(mostGrumpyCat.getGrumpiness() < cat.getGrumpiness()) {
                mostGrumpyCat = cat;
            }
        }

        return mostGrumpyCat;
    }

    /*
        NEW AS OF 7/13/21:

        CHECKPOINT: What does '.save' do in the catRepository?

        Note: this is a better example of work that would happen in the Service. This "business logic" is intended to
        provide a Cat with randomly generated fields
     */

    public Cat createRandomCat(String catSuffix) {
        String randomName = generateRandomString().concat(catSuffix);
        String randomColor = generateRandomString();
        int randomGrumpiness = (int)(Math.random() * 10);
        Cat randomNewCat = new Cat(randomName, randomColor, randomGrumpiness);

        return catRepository.save(randomNewCat);
    }

    /*
        Don't worry about how the code in generateRandomString() works, it's just to demonstrate how a service might be useful for other logic.
     */
    private String generateRandomString() {
        byte[] array = new byte[7]; // length is bounded by 7
        new Random().nextBytes(array);

        return new String(array, StandardCharsets.UTF_8);
    }
}
