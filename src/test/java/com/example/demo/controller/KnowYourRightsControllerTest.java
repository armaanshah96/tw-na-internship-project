/*
 * © 2021 Thoughtworks, Inc.
 */

package com.example.demo.controller;

import com.example.demo.service.KYRService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class KnowYourRightsControllerTest {
    private KnowYourRightsController controller;
    @Mock
    private KYRService kyrService;



    @Test
    public void shouldFetchRightsFromService(){
     controller= new KnowYourRightsController(kyrService);
     controller.getAllKYR();
     verify(kyrService,times(1)).getAllKYR();


    }

}
