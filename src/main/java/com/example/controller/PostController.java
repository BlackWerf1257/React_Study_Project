package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entity.PostEntity;
import com.example.repository.PostRepo;

@RestController
public class PostController {
	@Autowired
	PostRepo postRepo;
	
	@GetMapping("/posts")
    public List<PostEntity> getAllPosts() {
        // DB에서 게시물 리스트를 조회
        return (List<PostEntity>) postRepo.findAll(); // JPA 사용 예시
    }
}
