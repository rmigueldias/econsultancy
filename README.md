# Econsultancy - front end developer assesment

## Requirements

This test expects basic familiarity with:
- node & npm
- bower
- git & github

## Instructions

### Setup

This project uses [node](http://nodejs.org/) and it's package manager, npm as well as [bower](http://bower.io/) for front end dependecies. If/when you have these installed run:
```
npm install && bower install
```

You should be able to run a server by running (note - nothing is served in the root folder):
```
node server.js
```

Navigate to `http://localhost:5000/app` to see the code you will be working on. Under `http://localhost:5000/specs` you will find a few failing Jasmine specs.

Create a git repository and commit the received code. Your work should be everything but the first commit. Create a separate file for question answers.
When you are done, create a new github repo and push your code there.

### Questions

 1. Will this code work in IE8? If not, why?
 2. What design patterns are used here?
 3. The app loads many separate script tags, how could this be optimized?
 4. Point out potential problems in the code

###  Tasks

 1. Implement code needed to fix the failing specs in `/specs`
 2. Implement the User constructor
 3. Implement a real XMLHttpRequest in `ec.util.getJson` and get data from `api/data.json`
 4. Create HTML & CSS according to the mockup in `/assets/mockup.png`

## Criteria

This test is more about the journey then the outcome. If you can finish everything - great, if not add comment in your reply email or your answers file about what you would do next.

**Good luck!**
