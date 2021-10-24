package com.example.React.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.React.domain.service.imp.UserServiceImp;
import com.example.React.entity.task.User;

@RestController
@CrossOrigin(origins = "*") // ★変更点
@RequestMapping("api/users")
public class UserRestApi {
	
	@Autowired
	UserServiceImp userServie;
	
	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public List<User> getUsers() {
		List<User> users = new ArrayList<User>();
		
		users = userServie.userFindAll();
		
		return users;
	}
}
