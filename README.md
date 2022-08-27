# NC News App (Front-end)

Northcoders News is a social news aggregation, web content rating, and discussion website.

Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article.

You can find a pre-hosted version here:
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

## A Note on Styling

Being visually impaired, I have spent a minimal amount of time styling the app; as such, it is best to consider the app in terms of its design, structure and functionality rather than its visual appearance. As an active screen-reader user myself, I have also made some effort to consider accessibility both in design and in operation. For instance, when comments are posted successfully or when an error occurs, a message will not just be displayed to the viewer, but also read out by the screen-reader. Consideration has also been given to screen-reader Navigation, e.g. headers have been arranged so that screen-reader users can easily navigate the website and quickly explore articles of interest.
