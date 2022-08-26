# NC News App (Front-end)

Front end web application for accessing the backend Northcoders News API. You can find a pre-hosted version here:
<insert link>

## To run the application locally:

1. Go to the GitHub repository at:

https://github.com/ToddDevRepo/fe-nc-news

2. Fork your own version of the project.
3. On your fork, click 'Code' and copy the http clone link.
4. Using your local machine command-line, navigate to the folder you want it in and type:

$ git clone <link to fork>

5. Install the dependencies by typing:

$ npm install

6. Start the application by typing:

$ npm start

This will run a local instance of the application which accesses our pre-hosted backend. The hosted backend can be found here:

https://nc-news-api-live.herokuapp.com/api

7. If you wish to use a local version of the backend, you can find it here:

https://github.com/ToddDevRepo/nc-news-api

Follow the instructions to run the backend, then goto the Urls class in the Globals.js file of the front end project and set the static NC_NEWS_URL variable to the backend on your local host.
