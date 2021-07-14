package com.example.demo.service;

import com.example.demo.model.KYR;
import com.example.demo.repository.KYRRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class KYRServiceTest {

    KYRService service;

    @Mock
    private KYRRepository kyrRepository;
/*
    @BeforeEach
    void init() {
        service = new KYRService(kyrRepository);
    }
*/

    @Test
    public void getAllKYR_shouldGetKYRContent(){

        service = new KYRService(kyrRepository);
        service.getAllKYR();
        verify(kyrRepository,times(1)).findAll();
    }
}
