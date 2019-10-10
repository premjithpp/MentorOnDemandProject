package com.spring.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.spring.project.pojo.TrainerDetails;
import com.spring.project.pojo.TrainerSkills;
import com.spring.project.service.TrainerService;

@EnableEurekaClient
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TrainerController {
	@Autowired
	TrainerService trainerService;
	
	@RequestMapping("/trainerName/{userName}")
    public  TrainerDetails trainerName(@PathVariable String userName){
        return trainerService.trainerName(userName);
    }
	@RequestMapping("/trainerId/{id}")
    public  TrainerDetails getName(@PathVariable long id){
        return trainerService.getName(id);
    }
	

	@RequestMapping(method = RequestMethod.POST,value = "/trainer-signup")
	  public void postTrainer(@RequestBody TrainerDetails trainer) {
	    trainerService.postTrainer(trainer);
	    
	  }
	
	@RequestMapping(method = RequestMethod.POST,value = "/add-skill")
	  public void addSkills(@RequestBody TrainerSkills skill) {
	    trainerService.addSkill(skill);
	    
	  }
	
	 @RequestMapping(method=RequestMethod.DELETE,value="/remove-skill/{id}")
	    public void deleteTraining(@PathVariable Long id){
	        trainerService.deleteSkill(id);
	    }
	 @RequestMapping("/skills")
	    public List<TrainerSkills> tech(){
	        return trainerService.getSkills();
	    }


}
