package com.example.demo.repository;



import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.Entity.CourseDetails;

import java.util.List;


public interface CourseRepository extends CrudRepository<CourseDetails, Integer>{

    @Query(value="select * from course_details c where c.user_id = ?1",nativeQuery = true)
    List<CourseDetails> searchUserCourse(Integer id);

    @Query(value="select * from course_details c where c.mentor_id = ?1",nativeQuery = true)
    List<CourseDetails> searchMentorCourse(Integer id);
}

