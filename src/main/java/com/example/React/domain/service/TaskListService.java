package com.example.React.domain.service;

import java.util.List;

import com.example.React.entity.task.TaskList;

public interface TaskListService {
	public void creatTaskList(TaskList tasklist);
	public List<TaskList> taskListFindAll() ;
	public void deleteTaskList(TaskList taskList) ;
}
