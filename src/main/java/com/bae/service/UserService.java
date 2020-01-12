package com.bae.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bae.persistence.domain.User;
import com.bae.persistence.repo.UserRepo;

@Service
public class UserService {
	
	private UserRepo repo;
	
	public UserService(UserRepo repo) {
		this.repo = repo;
	}
	
	public List<User> getAllUsers() {
		return repo.findAll();
	}
	
	public User addNewUser(User userToAdd) {
		return repo.save(userToAdd);
	}
	
	public String deleteUser(Long primaryKeyOfUsers) {
		repo.deleteById(primaryKeyOfUsers);
		return "User successfully removed";
	}
}
