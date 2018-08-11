
/**
    MIT License

    Copyright (c) 2018 m.aria bishma fauzan

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
 */

 function wf2(data) {

   this.methods = data.methods;
   this.data = data.data;
   this.name = "bishma";

   this.qs = function(text){
     const elment = document.querySelectorAll(text);
     return new wf2QsCore(elment,this);
   };

   this.htReq = function(inpt){
     var orxhttp = new XMLHttpRequest();
     var dt = this;
      orxhttp.open(inpt.meth,inpt.url,true);
      if (typeof inpt.data == "string") {
        orxhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      }
      orxhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
          return inpt.onsuccess(this.responseText,dt);
        }
      };
      orxhttp.send(inpt.data);
   };

   this.chgDat = function(dat_name , value){
     return this.data[dat_name] = value;
   };


 };

 function wf2QsCore(q,meth) {
   this.elm = q[0];
   this.meth = meth;
 };

 wf2QsCore.prototype.addfunct = function (data) {
   const meth = this.meth.methods,
         dt = this.meth;
   this.elm.addEventListener(data.on,function(){
     if (typeof data.func === "string") {
       meth[data.func](this,dt);
     }else{
       data.func(this,dt);
     }
   });
 };

 wf2QsCore.prototype.return = function () {
    return this.elm;
 };
