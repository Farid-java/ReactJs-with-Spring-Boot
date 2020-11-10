package reactjs;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import reactjs.jpa.Repository;
import reactjs.model.Bean;

@org.springframework.web.bind.annotation.RestController
@CrossOrigin
public class RestController {
	
	@Autowired
	Repository repository;
	
	@PostMapping("/addcourse")
	public String addCourse(@RequestBody Bean bean) {
		
		repository.save(bean);
		
		return "Courses Added";
	}
	
	@GetMapping("/getAllCourse")
	public List<Bean> getCourse()
	{
		List<Bean> findAll = repository.findAll();
		
		return findAll;
	}
	
	@DeleteMapping("/course/{id}")
	public void  delete(@PathVariable int id)
	{
		 
		  repository.deleteById(id);
		
		 
	}
	
	@RequestMapping(path = "/one/{id}" ,method = RequestMethod.GET )   
	public java.util.Optional<Bean> getPostMan1(@PathVariable("id") int id)
	{ 
		Optional<Bean> findById = repository.findById(id);
		System.out.println(findById);
		return repository.findById(id); } 
	
	
	
	
	@PutMapping("/course/update")
	public void  update(@RequestBody Bean bean)
	{
		 
		  repository.save(bean);
		
		 
	}

}
