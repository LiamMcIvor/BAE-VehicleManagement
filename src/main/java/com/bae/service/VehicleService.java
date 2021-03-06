package com.bae.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bae.exceptions.UserNotFoundException;
import com.bae.exceptions.VehicleNotFoundException;
import com.bae.persistence.domain.Issue;
import com.bae.persistence.domain.User;
//import com.bae.user.persistence.repo.UserRepo;
import com.bae.persistence.domain.Vehicle;
import com.bae.persistence.repo.VehicleRepo;

@Service
public class VehicleService {
	
	private VehicleRepo repo;
	
	private IssueService issueService;
	
	@Autowired
	public VehicleService(VehicleRepo repo, IssueService issueService) {
		this.repo = repo;
		this.issueService = issueService;
	}
	
	public List<Vehicle> getAllVehicles() {
		return repo.findAll();
	}
	
	public Vehicle addNewVehicle(Vehicle vehicleToAdd) {
		return repo.save(vehicleToAdd);
	}
	
	public Vehicle findVehicleById(Long id) {
		return this.repo.findById(id).orElseThrow(() -> new VehicleNotFoundException());
	}
	
	public Vehicle updateVehicle(Vehicle vehicle, Long id) {
		Vehicle toUpdate = findVehicleById(id);
		toUpdate.setMake(vehicle.getMake());
		toUpdate.setModel(vehicle.getModel());
		toUpdate.setMotDate(vehicle.getMotDate());
		toUpdate.setTaxDate(vehicle.getTaxDate());
		toUpdate.setInsuranceDate(vehicle.getInsuranceDate());
		return this.repo.save(toUpdate);
	}
	
	public Vehicle addIssueToVehicle(Long id, Issue issue) {
		Vehicle toUpdate = findVehicleById(id);
		
		Issue newIssue = this.issueService.addNewIssue(issue);
		toUpdate.getIssues().add(newIssue);
		return this.repo.save(toUpdate);
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
