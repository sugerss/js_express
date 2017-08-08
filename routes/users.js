var express=require('express');
var mysql=require('mysql');
var router=express.Router();
var config=require('./config');

var pool=mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'PARIS9797',
	database:'exam',
	port:config.port
});
const add=config.url;









module.exports = router;
