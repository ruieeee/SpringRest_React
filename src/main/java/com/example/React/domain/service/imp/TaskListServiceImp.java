package com.example.React.domain.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.React.domain.repository.TaskListRepository;
import com.example.React.domain.service.TaskListService;
import com.example.React.entity.task.TaskList;


@Service
public class TaskListServiceImp implements TaskListService{
	@Autowired
    TaskListRepository taskListRepository;

	public void creatTaskList(TaskList taskList) {
		taskListRepository.insertTaskList(taskList);
		
	}

	public List<TaskList> taskListFindAll() {
		
		return taskListRepository.taskListFindAll();
	}

	public void deleteTaskList(TaskList taskList) {
		taskListRepository.deleteTaskList(taskList);
		
	}

}
