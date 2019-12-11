package com.bae.user.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bae.user.persistence.domain.User;
import com.bae.user.service.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService service;
	
	public UserController(UserService service) {
		this.service = service;
	}
	
	@GetMapping("/createUser")
	public List<User> getAllUsers() {
		return service.getAllUsers();
	}
}
