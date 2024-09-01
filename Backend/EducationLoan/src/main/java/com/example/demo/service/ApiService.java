package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.LoanApplicationModel;
import com.example.demo.model.UserModel;
import com.example.demo.repository.LoanApplicationRepository;
import com.example.demo.repository.UserRepository;

@Service
public class ApiService implements ApiServiceImpl {
	@Autowired
	UserRepository apiRepo;
	@Autowired
	LoanApplicationRepository apiRepo1;

	@Override
	public String login(String email, String password) {
		UserModel user = apiRepo.findByEmail(email);
		if (user == null) {
			return "Email not Found";
		} else {
			if (user.getPassword().equals(password)) {
				return "Login Successful";
			} else {
				return "Password Wrong";
			}
		}
	}

	@Override
	public UserModel signup(UserModel u) {
		return apiRepo.save(u);
	}

	@Override
	public List<UserModel> getAllUsers() {
		return apiRepo.findAll();
	}

	@Override
	public UserModel updateUser(UserModel u, String id) {
		return apiRepo.saveAndFlush(u);
	}

	@Override
	public void deleteUser(int id) {
		apiRepo.deleteById(id);
	}

	@Override
	public List<LoanApplicationModel> getAllLoans() {
		return apiRepo1.findAll();
	}

	@Override
	public LoanApplicationModel viewLoan(int id) {
		return apiRepo1.findById(id).get();
	}

	@Override
	public LoanApplicationModel saveLoan(LoanApplicationModel l) {
		return apiRepo1.save(l);
	}

	@Override
	public LoanApplicationModel updateLoan(LoanApplicationModel l, int id) {
		return apiRepo1.saveAndFlush(l);
	}

	@Override
	public void deleteLoan(int id) {
		apiRepo1.deleteById(id);
	}

	@Override
	public UserModel getAllUserById(int id) {
		return apiRepo.findById(id).get();
	}
}
