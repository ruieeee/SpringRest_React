package com.example.React.domain.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.React.domain.repository.TaskRepository;
import com.example.React.domain.service.TaskService;
import com.example.React.entity.task.TaskItem;

@Service
public class TackServiceImp implements TaskService{
	
	@Autowired
	TaskRepository tr;
	
	public List<TaskItem> taskFind(int taskid) {
		
		return tr.taskFind(taskid);
	}

	public void creatTaskItem(TaskItem item) {
		tr.creatTaskItem(item);
		
	}

}
