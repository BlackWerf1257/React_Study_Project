package com.example.repository;

import com.example.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path="user")
//public interface UserRepo extends JpaRepository<UserEntity, Integer>
public interface UserRepo extends CrudRepository<UserEntity, Long>
//Iterable<T>findAll(): 지정된 옵션으로 정렬된 모든 엔티티 반환
//Page<T> findAll(Pageable pageable): 지정된 페이지 매김 옵션으로 모든 엔티티 반환
//public interface UserRepo extends PagingAndSortingRepository<UserEntity, Integer>
{
	
}
