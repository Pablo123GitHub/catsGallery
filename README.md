## Goal

Create Instagram just for Cats galleries. 


### Resources

I have used the following technology to build the application :

- Used [Create React App]( https://github.com/facebook/create-react-app) to create React app on the frontend
- Used [Express generator](https://expressjs.com/en/starter/generator.html) to create the backend
- React comes with many dependencies allowing the app to be run
- And the same applies to Express who runs on top of Node.JS
- Knex.js is used as SQL builder/ORM with a postgres Database


### Initial set up

From a Terminal window : 

```
git clone https://pablobitbucket123@bitbucket.org/pablobitbucket123/mvf_cat_gallery.git

```

Install React front end dependencies

```
cd frontend
npm install
```

Install Express backend dependencies

```
cd backend
npm install
```

Also in the backend we need to install knex globally. This is required to set up knex.js with Postgres. We will then be able to configure the DB environments and create seed files.

```
npm install knex -g
```

Then you need to go your local postgres Database and create the following  :

```
psql
CREATE DATABASE cats_gallery_development;
CREATE DATABASE cats_gallery_test;
```

While we are still in the backend folder (in Terminal), we can migrate the tables columns of our respective DB, and also we can seed the files with sample data.

```
knex migrate:latest --env development
knex migrate:latest --env test
knex seed:run --env development
knex seed:run --env test
```


### How it works

Run the backend first :

```
cd backend
npm start
```

Then run the frontend :

```
cd frontend
npm start
```

Here is a screencast of the MVP :

https://www.screencast.com/t/Z57WBLX8SEa


### What I still have to fix : (work in progress)

- I have run into issues with tests as create-reacte app gives you the flexibility to have a quick React environment but you are limited with the amount of testing dependencies that you can use. I was not able to run tests, and I believe that many other Create-react-app users have been facing a similar [issue](https://github.com/facebook/jest/issues/4419). I should have looked into it right from the start.

- I have not followed the JSON pattern for photoCardsData.json so I should have designed a permanent data solution matching this JSON format.

- The Express JS server serves all the DB data at /pictures and /users endpoint via the PORT=3001 proxy....and React JS displays all of them respectively with Pictures and Users components. Since the data are served for React to use, I should have provided the ability to filter the data at component level probably.

- the Home component form is not linked with the backend. Upon registering the user record is not added to the DB. If the user is in the DB then I can show the pictures specific to the user which would have been a nice feature.

- Authentication security is not available. Installing Passport JS node package in order to hash the password that every user submits to the DB.

- the Upload component is not linked with the backend. Upon uploading, the picture should be inserted into the database. Currently it is just displayed on the page.

- Styling can be improved.
