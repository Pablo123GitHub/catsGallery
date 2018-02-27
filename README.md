# MVF Developer Tests
## React (cats gallery)

Thanks for your interest in a developer role at MVF.

We have a simple project which we would like you to take a look at in your own time.

You can spend as much or as little time on it as you wish, but if we have asked you to take a look at this, we would usually expect to receive a response in a 3-4 days.

The task is to build a React app based on the data in this repository. We would like you to attempt this challenge using React, but aside from that you can use any language(s) you are familiar with, using any other libraries, modules or frameworks you feel appropriate. See it as a opportunity to showcase your professional software engineering skills.

How would you implement this? Fork our repo and let us see your ideas!

### Challenge
Implement the stories in userStories.md to build a photo feed gallery.

If you wish, you can refer to wireframes wireframe.png and bonus_stories_wireframe.png to guide you.

The data describing the gallery contents is located in photoCardsData.json

Your app should be able to take any json in a similar format and display the relevant gallery.

### Resources

I have used the following technology to build the application :

- Used [Create React App]( https://github.com/facebook/create-react-app) to create React app on the frontend
- Used [Express generaator](https://expressjs.com/en/starter/generator.html) to create the backend
- React comes with many dependencies allowing the app to be run
- And the same applies to Express who runs on top of Node.JS
- Knex.js is used as SQL builder/ORM with a postgres Database


### How this could be improved

- I have not followed the JSON pattern for photoCardsData.json so I should have designed a permanent data solution matching this JSON format.



### Initial set up

We can go to Terminal to set up the environments:

```
git clone https://pablobitbucket123@bitbucket.org/pablobitbucket123/mvf_cat_gallery.git

```

Install React front end dependencies (from )

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

Here is a screencast demo :

https://www.screencast.com/t/V5mTjmPZ7Scc



### What could be improved

- I have run into issues with tests as create-reacte app gives you the flexibility to have a quick React environment but you are limited with the amount of testing dependencies that you can use. I was not able to run tests, and I believe that many other Create-react-app users have been facing a similar [issue](https://github.com/facebook/jest/issues/4419). I should have looked into it right from the start.

- The Express JS server serves all the DB data at /pictures and /users endpoint via the PORT=3001 proxy....and React JS displays all of them respectively with Pictures and Users components. Since the data are served for React to use, I should have provided the ability to filter the data at component level probably.

- the Home component form is not linked with the backend. Upon registering the user record should be added to the DB. If I insert the user in the DB then I can show specifically the users' pictures.

- Authentication security is not available. Installing Passport JS node package in order to hash the password that every user submits to the DB.

- the Upload component is not linked with the backend. Upon uploading, the picture should be inserted into the database. Currently it is just displayed on the page.

- Styling can be improved, definitely.
