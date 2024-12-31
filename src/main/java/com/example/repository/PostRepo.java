package com.example.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.Entity.PostEntity;

@RepositoryRestResource(path="post")
public interface PostRepo extends CrudRepository<PostEntity, Long> {
 
}
