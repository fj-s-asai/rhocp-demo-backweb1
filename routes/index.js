/*	--------------------------------------------------------------------------/
 *	author		: 
 *	module		：
 *											COPYRIGHT 
 *	-------------------------------------------------------------------------*/


/*	--------------------------------------------------------------------------/
 *	index.js
 *	-------------------------------------------------------------------------*/	

const express = require('express');
const http = require("http");
const router = express.Router();


/*	--------------------------------------------------------------------------/
 *	search title data
 *	-------------------------------------------------------------------------*/	
router.get('/back1_title', function (request, response) {
    find(request, response,"/api/demo?category1=summer&category2=title");
});

/*	--------------------------------------------------------------------------/
 *	search content data
 *	-------------------------------------------------------------------------*/	
router.get('/back1_contents', function (request, response) {
	find(request, response,"/api/demo?category1=summer&category2=contents");
});


/*	--------------------------------------------------------------------------/
 *	common : find
 *	-------------------------------------------------------------------------*/	
function find(request,response,url) {
	let totalrr = {};
	totalrr.restdb = {};
	
	let promise = Promise.resolve();
	promise
		.then(call_restdb)
		.then(send_data);

	function call_restdb() {
		return new Promise((resolve,reject) => {
          var options = {
              protocol: "http:",
              host: "restdb",
              port: 8080,
              path: url,
              method: "GET"
          };
          let rr = {};  
          rr.status = ''; 
          rr.body =  'Service restdb Unavailable';
          totalrr.restdb = rr;
          const req = http.request(options,(res)=>{
              let body = '';
              rr.status = res.statusCode;
              res.setEncoding("utf-8");
              res.on("data",(chunk) => {
                  console.log(chunk);
                  body += chunk;
              });
              res.on("end",(chunk)=>{
                  rr.body = body;
                  resolve(rr);
              });
          });
          req.on('error',(error) => {
              console.log(error.message);
              resolve(rr);
          });
          req.end();
      });
	}
	
	function send_data() {
		return new Promise((resolve,reject) => {
			response.send(totalrr.restdb.body);
			resolve("render complete");
		});
	}
}


module.exports = router;


