package com.example.dto;

public class DtoUser {
	Boolean isLoginSuccess;
	String nickName;
	
	public DtoUser(Boolean isLoginSuccess, String nickName)
	{
		this.isLoginSuccess = isLoginSuccess;
		this.nickName = nickName;
	}
	
}
