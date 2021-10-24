package com.example.React.domain.repository;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.React.entity.task.User;

@Repository
@Mapper
public interface UserRepository {

	public List<User> userFindAll();

}
