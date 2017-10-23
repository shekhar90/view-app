var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var URL = 'mongodb://shekhar:SecurePwd123$@ds127065.mlab.com:27065/viewappdb';
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
    MongoClient.connect(URL, function(err, db) {
        if (err) {
            console.log("error connecting db");
        } else {
            console.log("connected db");
            var collection = db.collection('view');
            collection.find({ name: 'shekhar' }).toArray(function(err, docs) {
                console.log(docs[0]);
                db.close();
            });
        }
    });
    response.send('shekhar');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});