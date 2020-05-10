/*Mongo DB*/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var books = [{
      id:1,
      "isbn": "8805147632",
      "cim": "Egri csillagok",
      "szerzo": "Gárdonyi Géza",
      "kiadas": "1901",
      "ar": 1799,
      "db" : 315,
      "leiras": "történelmi, háborús,14",
      "website": "https://hu.wikipedia.org/wiki/Egri_csillagok"
    },
    {
      id:2,
      "isbn": "6677850035",
      "cim": "Trónok harca - A tűz és jég dala I. ",
      "szerzo": "George R. R. Martin ",
      "kiadas": "2017",
      "ar": 3899,
      "db" : 74,
      "leiras": "fantasy, történelmi, háborús"
    },
    {
      id:3,
      "isbn": "1135675871",
      "cim": "Assassins Creed: Reneszánsz ",
      "szerzo": "Oliver Bowden ",
      "kiadas": "2011. június 30.",
      "ar": 3821,
      "db" : 36,
      "leiras": "akció, történelmi"
    },
    {
      id:4,
      "isbn": " 1554073030",
      "cim": "Titanic",
      "szerzo": "Jim Pipe",
      "kiadas": "2018",
      "ar": 254,
      "db" : 11,
      "leiras": "történelmi"
    },
    {
      id:5,
      "isbn": "9789634069300",
      "cim": "Vaják - The Witcher - Viharidő",
      "szerzo": "Andrzej Sapkowski",
      "kiadas": "2020",
      "ar": 3790,
      "db" : 99,
      "leiras": "Fantasy"
    },
    {
      id:6,
      "isbn": "9789634197256",
      "cim": "Ócenán az út végén",
      "szerzo": "Neil Gaiman",
      "kiadas": "2020",
      "ar": 3306,
      "db" : 9,
      "leiras": "Fantasy",
    },
    ];

MongoClient.connect(url, function(err, db) {
 
  var dbo = db.db("mydb");

/*User Collection*/

  dbo.createCollection("user", function(err, res) {

    console.log("Collection created!");
  });

/*Items Collection*/


  dbo.createCollection("items", function(err, res) {
     
      console.log("Collection created!");
      dbo.collection("items").insertMany(books, function(error, inserted) {
           if(error) {
               console.error(error);
           }
           else {
               console.log("Successfully inserted: " , inserted );
           }
       }); // end of insert

    });

});
