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

router.get('/news',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select id,title,content from news',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/text',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	pool.query(`select * from news where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var title=req.body['title'];
	var content=req.body['content'];
	pool.query(`update news set title='${content}',title='${content}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
})


router.post('/delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var title=req.body['title'];
	var content=req.body['content'];
	pool.query(`update news set title='${title}',content='${content}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});









module.exports = router;
