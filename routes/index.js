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
 *	
 *	-------------------------------------------------------------------------*/	
router.get("/back1",function(request,response) {
  
  
  let totalrr = {};
  totalrr.title = {};
  totalrr.contents = {};
  
  serial();
  /*	---------------------------------------------------------------------/
   *	promise : serial
   *	--------------------------------------------------------------------*/
  function serial () {
      let promise = Promise.resolve();
      promise
          .then(call_title.bind(this,totalrr))
          .then(call_contents.bind(this,totalrr))
          .then(send_data);
  }
  
  
  
  /*	---------------------------------------------------------------------/
   *	promise : parallel
   *	--------------------------------------------------------------------*/
  function parallel () {
      let promise = Promise.resolve();

      function pp() {
          return Promise.all([
              call_title(totalrr),
              call_contents(totalrr)
          ]);
      }

      promise
          .then(pp)
          .then(send_data);
  }
  
  /*	---------------------------------------------------------------------/
   *	promise:function():call_title
   *	--------------------------------------------------------------------*/
  function call_title(totalrr) {
      return new Promise((resolve,reject) => {
          let url = "/api/demo?category1=summer&category2=title";
          totalrr.title.status = '';
          totalrr.title.body = 'Service restdb Unavailable';;
          _call_restdb(resolve,reject,url,totalrr.title);
      });
  }
  
  /*	---------------------------------------------------------------------/
   *	promise:function():call_contents
   *	--------------------------------------------------------------------*/
  function call_contents(totalrr) {
      return new Promise((resolve,reject) => {
          let url = "/api/demo?category1=summer&category2=contents";
          totalrr.contents.status = '';
          totalrr.contents.body = 'Service restdb Unavailable';;
          _call_restdb(resolve,reject,url,totalrr.contents);
      });
  }
  
  
  
  
  
  /*	---------------------------------------------------------------------/
   *	promise : _call_restdb
   *	--------------------------------------------------------------------*/
  function _call_restdb(resolve,reject,url,rr) {
     var options = {
          protocol: "http:",
          host: "restdb",
          port: 8080,
          path: url,
          method: "GET"
      };
      const req = http.request(options,(res)=>{
          let body = '';
          rr.status = res.statusCode;
          res.setEncoding("utf-8");
          res.on("data",(chunk) => {
              //console.log(chunk);
              body += chunk;
          });
          res.on("end",(chunk)=>{
              rr.body = JSON.parse(body);
              resolve(rr);
          });
      });
      req.on('error',(error) => {
          console.log(error.message);
          resolve(rr);
      });
      req.end();
	}
  
  /*	---------------------------------------------------------------------/
   *	promise : _call_restdb
   *	--------------------------------------------------------------------*/
  function send_data() {
      return new Promise((resolve,reject) => {
          console.log(JSON.stringify(totalrr));
          response.send(JSON.stringify(totalrr));
          resolve("render complete");
      });
  }
  
  
});


module.exports = router;


