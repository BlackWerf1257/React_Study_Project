package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
	@GetMapping(value = {"/", "lobby"})
	public String Lobby() {
		return "home";
	}
}
