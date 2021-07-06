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
In order for you have access to Heroku, you will need to create an account firs. Make sure to use your TW credentials.
Go to this link and create a Heroku account [Heroku](https://id.heroku.com/login).

##2. Get started as a Collaborator in Heroku
- Once you have created your Heroku account. You will need to install Heroku CLI. Insert this command in your terminal:
```bash
$ brew tap heroku/brew && brew install heroku
```

- When you are ready to deploy the App. Use the following command:
```bash
git commit -a -m "Description of the changes I made"
```
- If you need extra information about the app. Insert the following command:
```bash
heroku info -a tw-intern-project
```

If you need extra information on about how to get started as a collaborator. You can find extra information [here](https://devcenter.heroku.com/articles/collab).

## 3. Database Installation in IntelliJ
In order to better understand the process of how to connect PostgreSQL DB in IntelliJ
follow the instructions [in this video](https://www.youtube.com/watch?v=D-WoteCPi14&t=211s)
-Note: You will need the Heroku credentials in order be able to deploy your database in Heroku.
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