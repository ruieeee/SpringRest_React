package com.example.React.domain.repository;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.React.entity.task.TaskItem;

@Repository
@Mapper
public interface TaskRepository {

	public List<TaskItem> taskFind(int taskid);
	
	@Insert(
			"insert into tasks"
			+"(title,body,deadline,createdate,complete,favorite,list_id)"
			+"values"
			+"(#{taskTitle},"
			+"#{taskBody},"
			+"#{deadline},"
			+"'now(),"
			+"'false',"
			+"'false',"
			+"#{listId});"
	)
	public void creatTaskItem(TaskItem item);

}
