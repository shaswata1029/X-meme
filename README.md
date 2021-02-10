# X-Meme

Frontend and Backend code are in separate files named as "frontend" and "backend" respectively.

## TECH-STACK USED

1. Database- MongoDB Compass(for local testing) and MongoDB Atlas(for public deployment)

2. Backend server - Node.js and EXpress

3. Frontend-EJS(Embedded Javascript)

Both backend and frontend are hosted on Heroku.
You can go and visit there - <https://shielded-peak-33078.herokuapp.com/>

## Local Run

Before running make sure to change the configuration in the mongoose.js of config folder

```bash
npm install && npm start
```

## Deployment

After signing up on Heroku, create a new app, and proceed to download Heroku CLI

```bash
heroku login -i
heroku builds:create -a <name_of_your_app>
```
