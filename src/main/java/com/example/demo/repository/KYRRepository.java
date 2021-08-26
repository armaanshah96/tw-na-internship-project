/*
 * © 2021 Thoughtworks, Inc.
 */

package com.example.demo.repository;

import com.example.demo.model.KYR;
import org.springframework.data.repository.CrudRepository;

public interface KYRRepository extends CrudRepository<KYR, Long> {
}
