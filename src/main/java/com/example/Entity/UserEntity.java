package com.example.Entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "userentity")

public class UserEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long userIdx;
	
	private String id;
	private String pwd;
	private Integer age;
	private String nickname;

	
	public UserEntity() {}
	
	public UserEntity(Long userIdx, String id, String pwd, Integer age, String nickname){
		super();
		this.userIdx = userIdx;
		this.id = id;
		this.pwd = pwd;
		this.age = age;
		this.nickname = nickname;
	}
	
	
	public Long getUserIdx() {
		return userIdx;
	}

	public void setUserIdx(Long userIdx) {
		this.userIdx = userIdx;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public String getNickName() {
		return nickname;
	}
	public void setNickName(String nickName) {
		this.nickname = nickName;
	}
}
 