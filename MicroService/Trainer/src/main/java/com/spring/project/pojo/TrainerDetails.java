package com.spring.project.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="trainerdetails")
public class TrainerDetails {

	@Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
	  private long id;
	@Column(name="firstname")
	private String firstname;
	@Column(name="lastname")
	private String lastname;
	@Column(name="phone")
	private long phone;
	@Column(name="age")
	private int age;
	@Column(name="qualification")
	private String qualification;
	@Column(name="skills")
	private String skills ;
	@Column(name="linkdin")
	private String linkdin;
	@Column(name="email")
	private String email;
	@Column(name="password")
	private String password;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public String getLinkdin() {
		return linkdin;
	}
	public void setLinkdin(String linkdin) {
		this.linkdin = linkdin;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public TrainerDetails(long id, String firstname, String lastname, long phone, int age, String qualification,
			String skills, String linkdin, String email, String password) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.phone = phone;
		this.age = age;
		this.qualification = qualification;
		this.skills = skills;
		this.linkdin = linkdin;
		this.email = email;
		this.password = password;
	}
	public TrainerDetails() {
		super();
	}
	
	
}
