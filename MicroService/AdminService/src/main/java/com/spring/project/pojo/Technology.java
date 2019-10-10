package com.spring.project.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;

@Entity
public class Technology {
@Id
@GeneratedValue
private long id;
@Column(name="techname")
private String techname;
@Column(name="fee")
private float fee;
@Column(name="commission")
private int commission;
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getTechname() {
	return techname;
}
public void setTechname(String techname) {
	this.techname = techname;
}
public float getFee() {
	return fee;
}
public void setFee(float fee) {
	this.fee = fee;
}
public int getCommission() {
	return commission;
}
public void setCommission(int commission) {
	this.commission = commission;
}
public Technology(String techname, float fee,int commission) {
	super();
	this.techname = techname;
	this.fee = fee;
	this.commission = commission;
}
public Technology() {
	super();
}

}
