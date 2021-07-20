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

# Pre-Requisites:
- [homebrew](https://docs.brew.sh/installation)
- [npm and node](https://nodejs.org/en/download/) or `brew install npm`
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
- in CLI: `./mvnw test` (note: make sure you are in the top level of the project)
- in Intellij:
  - navigate to file to test, select green arrow next to test


# Database initialization steps

### 1. Create a Heroku account
- To access Heroku, you will need to [create an account](https://signup.heroku.com/login) first.
- NOTE: make sure to use your TW credentials. 

### 2. Connect to PostgreSQL DB 
#### In IntelliJ
The database has already been deployed (i.e. "launched") remotely. It can now be accessed from a local computer.
To understand the process of how to connect PostgreSQL DB in IntelliJ,
follow the instructions [in this video](https://www.youtube.com/watch?v=D-WoteCPi14&t=211s) (starting at 1:40 and ending at 4:10)

#### 2a. Install spring/postgres dependencies: 
- Navigate to pom.xml add under the PostgreSQL properties comment, add the following:
      


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

- After adding the dependencies, run the following command in your terminal:
`./mvnw install`

#### 2b. Create application-local.properties file
- Create a file called application-local.properties and copy the contents of application.properties (src/main/java/resources)
- Then run DemoApplication.

#### 2c. Add env variables to IntelliJ
- click on edit configurations
- Make sure to select springboot -> DemoApplication
- Go to environment variables and click "Edit Environment Variables'
- Then add all the key and value variables from "Heroku ConfigVars"

Note: Make sure to add all the key and value variables.

#### 2d. Update intellij database configurations
- scroll down to "on update action" and set it to "Update classes and resources"
- scroll down to "on frame deactivation" and set it to "Update classes and resources"
- Then on "Active profiles" type "local"
- Click on "Apply" and "Ok"

#### 2e. Test Database Connection
- Follow steps listed in video above to view database from database tab in intellij

#### In CLI
 - install required packages
   - `brew tap heroku/brew`
   - `brew install heroku`
    - `brew install postgresql`
- connect to database
    - `psql --host=<DATABASE_URL> --port=5432 --username=<user> --password --dbname=<db name>`
        - NOTES: 
          - configuration values (and password) can be found in heroku under settings -> config vars
          - dbname is located after the port number in the database url
- test connection to database
    - `\dt` to view database tables

#### Database Troubleshooting Steps:

After installation has been completed, follow the next set of steps:

1. Open intellij.

2. Open Invalidate Caches under "File" at the very top of your screen.

3. Make sure "clear downloaded shared indexes” is selected.

4. Click on "Invalidate and Restart."

- Note: wait for application to restart.

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
