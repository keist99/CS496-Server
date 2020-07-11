const express = require('express');
const app = express();

var async = require('async');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000/test'); // 기본 설정에 따라 포트가 상이 할 수 있습니다.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("mongo db connection OK.");
});

var testSchema = mongoose.Schema({
    phNum : 'string',
    name : 'string',
    photo_id : 'number',
    person : 'number',
    contact_id : 'string',
    address : 'string'
});

var Student = mongoose.model('Schema', testSchema);
var studentList;

app.post('/post', (req, res) => {
   // console.log(‘who get in here post /users’)
    var inputData;
    req.on('data', (data) => {
    inputData = JSON.parse(data);
    var ContactStudent = new Student({phNum:inputData.phNum, name:inputData.name, photo_id:inputData.photo_id, person:inputData.person, contact_id:inputData.contact_id, address:inputData.address});
    ContactStudent.save(function(error, data){
        if(error){
            console.log("error : no inputs!");
        }else{
            console.log('Saved!');
        }
    });
    });
    req.on('end', () => {
    console.log("phNum : " + inputData.phNum + " , name : " + inputData.name + " , address : " + inputData.address);
    });
    res.write("OK!");
    res.end();
});


app.get('/get_students', (req, res) => {
    console.log('who get in here/get_students');
    Student.find(function(error, students){
    console.log('--- Read all ---');
        if(error){
            console.log(error);
        }else{
            console.log(students);
            res.json(students)
        }
    });
});

// port : 3500으로의 연결
app.listen(3500, () => {
  console.log('Example app listening on port 3500!');
});
