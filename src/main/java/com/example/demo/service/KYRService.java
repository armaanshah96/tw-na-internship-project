package com.example.demo.service;

import com.example.demo.model.KYR;
import com.example.demo.repository.KYRRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public class KYRService {

    private final KYRRepository kyrRepository;

    public KYRService(KYRRepository kyrRepository){
        this.kyrRepository = kyrRepository;

    }
    public Iterable<KYR> getAllKYR(){
        return kyrRepository.findAll();
    }
}
