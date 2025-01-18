package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.repository.UserRepo;
import com.example.Entity.UserEntity;
//내부에서 자바 로직 처리
@Service
public class UserService {
	@Autowired
	UserRepo userRepo;
	
	
	//로그인
	public UserEntity LoginByIDandPW(String id, String pwd)
	{
		if(userRepo.findByIdAndPwd(id, pwd) == null)
			return null;
		else return (UserEntity)userRepo.findById(id);
	}
	
	
	
	//중복 판정용
	public String DuplicateIdNicknameCheck(String id, String nickName)
	{
		if(!userRepo.findByNickname(nickName).isEmpty())
		{
			
			return "유저명 중복";
		}
		if(!userRepo.findById(id).isEmpty())
		{
			return "ID 중복";
		}
		
		return null;
	}
	
	/*
	 * public Boolean DuplicateIdNicknameCheck(String id, String nickName) {
	 * if(userRepo.findByNickname(nickName).isEmpty()) { return true; }
	 * if(userRepo.findById(id).isEmpty()) { return true; }
	 * 
	 * return false; }
	 */
	
	//회원가입
	public UserEntity Register(String id, String pwd, Integer age, String nickname) {
		UserEntity newUser = new UserEntity();
		newUser.setId(id);
		newUser.setPwd(pwd);
		newUser.setAge(age);
		newUser.setNickname(nickname);
		
		return userRepo.save(newUser);
	}
}
