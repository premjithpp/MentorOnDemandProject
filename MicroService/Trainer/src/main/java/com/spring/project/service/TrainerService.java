package com.spring.project.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.spring.project.pojo.TrainerDetails;
import com.spring.project.pojo.TrainerSkills;
import com.spring.project.repo.TrainerRepo;
import com.spring.project.repo.TrainerSkillRepo;

@Service
public class TrainerService {
@Autowired
TrainerRepo repo;
@Autowired
TrainerSkillRepo skillRepo;


public TrainerDetails trainerName(String userName) {

    return repo.searchUserName(userName);
}



public List<TrainerDetails> getTrainer(){
	List<TrainerDetails> trainer = new ArrayList<TrainerDetails>();
	 repo.findAll().forEach(trainer::add);
	 return trainer;
}
public TrainerDetails getName(Long id) {

    return repo.findById(id).orElse(null);
}


public void postTrainer(TrainerDetails trainer) {
	repo.save(trainer);
}

public List<TrainerSkills> getSkills(){
	List<TrainerSkills> skill= new ArrayList<TrainerSkills>();
	 skillRepo.findAll().forEach(skill::add);
	 return skill;
}

public void addSkill(TrainerSkills t ) {

    skillRepo.save(t);

  }

public void deleteSkill(Long id) {

    skillRepo.deleteById(id);
}

}
