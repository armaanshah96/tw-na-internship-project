/*
 * © 2021 Thoughtworks, Inc.
 */

package com.example.demo.controller;

import com.example.demo.model.Cat;
import com.example.demo.service.CatService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CatController {

    /*
    Key concepts: GetMapping (HTTP Get request), Dependency Injection (we will not be going over this bc of time)

    CHECKPOINT: What layer of our backend application is this?
    CHECKPOINT: Can you figure out 3 ways to test and verify that `getAllCats` and `findGrumpiestCat` functions are working as expected?

    To go over together: GetMapping, methods of manually testing, why we call a Service instead of a Repository here
     */

    private final CatService catService;

    public CatController(CatService catService) {
        this.catService = catService;
    }

    @GetMapping("/api/cats")
    public Iterable<Cat> getAllCats() {
        return catService.getAllCats();
    }

    @GetMapping("/api/cats/grumpiest")
    public Cat findGrumpiestCat() {
        return catService.getMostGrumpyCat();
    }

    /*
        NEW AS OF 7/13/21:

        CHECKPOINT: What does @PostMapping below do? Why do we use a POST request instead of a GET request here?

     */

    @PostMapping("/api/cats/")
    public Cat createRandomCat(@RequestBody String catSuffix) {
        return catService.createRandomCat(catSuffix);
    }

}
