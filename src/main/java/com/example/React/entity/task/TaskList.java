package com.example.React.entity.task;

import lombok.Data;

@Data
public class TaskList {
	
	/**
	 * タスクID: 主キー
	 */
	private int listId;
	
	/**
	 * 紐づくリストを使用するユーザーのID: 外部キー
	 */
	private int userId;
	
	private String listTitle;
	
	public TaskList() {
	}
	
	public TaskList(int listId,int userId,String listTitle){
		this.listId =listId;
		this.userId = userId;
		this.listTitle = listTitle;
	}
}
