package com.example.React.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.React.domain.service.imp.TackServiceImp;
import com.example.React.entity.task.TaskItem;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/tasklists")
public class TaskItemRestApi {

	@Autowired
	TackServiceImp ts;

	SimpleDateFormat date = new SimpleDateFormat("yyyy/mm/dd k:mm:ss");

	@GetMapping("/{id}/items")
	@ResponseStatus(HttpStatus.OK)
	public List<TaskItem> getTaskItems(@PathVariable("id") int taskid) {
		List<TaskItem> list = new ArrayList<TaskItem>();
		list = ts.taskFind(taskid);
		// System.out.println("get,TaskItems:"+list);

		return list;
	}

	@PostMapping("/additem")
	@ResponseStatus(HttpStatus.CREATED)
	public void addTaskItem(@RequestParam String title, @RequestParam String body, @RequestParam String deadline,
			@RequestParam int listId) {

		System.out.println("test");
		//SimpleDateFormat sdf = new SimpleDateFormat("EEE MMM DD YYYY HH:mm:ss");
		TaskItem item = new TaskItem(listId, title, body, deadline);
		System.out.println("test" + item);
		ts.creatTaskItem(item);
	}

}
