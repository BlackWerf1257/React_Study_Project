package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entity.PostEntity;
import com.example.repository.PostRepo;
import com.example.service.PostService;

@RestController
public class PostController {
	@Autowired
	PostRepo postRepo;
	@Autowired
	PostService postService;
	
	@GetMapping("/posts")
    public List<PostEntity> getAllPosts() {
        // DB에서 게시물 리스트를 조회
        return (List<PostEntity>) postRepo.findAll(); // JPA 사용 예시
    }
	
	  
    @PostMapping("/api/submitPost")
    @CrossOrigin(origins = "http://127.0.0.1:3000/") // CORS 허용
    public String Register(@RequestParam("title") String title, @RequestParam("nickName") String nickName, @RequestParam("detail") String detail)
    {
    		 try {
    			 postService.PostSubmit(title, nickName, detail);
    			 return "글 작성 성공";
    		 }
    		 catch(Exception e)
    		 {
    			 return e.getMessage();
    		 }
    }
}
