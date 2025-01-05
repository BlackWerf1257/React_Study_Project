package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.Entity.PostEntity;
import com.example.Entity.UserEntity;
import com.example.repository.PostRepo;
import com.example.repository.UserRepo;

@SpringBootApplication
@ComponentScan(basePackages = { "com.example" })
@EnableJpaRepositories("com.example.repository")
@EntityScan(basePackages = "com.example.Entity")
public class ReactProjectApplication implements CommandLineRunner {
	@Autowired
	PostRepo postRepo;
	@Autowired
	UserRepo userRepo;

	public static void main(String[] args) {
		SpringApplication.run(ReactProjectApplication.class, args);
	}

	// 생성자 실행 후 실행
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		  postRepo.save(new PostEntity(null, "T1 - Title", "T1 - Nickname" ,"T1 - Detail"));
		  postRepo.save(new PostEntity(null, "T2 - Title", "T2 - Nickname" ,"T2 - Detail"));
		  postRepo.save(new PostEntity(null, "T3 - Title", "T3 - Nickname" ,"T3 - Detail"));
		 

		
		
		  userRepo.save(new UserEntity(null, "T1 - PWD", 20, "T1 - Nickname"));
		  userRepo.save(new UserEntity(null, "T2 - PWD", 30, "T2 - Nickname"));
		  userRepo.save(new UserEntity(null, "T3 - PWD", 40, "T3 - Nickname"));
		 
		
		/*
		 * for(UserEntity entity: userRepo.findAll()) logger.info(entity.getNickName());
		 */
		 
	}
}