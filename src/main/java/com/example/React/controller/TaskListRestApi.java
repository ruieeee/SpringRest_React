package com.example.React.controller;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.React.domain.service.imp.TaskListServiceImp;
import com.example.React.entity.task.TaskList;
@RestController
@CrossOrigin(origins = "*") 
@RequestMapping("api/tasklists")
public class TaskListRestApi {
	
	@Autowired
	TaskListServiceImp taskListService;
	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public List<TaskList> getTaskList() {
		List<TaskList> list = new ArrayList<TaskList>();
		
		list = taskListService.taskListFindAll();
		//System.out.println("get,TaskLists:"+list);
		return list;
}
	
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void addTaskList(@RequestParam String title,@RequestParam int userId) {
		TaskList taskList = new TaskList(0,userId,title);
		taskListService.creatTaskList(taskList);
	}
	
	@RequestMapping(value="{taskListId}",method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.OK)
	public void deleteTaskList(@PathVariable("taskListId") int id) {
		TaskList taskList = new TaskList(id,0,"");
		taskListService.deleteTaskList(taskList);
	}
}
