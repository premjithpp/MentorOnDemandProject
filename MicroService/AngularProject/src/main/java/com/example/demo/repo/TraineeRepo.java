package com.example.demo.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.pojo.TraineeDetails;
public interface TraineeRepo extends CrudRepository<TraineeDetails, Long> {
	@Query(value="select * from traineedetails u where u.email = ?1 ",nativeQuery = true)
     TraineeDetails searchUserName(String userName);

	}
