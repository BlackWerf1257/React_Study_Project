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
import com.example.dto.DtoUser;
import com.example.repository.UserRepo;
import com.example.service.UserService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	UserService userService;

    @PostMapping("/api/login")
    @CrossOrigin(origins = "http://127.0.0.1:3000/") // CORS 허용
    public Object[] Login(@RequestParam("id") String id, @RequestParam("pwd") String pwd)
    {
    	 UserEntity user = userRepo.findByIdAndPwd(id, pwd); // ID와 비밀번호로 사용자 조회
    	//UserEntity user = userService.LoginByIDandPW(id, pwd);
    	 Boolean isLoginSucceed;
    	 String nickName;
    	 if(user != null) 
    		 return new Object[] {true, user.getNickname()};
    	 else 
    		 return new Object[] {false, null};
    }
    
    
    @PostMapping("/api/register")
    @CrossOrigin(origins = "http://127.0.0.1:3000/") // CORS 허용
    public String Register(@RequestParam("id") String id, @RequestParam("pwd") String pwd, @RequestParam("age") Integer age, @RequestParam("nickname") String nickname)
    {
    	String result = userService.DuplicateIdNicknameCheck(id, nickname);
    	 if(result == null)
    	 {
    		 try {
    			 userService.Register(id, pwd, age, nickname);
    			 return "회원가입 성공";
    		 }
    		 catch(Exception e)
    		 {
    			 return e.getMessage();
    		 }
    	 }
    	 else return result;
    }
	
	/*
	 * @ResponseBody
	 * 
	 * @GetMapping("/getUserInfo") public Iterable<UserEntity> userApi(){ return
	 * //userService.GetUserApiInfo(); }
	 */
}
