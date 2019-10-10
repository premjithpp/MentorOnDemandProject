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

import com.spring.project.pojo.AdminCredentials;
import com.spring.project.pojo.Technology;

import com.spring.project.service.AdminService;


@EnableEurekaClient
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TraineeController {

	@Autowired
	AdminService adminService;
	



	@RequestMapping("/skillId/{id}")
    public Technology userId(@PathVariable long id){
        return adminService.userId(id);
    }
	
	@RequestMapping("/admin/{userName}")
    public AdminCredentials adminName(@PathVariable String userName){
        return adminService.adminName(userName);
    }
	

	@RequestMapping("/admin/technology")
    public List<Technology> tech(){
        return adminService.getTechnology();
    }
	
	   @RequestMapping(method=RequestMethod.DELETE,value="/admin/technology/{id}")
	    public void deleteTraining(@PathVariable Long id){
	        adminService.deleteTraining(id);
	    }
	
	   @RequestMapping(method= RequestMethod.POST,value="/admin/tech")
	    public void addTraining(@RequestBody Technology t) {
	        adminService.addTech(t);
	    }

}
