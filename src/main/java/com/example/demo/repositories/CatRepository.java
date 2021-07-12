package com.example.demo.repositories;

import com.example.demo.models.Cat;
import org.springframework.data.repository.CrudRepository;

public interface CatRepository extends CrudRepository<Cat, Long> {

    Cat findById(long id);

}
