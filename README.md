# YelpCamp

> This is a web app where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project was part of The Web Developer Bootcamp on udemy.

## Features
* Users can create, edit, and remove campgrounds
* Users can review campgrounds once, and edit or remove their review
* User profiles include more information on the user (full name, email, phone, join date), their campgrounds, and the option to edit their profile or delete their account
* Search campground by name or location
* Sort campgrounds by highest rating, most reviewed, lowest price, or highest price

### Application deployed on Heroku: <https://th-yelpcamp.herokuapp.com/>

## Application screenshots: <br/>
![Home screenshot][home-screenshot]
![Campgrounds screenshot][camps-screenshot]
![Campground screenshot][camp-screenshot]



## Built with
* [Express](https://expressjs.com/) as Node.js web application framework
* [Ejs](https://ejs.co/) to include dynamic data to the html
* [Bootstrap](https://getbootstrap.com/) as the CSS framework
* [MongoDB](https://www.mongodb.com/) as the database
* [Passport](https://www.passportjs.org/) to handle authentication

## Running the app
To launch the application locally:
1. Clone repo:
   ```
   git clone https://github.com/talhazi/YelpCamp.git
   ```
2. Enter the directory:
   ```
   cd YelpCamp
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create .env file in the root of the project and add the following:
   ```
    CLOUDINARY_CLOUD_NAME=<cloudinary-cloud-name>
    CLOUDINARY_KEY=<cloudinary-key>
    CLOUDINARY_SECRET=<cloudinary-secret>
    MAPBOX_TOKEN=<mapbox-token>
    DB_URL=<db-url>
    SECRET=<secret>
    ```
    helpful links: [Cloudinary](https://cloudinary.com/), [Mapbox](https://www.mapbox.com/), [mongoDB Atlas](https://www.mongodb.com/atlas/database), [RandomKeyGen](https://randomkeygen.com/) (for SECRET)

5. Install (if needed) and run mongoDB:
   ```
   mongod
   ```
6. Run the app:
   ```
   npm start
   ```
   ```
   # dev mode
   npm run dev
   ```
   Now the server should run at: <http://localhost:3000>

## Contact
Tal Hazi <> [talhazi114@gmail.com](mailto:talhazi114@gmail.com)

[home-screenshot]: ./assets/home-screenshot.png
[camps-screenshot]: ./assets/camps-screenshot.png
[camp-screenshot]: ./assets/camp-screenshot.png

