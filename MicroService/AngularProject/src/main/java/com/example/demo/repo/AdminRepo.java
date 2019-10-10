package com.example.demo.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.pojo.AdminCredentials;


public interface AdminRepo extends CrudRepository<AdminCredentials, Long> {
	@Query(value="select * from admin_credentials u where u.username = ?1 ",nativeQuery = true)
    AdminCredentials searchUserName(String userName);

	}
