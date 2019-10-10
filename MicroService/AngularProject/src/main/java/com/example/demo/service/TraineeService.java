package com.example.demo.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repo.*;

import com.example.demo.pojo.*;
@Service
public class TraineeService {
@Autowired
private TraineeRepo repo;

public List<TraineeDetails> getTrainee(){
	List<TraineeDetails> trainee = new ArrayList<TraineeDetails>();
	 repo.findAll().forEach(trainee::add);
	 return trainee;
}

public void postTrainee(TraineeDetails trainee) {
	repo.save(trainee);
}

public TraineeDetails getUsersUserName(String userName) {

    return repo.searchUserName(userName);
}

public TraineeDetails getName(Long id) {

    return repo.findById(id).orElse(null);
}

public void updateAction(TraineeDetails trainee,long id) {
	TraineeDetails td= repo.findById(id).orElse(null);
	if(td !=null) {
		td.setActive(trainee.getActive());
	}
	repo.save(td);
}

}
