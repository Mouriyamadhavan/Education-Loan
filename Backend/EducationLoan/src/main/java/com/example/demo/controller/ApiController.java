package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.LoanApplicationModel;
import com.example.demo.model.UserModel;
import com.example.demo.service.ApiServiceImpl;

@RestController
@CrossOrigin("http://localhost:3000")
public class ApiController {
	@Autowired
	ApiServiceImpl apiServImpl;

	@PostMapping("/user/login")
	public String login(@RequestBody UserModel u) {
		return apiServImpl.login(u.getEmail(), u.getPassword());
	}

	@PostMapping("/user/signup")
	public UserModel signup(@RequestBody UserModel u) {
		return apiServImpl.signup(u);
	}

	@GetMapping("/user/getAllUsers")
	public List<UserModel> getAllUsers() {
		return apiServImpl.getAllUsers();
	}

	@GetMapping("/user/getUser/{id}")
	public UserModel getAllUserById(@PathVariable int id) {
		return apiServImpl.getAllUserById(id);
	}

	@PutMapping("/user/updateUser/{id}")
	public UserModel updateUser(@RequestBody UserModel u, @PathVariable String id) {
		return apiServImpl.updateUser(u, id);
	}

	@DeleteMapping("/user/deleteUser/{id}")
	public void deleteUser(@PathVariable int id) {
		apiServImpl.deleteUser(id);
	}

	@GetMapping("/admin/getAllLoans")
	public List<LoanApplicationModel> getAllLoans() {
		return apiServImpl.getAllLoans();
	}

	@GetMapping("/user/viewLoan/{id}")
	public LoanApplicationModel viewLoan(@PathVariable int id) {
		return apiServImpl.viewLoan(id);
	}

	@PostMapping("/user/saveLoan")
	public LoanApplicationModel saveLoan(@RequestBody LoanApplicationModel l) {
		return apiServImpl.saveLoan(l);
	}

	@PutMapping("/user/updateLoan/{id}")
	public LoanApplicationModel updateLoan(@RequestBody LoanApplicationModel l, @PathVariable int id) {
		return apiServImpl.updateLoan(l, id);
	}

	@DeleteMapping("/user/deleteLoan/{id}")
	public void deleteLoan(@PathVariable int id) {
		apiServImpl.deleteLoan(id);
	}

}
