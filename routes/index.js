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


// routing : title
router.get('/back1', function (request, response) {

  let totalrr = {};
  
  let tmp11={},tmp12={},tmp13 = {};
  let obj1 = {};
  obj1.json =[tmp11,tmp12,tmp13];
  tmp11.id = "11";
  tmp11.image = "beautiful-2576840_1920.jpg";
  tmp11.headline = "アウトドアをもっと手軽・快適に";
  tmp11.sub_headline = "気軽にエレガント　気軽に洗える";

  tmp12.id = "12";
  tmp12.image = "casual-1836613_1920.jpg";
  tmp12.headline = "カジュアルスタイルでグランピング";
  tmp12.sub_headline = "夏の思い出をUGと共に";

  tmp13.id = "13";
  tmp13.image = "fashion-2766734_1920.jpg";
  tmp13.headline = "そのまま街へでかけよう";
  tmp13.sub_headline = "夏のスタイルは思いのままに";
  totalrr.title ={};
  totalrr.title.status = ''
  totalrr.title.body = obj1;
  
  
  
  
  let tmp21={},tmp22={},tmp23={},tmp24={};
  let obj2 = {};
  obj2.json =[tmp21,tmp22,tmp23,tmp24];
  tmp21.id = "21";
  tmp21.image = "blue-2564660_1920.jpg";
  tmp21.headline = "アウトドアスタイル";
  tmp21.sub_headline = "日常でも快適に着られるアウトドアスタイルファッション";

  tmp22.id = "22";
  tmp22.image = "people-2563491_1920.jpg";
  tmp22.headline = "UGスタイル";
  tmp22.sub_headline = "UGで自分らしく自由なスタイルを";

  tmp23.id = "23";
  tmp23.image = "hip-hop-1209499_1920.jpg";
  tmp23.headline = "街角スタイル";
  tmp23.sub_headline = "街へでかけよう、ファッションを楽しもう";

  tmp24.id = "24";
  tmp24.image = "sunset-1282282_1920.jpg";
  tmp24.headline = "夏の特別コレクション";
  tmp24.sub_headline = "より快適に、より心地よいライフスタイルを";
  totalrr.contents ={};
  totalrr.contents.status = ''
  totalrr.contents.body = obj2;
  
  response.send(JSON.stringify(totalrr));
  
});



// routing : title
router.get('/back1_title', function (request, response) {

  
  
  let tmp1={},tmp2={},tmp3 = {};
  let obj = {};
  obj.json =[tmp1,tmp2,tmp3];
  tmp1.id = "11";
  tmp1.image = "beautiful-2576840_1920.jpg";
  tmp1.headline = "アウトドアをもっと手軽・快適に";
  tmp1.sub_headline = "気軽にエレガント　気軽に洗える";

  tmp2.id = "12";
  tmp2.image = "casual-1836613_1920.jpg";
  tmp2.headline = "カジュアルスタイルでグランピング";
  tmp2.sub_headline = "夏の思い出をUGと共に";

  tmp3.id = "13";
  tmp3.image = "fashion-2766734_1920.jpg";
  tmp3.headline = "そのまま街へでかけよう";
  tmp3.sub_headline = "夏のスタイルは思いのままに";
  response.send(JSON.stringify(obj));
});

// routing : contents
router.get('/back1_contents', function (request, response) {

  let tmp1={},tmp2={},tmp3={},tmp4={};
  let obj = {};
  obj.json =[tmp1,tmp2,tmp3,tmp4];
  tmp1.id = "21";
  tmp1.image = "blue-2564660_1920.jpg";
  tmp1.headline = "アウトドアスタイル";
  tmp1.sub_headline = "日常でも快適に着られるアウトドアスタイルファッション";

  tmp2.id = "22";
  tmp2.image = "people-2563491_1920.jpg";
  tmp2.headline = "UGスタイル";
  tmp2.sub_headline = "UGで自分らしく自由なスタイルを";

  tmp3.id = "23";
  tmp3.image = "hip-hop-1209499_1920.jpg";
  tmp3.headline = "街角スタイル";
  tmp3.sub_headline = "街へでかけよう、ファッションを楽しもう";

  tmp4.id = "24";
  tmp4.image = "sunset-1282282_1920.jpg";
  tmp4.headline = "夏の特別コレクション";
  tmp4.sub_headline = "より快適に、より心地よいライフスタイルを";
  response.send(JSON.stringify(obj));
});


module.exports = router;


