/*

for (var j = 0; j<4; j++){


    setTimeout(function (){
console.log(j) 
}, 2000)}*/




/*
'use strict';

// Создаётся объект promise
let promise = new Promise((resolve, reject) => {
   let i;
  setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    resolve(i);
  }, 2000*i);

});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
  .then(
    i => {
         for ( i = 0; i<4; i++){
      // первая функция-обработчик - запустится при вызове resolve
      console.log(i); // result - аргумент resolve
    }},
    error => {
      // вторая функция - запустится при вызове reject
      alert("Rejected: " + error); // error - аргумент reject
    }
  );*/


"use strict";
 
 window.onload = function () {
     for (var i = 0; i < 4; i++) {
         Promise.resolve(i).then(getI);
     }
 
     function getI(i) {
         setTimeout(function () {
             console.log(i);
         }, 1000 * i);
     }
 };


var promise = new Promise(function(resolve, reject){
	setTimeout(function() { console.log('hello')
	resolve();
		},1000)
	
});

promise
.then(setTimeout(function(){console.log('Good')},3000))
.then(setTimeout(function(){console.log('How are you')},4000))

/*var Fun = function(j){
    this.j = j;
     
}


    Fun.prototype.fun = function() {
        
        console.log(this.j)}
    Fun.prototype.go = function(){
       
        setTimeout( this.fun.call(this), 1000)
    }    
      




var bun = new Fun(5);
bun.go()
*/





/*for (var j = 0; j<4; j++){


    setTimeout(fun.bind(null, j), 3000)}

function fun(j){
    console.log (j)
}
*/




/*
var promise = function(a){
 return new Promise(
  function(resolve, reject){
   setTimeout(function(){
    console.log(a);
    resolve()
   }, a*1000)
  }
  )
}

promise(1)
.then (function(){
 return promise(2)
})
.then(function(){
 return (promise(3))
})*/


/*function timer(){
    let promise = new Promise(function(resolve,reject){
        setTimeout(function () {
             console.log(i);
             resolve();
         }, 1000 * i);
         return promise;
     }
    );
    for (var i = 0; i < 4; i++ ){
       timer()
       .then (resolve(i))
    }

}
*/

/*var promise = function(i){
 return new Promise(
  function(resolve, reject){
   setTimeout(function(){
    console.log(i);
   
   }, i*1000)
  }
  )
}
for (var i = 0; i < 4; i++ ){
       promise(i)

}
*/

    