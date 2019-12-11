package com.bae.user.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bae.user.persistence.domain.User;
import com.bae.user.persistence.repo.UserRepo;

@Service
public class UserService {
	
	private UserRepo repo;
	
	public UserService(UserRepo repo) {
		this.repo = repo;
	}
	
	public List<User> getAllUsers() {
		return repo.findAll();
	}
	
	public User addUser(User userToAdd) {
		return repo.save(userToAdd);
	}
	
	public String deleteUser(Long id) {
		repo.deleteById(id);
		return "User deleted";
	}
}
