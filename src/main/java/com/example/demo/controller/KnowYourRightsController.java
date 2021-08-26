/*
 * © 2021 Thoughtworks, Inc.
 */

package com.example.demo.controller;

import com.example.demo.model.KYR;
import com.example.demo.service.KYRService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KnowYourRightsController {
    private final KYRService kyrService;

    public KnowYourRightsController(KYRService kyrService){
        this.kyrService=kyrService;

    }
    @GetMapping("/api/know-your-rights")
    public Iterable<KYR> getAllKYR(){
        return kyrService.getAllKYR();
    }

}
