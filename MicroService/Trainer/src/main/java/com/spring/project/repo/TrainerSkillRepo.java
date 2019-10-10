package com.spring.project.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.spring.project.pojo.TrainerDetails;
import com.spring.project.pojo.TrainerSkills;

public interface TrainerSkillRepo extends CrudRepository<TrainerSkills, Long> {

}
