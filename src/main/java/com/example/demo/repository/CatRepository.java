/*
 * © 2021 Thoughtworks, Inc.
 */

package com.example.demo.repository;

import com.example.demo.model.Cat;
import org.springframework.data.repository.CrudRepository;

public interface CatRepository extends CrudRepository<Cat, Long> {

    /*
    Key concepts: Spring Data JPA

    CHECKPOINT: Tricky - can you figure out how this is implemented and what functions are provided?
    CHECKPOINT: What layer of the application is this?

    To go over together: CrudRepository documentation with SpringBoot, how Spring Data JPA makes this work
     */

    Cat findById(long id);

}
