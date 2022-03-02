const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            // your USER ID
            author: '6208d7cad77f8f2d1c1a5eb0',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quas quo quibusdam totam aliquam obcaecati cumque doloribus. Tempora perspiciatis eveniet eos numquam ea maxime quos, eum quam consectetur aspernatur! Debitis.',
            price,
            geometry: {
                type: "Point",
                coordinates: [-113.1331, 47.0202]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/talhazi/image/upload/v1646209694/YelpCamp/evc0n9x6y7xbwjfvjjv0.jpg',
                    filename:'YelpCamp/evc0n9x6y7xbwjfvjjv0'
                },
                {
                    url: 'https://res.cloudinary.com/talhazi/image/upload/v1646209694/YelpCamp/cbpymymt36j0igjndfiw.jpg',
                    filename: 'YelpCamp/cbpymymt36j0igjndfiw'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})