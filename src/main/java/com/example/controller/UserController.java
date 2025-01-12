package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.Entity.UserEntity;
import com.example.repository.UserRepo;
import com.example.service.UserService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	@Autowired
	private UserRepo userRepo;

    @PostMapping("/api/login")
    @CrossOrigin(origins = "http://127.0.0.1:3000/") // CORS 허용
    public String Login(@RequestParam String id, @RequestParam String pwd)
    {
    	 UserEntity user = userRepo.findByIdAndPwd(id, pwd); // ID와 비밀번호로 사용자 조회
    	 
    	 if(user != null)
    		 return "로그인 성공";
    	 else 
    		 return "ID나 비밀번호가 일치하지 않습니다";
    }
	
	/*
	 * @ResponseBody
	 * 
	 * @GetMapping("/getUserInfo") public Iterable<UserEntity> userApi(){ return
	 * //userService.GetUserApiInfo(); }
	 */
}
