package reactjs.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Entity
 
public class Bean {
	@Id
	 private int id;
	 
	private String title,description;
	 
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	 
	@Override
	public String toString() {
		return "Bean [id=" + id + ", title=" + title + ", description=" + description + "]";
	}
	public void setTitle(String title) {
		this.title = title;	
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	

}
