package com.example.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "postentity")
public class PostEntity {
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="User")
	UserEntity user;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long idx;
	private String title;
	private String nickname;
	private String detail;
	
	   public PostEntity() {}
	
	public PostEntity(Long idx, String title, String detail, String nickname){
		super();
		this.idx = idx;
		this.title = title;
		this.nickname = nickname;
		this.detail = detail;
	}

	public Long getIdx() {
		return idx;
	}

	public void setIdx(Long idx) {
		this.idx = idx;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}
	
}
