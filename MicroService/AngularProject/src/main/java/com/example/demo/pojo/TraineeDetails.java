package com.example.demo.pojo;

import javax.persistence.*;

@Entity
@Table(name="traineedetails")
public class TraineeDetails {
	
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
	@Column(name="linkdin")
	private String linkdin;
	@Column(name="email")
	private String email;
	@Column(name="password")
	private String password;
@Column(name="active")
private String active="unblock";
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
	
	
	public String getActive() {
		return active;
	}
	public void setActive(String active) {
		this.active = active;
	}
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public TraineeDetails( long id,String firstname, String lastname, long phone, int age, String linkdin, String email,
			String password,String active) {
		super();
this.id=id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.phone = phone;
		this.age = age;
		this.linkdin = linkdin;
		this.email = email;
		this.password = password;
		this.active=active;
	}
	public TraineeDetails() {
		super();
	}
	
	
	
	

}
