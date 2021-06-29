#Database initialization steps

##1. Establish local connection to database
The database has already been deployed (i.e. "launched") remotely, and now you want to gain access from your own computer.
Follow the instructions [in this video](https://youtu.be/80oty2v4HsE?t=170) starting @ 2:50 and ending at 5:17. 
(feel free to continue watching to learn about modifying DB personal using PostGresSQL). Below are the skeleton commands used in the video:

- Set up [Heroku CommandLind Interface](https://devcenter.heroku.com/articles/heroku-cli):
\
`brew tap heroku/brew && brew install heroku`

- Command to establish connection in terminal, replace bracketed info with relevant information:
\
`psql --host=<HOST> --port=<PORTNUM> --username=<USER> --password --dbname=<DBNAME>`
  - At this point you should be prompted for the password – for now, contact Natalie or Julio for a copy of the password.  
  
-NOTE: Be wary of excess spaces in the command line. If the CL errors with `$ psql: command not found`,
this means brew has not been correctly installed. Run the command `brew install postgresql` and then start the instructions over in this section.

- If you are connected to the database, after running the `psql` command, enter the command `\dt` to display the existing tables in the database.
  
-  Enter Password from the Heroku credentials 
##2. Download DataGrip
Congrats – you just connected to the DB from your command line! But since terminal isn't interactive, 
it'll be much easier to access/edit the database using an IDE. Let's use DataGrip – [Click here to download](https://www.jetbrains.com/datagrip/download/#section=mac)

Use the same licensce key used when downloading IntelliJ – this should have been emailed to you.
For more instructions on connecting the DB to DataGrip, [watch this video.](https://www.youtube.com/watch?v=lmMFQMcWbq0)

##3. Host the database on Heroku
Will need to set up database (aka DB) to connect to the backend

## Database Installation in IntelliJ
In order to better understand the process of how to connect PostgreSQL BD in IntelliJ
follow the instructions [in this video](https://www.youtube.com/watch?v=D-WoteCPi14&t=211s) 
-Note: You will need the Heroku credentials in order be able to deploy your DB in Heroku.
