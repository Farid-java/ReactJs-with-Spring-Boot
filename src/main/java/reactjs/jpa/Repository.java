package reactjs.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import reactjs.model.Bean;

public interface Repository extends JpaRepository<Bean, Integer> {

}
