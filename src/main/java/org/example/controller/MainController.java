package org.example.controller;

import lombok.RequiredArgsConstructor;
import org.example.controller.dto.RequestFormRequest;
import org.example.service.FormHandlerService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class MainController {
    private final FormHandlerService formHandlerService;

    @PostMapping("/form/request")
    public void sendForm(@RequestBody RequestFormRequest request){
        formHandlerService.handleRequest(request);
    }
}
