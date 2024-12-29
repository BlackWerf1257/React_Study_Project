package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.Entity.UserEntity;
import com.example.service.UserService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	@Autowired
	private UserService userService;


	
	@ResponseBody
	@GetMapping("/getUserInfo")
	public List<UserEntity> userApi(){
		return userService.GetUserApiInfo();
	}
}
