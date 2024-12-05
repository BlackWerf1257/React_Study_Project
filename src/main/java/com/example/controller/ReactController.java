package com.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReactController {
    @GetMapping("/api/data") 
    public String test() {
        return "First, world!";
    }
}
