package com.example.React.entity.task;

import java.util.Date;

import lombok.Data;

@Data
public class TaskItem {

	/**
	 * 各タスク固有のID: 主キー
	 */
	private int taskId;

	/**
	 * 紐づくリストID: 外部キー
	 */
	private int listId;

	/**
	 * タスクタイトル
	 */
	private String taskTitle;

	/**
	 * タスクの内容
	 */
	private String taskBody;

	/**
	 * タスクの締め切り
	 */
	private String deadline;

	/**
	 * タスクの作成日
	 */
	private Date createDate;

	/**
	 * タスクが完了したか
	 */
	private boolean complete;

	/**
	 * お気に入り
	 */
	private boolean favorite;

	public TaskItem() {
	}

	public TaskItem(int listId, String taskTitle, String taskBody, String deadline) {
		this.taskId = 0;
		this.listId = listId;
		this.taskTitle = taskTitle;
		this.taskBody = taskBody;
		this.deadline = deadline;
		this.complete = false;
		this.favorite = false;

	}

	public TaskItem(int taskId, int listId, String taskTitle, String taskBody, String deadline,
			Date createDate, boolean complete, boolean favorite) {
		this.taskId = taskId;
		this.listId = listId;
		this.taskTitle = taskTitle;
		this.taskBody = taskBody;
		this.deadline = deadline;
		this.createDate = createDate;
		this.complete = complete;
		this.favorite = favorite;

	}

}
