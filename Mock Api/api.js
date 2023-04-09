const express = require('express');
const app = express();

// Define an API endpoint at /api/hello
const Products = [
    {
      "pSold": 0,
      "pQuantity": 5,
      "pImages": [
        "https://img.faballey.com/images/Product/ILL00323Z/d3.jpg",
        "https://img.faballey.com/images/Product/ILL00323Z/d3.jpg"
      ],
      "pOffer": "10",
      "_id": "1",
      "pName": "Pink Dress by Zara",
      "pDescription": "Pink Satin dress by Zara - floral print",
      "pPrice": 1800,
      "pCategory": {
        "_id": "64156dfdeac3a031442080d1",
        "cName": "Womenwear"
      },
      "pStatus": "Active",
      "pRatingsReviews": [
        {
          "createdAt": "2023-03-18T09:03:09.513Z",
          "_id": "64157ea7cbf2dd2568976c61",
          "review": "good product but expensive",
          "user": "64156d6ceac3a031442080ba",
          "rating": "5"
        }
      ],
      "createdAt": "2023-03-18T07:57:49.537Z",
      "updatedAt": "2023-03-18T09:04:39.894Z",
      "__v": 0
    },

    {
        "pSold": 0,
        "pQuantity": 5,
        "pImages": [
          "https://cdn16.nnnow.com/web-images/large/styles/GOI8OKZRP7R/1609758143103/1.jpg",
          "https://cdn16.nnnow.com/web-images/large/styles/GOI8OKZRP7R/1609758143103/1.jpg"
        ],
        "pOffer": "10",
        "_id": "2",
        "pName": "Blue Shirt by SansClothing",
        "pDescription": "Blue Shirt by SansClothing - Strips Shirt",
        "pPrice": 1800,
        "pCategory": {
          "_id": "64156dfdeac3a031442080d1",
          "cName": "Womenwear"
        },
        "pStatus": "Active",
        "pRatingsReviews": [
          {
            "createdAt": "2023-03-18T09:03:09.513Z",
            "_id": "64157ea7cbf2dd2568976c61",
            "review": "good product but expensive",
            "user": "64156d6ceac3a031442080ba",
            "rating": "5"
          }
        ],
        "createdAt": "2023-03-18T07:57:49.537Z",
        "updatedAt": "2023-03-18T09:04:39.894Z",
        "__v": 0
      },

      {
        "pSold": 0,
        "pQuantity": 5,
        "pImages": [
          "https://assets.ajio.com/medias/sys_master/root/20210106/puVB/5ff57c287cdb8c1f141e08a0/-473Wx593H-461017784-yellow-MODEL.jpg",
          "https://assets.ajio.com/medias/sys_master/root/20210106/puVB/5ff57c287cdb8c1f141e08a0/-473Wx593H-461017784-yellow-MODEL.jpg"
        ],
        "pOffer": "10",
        "_id": "3",
        "pName": "Yellow Trouser by Zara - plain",
        "pDescription": "Yellow Trouser by Zara - plain",
        "pPrice": 1800,
        "pCategory": {
          "_id": "64156dfdeac3a031442080d1",
          "cName": "Womenwear"
        },
        "pStatus": "Active",
        "pRatingsReviews": [
          {
            "createdAt": "2023-03-18T09:03:09.513Z",
            "_id": "64157ea7cbf2dd2568976c61",
            "review": "good product but expensive",
            "user": "64156d6ceac3a031442080ba",
            "rating": "5"
          }
        ],
        "createdAt": "2023-03-18T07:57:49.537Z",
        "updatedAt": "2023-03-18T09:04:39.894Z",
        "__v": 0
      },

      {
        "pSold": 0,
        "pQuantity": 5,
        "pImages": [
          "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71f-S4cIeuL._UX569_.jpg",
          "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71f-S4cIeuL._UX569_.jpg"
        ],
        "pOffer": "10",
        "_id": "4",
        "pName": "Black Hat by Balenciaga",
        "pDescription": "Black Hat by Balenciaga",
        "pPrice": 1800,
        "pCategory": {
          "_id": "64156dfdeac3a031442080d1",
          "cName": "Womenwear"
        },
        "pStatus": "Active",
        "pRatingsReviews": [
          {
            "createdAt": "2023-03-18T09:03:09.513Z",
            "_id": "64157ea7cbf2dd2568976c61",
            "review": "good product but expensive",
            "user": "64156d6ceac3a031442080ba",
            "rating": "5"
          }
        ],
        "createdAt": "2023-03-18T07:57:49.537Z",
        "updatedAt": "2023-03-18T09:04:39.894Z",
        "__v": 0
      },

      {
        "pSold": 0,
        "pQuantity": 5,
        "pImages": [
          "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/5138zp81tpL._UX569_.jpg",
          "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/5138zp81tpL._UX569_.jpg"
        ],
        "pOffer": "10",
        "_id": "5",
        "pName": "Black Shades",
        "pDescription": "Black Shades",
        "pPrice": 1800,
        "pCategory": {
          "_id": "64156dfdeac3a031442080d1",
          "cName": "Womenwear"
        },
        "pStatus": "Active",
        "pRatingsReviews": [
          {
            "createdAt": "2023-03-18T09:03:09.513Z",
            "_id": "64157ea7cbf2dd2568976c61",
            "review": "good product but expensive",
            "user": "64156d6ceac3a031442080ba",
            "rating": "5"
          }
        ],
        "createdAt": "2023-03-18T07:57:49.537Z",
        "updatedAt": "2023-03-18T09:04:39.894Z",
        "__v": 0
      }
]


app.get('/api/prods', (req, res) => {
  res.send(Products);
});

app.get('/api/prods/:id', (req, res) => {
  for (let i = 0; i < Products.length; i++) {
    if(Products[i]["_id"].valueOf() === req.params.id.valueOf())
    {
      return res.send(Products[i])
    }
  }
});

// Start the server
app.listen(8003, () => {
  console.log('Server started on port 8003');
});
