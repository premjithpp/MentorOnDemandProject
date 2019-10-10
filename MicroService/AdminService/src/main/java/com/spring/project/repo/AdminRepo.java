package com.spring.project.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.spring.project.pojo.AdminCredentials;




public interface AdminRepo extends CrudRepository<AdminCredentials, Long> {
	@Query(value="select * from admin_credentials u where u.username = ?1 ",nativeQuery = true)
    AdminCredentials searchUserName(String userName);


	}
