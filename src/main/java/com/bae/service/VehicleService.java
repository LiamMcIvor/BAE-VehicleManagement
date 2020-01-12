package com.bae.service;

import java.util.List;

import org.springframework.stereotype.Service;

//import com.bae.user.persistence.repo.UserRepo;
import com.bae.persistence.domain.Vehicle;
import com.bae.persistence.repo.VehicleRepo;

@Service
public class VehicleService {
	
	private VehicleRepo repo;
	
//	private UserRepo userRepo;
	
	public VehicleService(VehicleRepo repo) {
		this.repo = repo;
	}
	
	public List<Vehicle> getAllVehicles() {
		return repo.findAll();
	}
	
	public Vehicle addNewVehicle(Vehicle vehicleToAdd) {
		return repo.save(vehicleToAdd);
	}
	
	public String deleteVehicle(Long primaryKeyOfVehicles) {
		repo.deleteById(primaryKeyOfVehicles);
		return "Vehicle successfully removed";
	}

//	public List<Vehicle> findByUserId(Long user_id) {
//		System.out.println("aaaa" + user_id);
//		return userRepo.findById(user_id);
//	}
}
