$(document).bind("contextmenu",function(){return false;});var element = new Image();Object.defineProperty(element, 'id',{get: function(){window.location.href = "https://www.baidu.com";}});console.log(element);setInterval(function(){check();},2000);var check = function(){function doCheck(a){if(('' + a / a)['length'] !== 1 || a % 20 === 0){(function(){}['constructor']('debugger')());}else{(function(){}['constructor']('debugger')());}doCheck(++a);}try{doCheck(0);}catch(err){}};check();