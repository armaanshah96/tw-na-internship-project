package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner{
	@Autowired
	private JdbcTemplate jdcTemplate;

	public static void main(String[] args) {

		SpringApplication.run(DemoApplication.class, args);
	}

	/**
	 * Simple example of how to create a table in Heroku Database
	 * Connecting the backend to the database
	 * @param args
	 * @throws Exception
	 */
	@Override
	public void run(String... args) throws Exception{
		String sql = "CREATE TABLE testTable (name int)";

		int rows = jdcTemplate.update(sql);
	}
}
