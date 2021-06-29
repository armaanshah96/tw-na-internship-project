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
  
##2. Download DataGrip
Congrats – you just connected to the DB from your command line! But it would since terminal isn't interactive, 
it'll be much easier to access/edit the database using an IDE. Let's set up DataGrip here: https://www.jetbrains.com/datagrip/download/#section=mac
– NOTE: Use the same license key used when downloading IntelliJ
For more instructions watch this video
https://www.youtube.com/watch?v=lmMFQMcWbq0

##3. Host the database on Heroku
Will need to set up database (aka DB) to connect to the backend