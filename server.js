const express = require('express');
const app = express();
const path = require('path');

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
}

app.use(urlLogger, timeLogger);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  // We don't need to explicitly use this handler or send a response because Express is using the default path of the static assets to serve this content
});

app.get('/json', (request, response) => {
  response.status(200).send({"name": "Snuffaluffagus"});
});

app.get('/sunsets', (request, response) => {
  response.status(200).send({
    "images" : [
      "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?h=350&auto=compress&cs=tinysrgb",
      "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?h=350&auto=compress&cs=tinysrgb",
      "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?h=350&auto=compress&cs=tinysrgb",
      "https://images.pexels.com/photos/417142/pexels-photo-417142.jpeg?h=350&auto=compress&cs=tinysrgb",
      "https://images.pexels.com/photos/248174/pexels-photo-248174.jpeg?h=350&auto=compress&cs=tinysrgb",
      "https://images.pexels.com/photos/356234/pexels-photo-356234.jpeg?h=350&auto=compress&cs=tinysrgb"
    ]
  })
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});
