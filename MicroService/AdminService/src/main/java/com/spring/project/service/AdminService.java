package com.spring.project.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.project.pojo.AdminCredentials;

import com.spring.project.pojo.Technology;
import com.spring.project.repo.AdminRepo;
import com.spring.project.repo.TechnologyRepo;




@Service
public class AdminService {
	@Autowired
	private AdminRepo repoadmin;
	@Autowired
	private TechnologyRepo techrepo;
	
	public List<AdminCredentials> getDetails(){
		List<AdminCredentials> admin = new ArrayList<AdminCredentials>();
		 repoadmin.findAll().forEach(admin::add);
		 return admin;
	}
	
	public AdminCredentials adminName(String userName) {

	    return repoadmin.searchUserName(userName);
	}
	
	
	public Technology userId(long id) {

	    return techrepo.searchUser(id);
	}
	
	
	public List<Technology> getTechnology(){
		List<Technology> tech = new ArrayList<Technology>();
		 techrepo.findAll().forEach(tech::add);
		 return tech;
	}
	
	   public Technology getTech(Long id) {

	        return techrepo.findById(id).orElse(null);
	    }
	
	
    public void addTech(Technology t ) {

      techrepo.save(t);

    }

    public void deleteTraining(Long id) {

        techrepo.deleteById(id);
    }
	
}
