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
	
	/*
	 * public List<UserEntity> GetUserApiInfo() { return userRepo.findAll(); }
	 */
}
