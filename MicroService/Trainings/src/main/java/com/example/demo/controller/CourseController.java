package com.example.demo.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.CourseDetails;
import com.example.demo.service.CourseService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@EnableEurekaClient
public class CourseController {

	@Autowired
	private CourseService cs;



	
	@RequestMapping("/coursedetails")
	public List<CourseDetails> getCourse() {
	return cs.getCourse();
	}
	
	@RequestMapping("/coursedetails/{id}")
	public CourseDetails getCourseDetails(@PathVariable Integer id) {
		return cs.getCourseDetails(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/add-course")
	public void addCourse(@RequestBody CourseDetails cd) {
		cs.addCourse(cd);
		
	}
	@RequestMapping(method=RequestMethod.PUT,value="/update-course/{id}")
	public void updateCourse(@RequestBody CourseDetails cd, @PathVariable Integer id) {
		cs.updateCourse(cd, id);
	}

	@RequestMapping("/course/user/{id}")
	public List<CourseDetails> getUserCourse(@PathVariable Integer id) {
		return cs.getUserCourse(id);
	}

	@RequestMapping("/course/mentor/{mentorId}")
	public List<CourseDetails> getMentorCourse(@PathVariable Integer mentorId) {
		return cs.getMentorCourse(mentorId);
	}

}