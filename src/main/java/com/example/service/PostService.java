package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Entity.PostEntity;
import com.example.repository.PostRepo;

@Service
public class PostService {
	@Autowired
	PostRepo postRepo;
	
	public PostEntity PostSubmit(String title, String nickName, String detail) {
		PostEntity newPost = new PostEntity();
		newPost.setTitle(title);
		newPost.setNickname(nickName);
		newPost.setDetail(detail);
		
		return postRepo.save(newPost);
	}
}
