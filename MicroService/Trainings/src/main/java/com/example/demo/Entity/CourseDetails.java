package com.example.demo.Entity;

import java.sql.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="course_details")
public class CourseDetails {
	
	@Id
	@GeneratedValue(strategy=GenerationType.TABLE)
	@Column(name="course_id")
	private Integer courseId;
	@Column(name="fees")
	private Float fees;
	@Column(name="time_slot")
	private String timeSlot;

	@Column(name="course_status")
	private String courseStatus;
	@Column(name="course_progress")
	private Integer courseProgress;
	@Column(name="end_date")
	private Date endDate;
	@Column(name="user_id")
	private Integer user;
	@Column(name="mentor_id")
	private Integer mentor;

	@Column(name="tech_id")
	private long tech;
	@Column(name="tech_name")
	private String techName;

	public String getTechName() {
		return techName;
	}

	public void setTechName(String techName) {
		this.techName = techName;
	}

	public CourseDetails() {
		super();
	}

	public CourseDetails(Float fees, String timeSlot, String courseStatus, Integer courseProgress, Date endDate, Integer user, Integer mentor, Long tech,String techName) {
		this.fees = fees;
		this.timeSlot = timeSlot;
		this.techName=techName;
		this.courseStatus = courseStatus;
		this.courseProgress = courseProgress;
		this.endDate = endDate;
		this.user = user;
		this.mentor = mentor;
		this.tech = tech;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public Float getFees() {
		return fees;
	}

	public void setFees(Float fees) {
		this.fees = fees;
	}

	public String getTimeSlot() {
		return timeSlot;
	}

	public void setTimeSlot(String timeSlot) {
		this.timeSlot = timeSlot;
	}

	public String getCourseStatus() {
		return courseStatus;
	}

	public void setCourseStatus(String courseStatus) {
		this.courseStatus = courseStatus;
	}

	public Integer getCourseProgress() {
		return courseProgress;
	}

	public void setCourseProgress(Integer courseProgress) {
		this.courseProgress = courseProgress;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Integer getUser() {
		return user;
	}

	public void setUser(Integer user) {
		this.user = user;
	}

	public Integer getMentor() {
		return mentor;
	}

	public void setMentor(Integer mentor) {
		this.mentor = mentor;
	}

	public long getTech() {
		return tech;
	}

	public void setTech(long tech) {
		this.tech = tech;
	}
}
