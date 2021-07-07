# Hello!

This repository was created as baseline for your project.

# Organization
- app/ - Contains all frontend code. When deploying this project it needs to be built using `npm run build`
- src/ - Contains all server code (java, spring boot)
  - controllers/ - Controllers that receive requests
  - models/ Models used by the controllers
  - Note: Best practice is to group code based on subject area, eg we should have a cats/ package that then contains
  a controller/ and models/ underneath that are solely related to the cats/ domain. We don't do that here because the domain 
  hasn't been determined, and for a minimal work poc, this grouping practice may be overkill.

# Technologies
- Lombok - Java preprocessor, provides utility annotations that make developing in Java more pleasant  -
https://projectlombok.org/
- Spring boot - Java server framework
  - H2 database - in-memory database, is torn down when the app closes. I suggest modifying the `application.properties` to save to a file or change to another database
- AssertJ - Assertion library that provides extra chainable assertions on top of JUnit
- ReactJS - Web frontend library
- React Testing Library - React testing utility library 
- Jest - React test runner and assertion library

#Pre-Requisites:
- npm and node (https://nodejs.org/en/download/) or brew install npm
- set project SDK settings to java (File->Project Structure, change Project SDK to Java (11)

# To Run App
Install React
- `cd ./app`
- `npm install`

Run both the Spring server and the react server. React is already set to proxy to 8080 if its server
receives a request for a path that isn't a react file. 

To start react: 
  - in CLI:`cd app && npm start`
  - in Intellij: open the package.json and click the green arrow next to "scripts: start" 
(you may have to change package manager to npm)

To start spring: 
- in CLI:`./mvnw spring-boot:run`
- in Intellij: 
  - navigate to demo app (src/main/java/com/example/demo/DemoApplication.java)
  - right-click on DemoApplication and click Run
  
# To Run Tests
Frontend: 
- in CLI: `cd app && npm test`
- in Intellij:
  - open app/src/App.test.tsx, select the green arrow next to the first test
  - open all component tests (app/src/components/[xxx].test.tsx), select the green arrow next to the first test

Backend:
TBD


#Database initialization steps

##1. Create a Heroku account
- In order for you have access to Heroku, you will need to create an account first.
- This will help you gain access to the Heroku Database credentials.
- To create Heroku account make sure to use your TW credentials. Go to this link and create a Heroku account [Heroku](https://id.heroku.com/login).

## 3. Database Installation in IntelliJ
In order to better understand the process of how to connect PostgreSQL DB in IntelliJ
follow the instructions [in this video](https://www.youtube.com/watch?v=D-WoteCPi14&t=211s)
-Note: You will need the Heroku credentials in order be able to deploy your database in Heroku.
1.Navigate to pom.xml add under the PostgreSQL comment the following:

    <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
    </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>

        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>

After adding the dependencies make sure to run the next command in your terminal:
- ./mvn install

After installation has been completed, follow the next set of steps:

1.Open intellij.

2.Open Invalidate Caches under "File" at the very top of your screen.

3.Make sure "clear downloaded shared indexes” is selected.

4.Click on "Invalidate and Restart."

Note: wait for application to restart.

##Create application-local.properties file
- Create a file called application-local.properties that is similar to application.properties in (src/main/java/resources)
- Paste the following code in your application-local.properties file and enter your Heroku credentials which are located in the tw-intern-project under settings and open configvars.
```bash
spring.datasource.url= XXXXXX
spring.datasource.username= XXXXX
spring.datasource.password= XXXXXX
```

- After adding your Heroku credentials, make sure to copy the path of the applications-local.properties file
and paste it into the ".gitignore" file.
- Then run DemoApplication.

##Adding env variables to IntelliJ
- click on edit configurations
- Make sure to select springboot -> DemoApplication
- Go to environment variables and click "Edit Environment Variables'
- Then add Heroku ConfigVars

Note: Make sure to add all of the key and value variables.

###After adding evn variables
- scroll down to "on update action" and set it to "Update classes and resources"
- scroll down to "on frame deactivation" and set it to "Update classes and resources"
- Then on "Active profiles" type "local"
- Click on "Apply" and "Ok"

##Create test table to make sure backend and database are connected
- On the DemoApplication file, under the "Run" method. Include the following code:
```bash
String sql = "CREATE TABLE test(Your First Name) (name int)";
```  
# Intellij tips
This readme assumes you're using the professional edition of Intellij which should handle a lot of details for you.
Anything you need to know  can likely be found on the [maven site](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).

- Edit your run configuration (upper left corner, dropdown arrow, 'Edit configurations...') to hot swap classes on update
  and to update classes and resources on frame deactivation. This will cause your server to live reload whenever you switch
  from intellij to something.
- In the Controllers/ folder, there's a `rest-api.http` file. Using intellij you can run the requests in it to test the api

# Team Members
- Devon
- Martin
- Abdi 
- Alec
- Julio
- Natalie