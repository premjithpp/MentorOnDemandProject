package com.spring.project.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


import com.spring.project.pojo.TrainerDetails;

public interface TrainerRepo extends CrudRepository<TrainerDetails, Long>{
	@Query(value="select * from trainerdetails u where u.email = ?1 ",nativeQuery = true)
    TrainerDetails searchUserName(String userName);
	@Query(value="select * from trainerdetails u where u.id = ?1 ",nativeQuery = true)
    TrainerDetails searchUser(long id);


}
