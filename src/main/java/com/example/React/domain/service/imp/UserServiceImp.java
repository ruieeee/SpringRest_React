package com.example.React.domain.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.React.domain.repository.UserRepository;
import com.example.React.domain.service.UserService;
import com.example.React.entity.task.User;

@Service
public class UserServiceImp implements UserService{
	
	@Autowired
	UserRepository userRepository;
	
	public List<User> userFindAll() {
		return userRepository.userFindAll();
	}

}
