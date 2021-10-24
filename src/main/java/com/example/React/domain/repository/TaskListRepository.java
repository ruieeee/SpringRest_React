package com.example.React.domain.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.React.entity.task.TaskList;
@Repository
@Mapper
public interface TaskListRepository {

	public void insertTaskList(TaskList taskList);

	public List<TaskList> taskListFindAll();

	public void deleteTaskList(TaskList taskList);

}
