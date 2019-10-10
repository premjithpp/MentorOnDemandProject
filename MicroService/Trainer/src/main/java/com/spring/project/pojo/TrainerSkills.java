package com.spring.project.pojo;

import javax.persistence.*;

@Entity

public class TrainerSkills {
@Id
@GeneratedValue
@Column(name="id")
private long trainerSkillid;
@Column(name="skill_id")
private long id;
@Column(name="trainer_id")
private long trainerId;
@Column(name="skill")
private String skill;
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public long getTrainerId() {
	return trainerId;
}
public void setTrainerId(long trainerId) {
	this.trainerId = trainerId;
}
public String getSkill() {
	return skill;
}
public void setSkill(String skill) {
	this.skill = skill;
}
public TrainerSkills(long id, long trainerId, String skill) {
	super();
	this.id = id;
	this.trainerId = trainerId;
	this.skill = skill;
}
public TrainerSkills() {
	super();
}

}
