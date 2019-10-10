package com.spring.project.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.spring.project.pojo.Technology;

public interface TechnologyRepo extends CrudRepository<Technology, Long> {
	@Query(value="select * from technology u where u.id = ?1 ",nativeQuery = true)
    Technology searchUser(long id);
}
