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
router.get('/back1_title', function (request, response) {

  let tmp1={},tmp2={},tmp3 = {};
  let obj = {};
  let obj1.json =[tmp1,tmp2,tmp3];
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
  let obj1.json =[tmp1,tmp2,tmp3,tmp4];
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
});


module.exports = router;


