package com.example.React.entity.task;

import lombok.Data;

@Data
public class User {

	/**
	 * ユーザーID:主キー
	 */
	private int userId;

	/**
	 * ユーザー名
	 */
	private String userName;

	/**
	 * パスワード
	 */
	private String password;

	/**
	 * メールアドレス
	 */
	private String mail;

	public User() {
	}

	public User(int userId, String userName, String mail) {
		this.userId = userId;
		this.userName = userName;
		this.mail = mail;

	}

	public User(int userId, String userName, String mail, String password) {
		this.userId = userId;
		this.userName = userName;
		this.mail = mail;
		this.password = password;
	}
}
