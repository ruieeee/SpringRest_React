package com.example.React.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SinglePageController {
	 @GetMapping("/**/{path:[^.]*}")
	public String creatHome() {
		return "forward:/index.html";
	}
}