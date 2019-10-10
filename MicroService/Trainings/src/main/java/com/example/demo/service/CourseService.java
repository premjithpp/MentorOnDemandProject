package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.CourseDetails;
import com.example.demo.repository.CourseRepository;
@Service
public class CourseService {
	

	@Autowired
	private CourseRepository courseRepo;
	
	public List<CourseDetails> getCourse() {
		List<CourseDetails> ls=new ArrayList<>();
		courseRepo.findAll().forEach(ls::add);
		return ls;
	}
	
	public CourseDetails getCourseDetails(Integer id) {
		return courseRepo.findById(id).orElse(null);
	}
	
	public void addCourse(CourseDetails cd) {
		courseRepo.save(cd);
	}

	public void updateCourse(CourseDetails cd,Integer id) {
		courseRepo.save(cd);
	}

	public List<CourseDetails> getUserCourse(Integer userId) {
		return courseRepo.searchUserCourse(userId);
	}

	public List<CourseDetails> getMentorCourse(Integer mentorId) {
		return courseRepo.searchMentorCourse(mentorId);
	}

}
