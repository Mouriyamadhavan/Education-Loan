package com.example.demo.service;

import java.util.List;

import com.example.demo.model.LoanApplicationModel;
import com.example.demo.model.UserModel;

public interface ApiServiceImpl {

	public String login(String email, String password);

	public UserModel signup(UserModel u);

	public List<UserModel> getAllUsers();

	public UserModel getAllUserById(int id);

	public UserModel updateUser(UserModel u, String id);

	public void deleteUser(int id);

	public LoanApplicationModel viewLoan(int id);

	public List<LoanApplicationModel> getAllLoans();

	public LoanApplicationModel saveLoan(LoanApplicationModel l);

	public LoanApplicationModel updateLoan(LoanApplicationModel l, int id);

	public void deleteLoan(int id);

}
