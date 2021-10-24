package com.example.React.domain.service;

import java.util.List;

import com.example.React.entity.task.TaskItem;

public interface TaskService {
	public List<TaskItem> taskFind(int taskid);
	
	public void creatTaskItem(TaskItem item);
}
