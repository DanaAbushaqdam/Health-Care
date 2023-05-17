

   var caounter=1;
   function add_more_feild()
   {

     caounter+=1
       html='<div class="row" id="row '+caounter+'">\
       <div class="col-md-4 mb-4 pt-5 pb-0" id="c1'+caounter+' ">\
           <div class="form-outline" id="c2 '+caounter+'">\
           <label class="form-label" for="password">Test Category</label>\
             <input type="text" id="Category'+caounter+'" class="form-control" >\
           </div>\
       </div>\
       <div class="col-md-3 mb-4 pt-5 pb-0" id="c3 '+caounter+' ">\
           <div class="form-outline" id="c4 '+caounter+'">\
           <label class="form-label" for="password">Test Name</label>\
             <input type="text" id="name'+caounter+'" class="form-control " name="test">\
           </div>\
       </div>\
       <div class="col-md-2 mb-4 pt-5 pb-0" id="c5 '+caounter+'">\
           <div class="form-outline" id="c6 '+caounter+'">\
           <label class="form-label" for="password">Test Price</label>\
             <input  type="number" id="Price'+caounter+'" class="form-control" name="price ">\
           </div>\
       </div>\
        <div class="col-md-1 mb-4 pt-5 pb-0 "id="c21'+caounter+'">\
       <div class="form-outline" id="c22 '+caounter+'">\
         <label class="form-label p-0 m-0" for="flexCheckChecked" name="home '+caounter+'">Home Visit</label>\
         <input class="form-check-input  " type="checkbox" value="" name="home " id="flexCheckChecked'+caounter+'" >\
       </div>\
   </div>\
   <div class="col-md-3 mb-4 pb-0 pt-2" id="c57 '+caounter+'">\
   <div class="form-outline" id="c67 '+caounter+'">\
     <label class="form-label" for="password">Max value</label>\
     <input  type="number" id="max'+caounter+'" class="form-control" name="max">\
   </div>\
   </div>\
   <div class="col-md-3 mb-4 pb-0 pt-2" id="c58 '+caounter+'">\
   <div class="form-outline" id="c88 '+caounter+'">\
   <label class="form-label" for="password">Min value</label>\
   <input  type="number"  id="min'+caounter+'" class="form-control" name="min">\
   </div>\
   </div>\
   <div class="form-outline" id="c8 '+caounter+'">\
           <label class="form-label" for="password">About the Test</label>\
           <textarea class="form-control" id="exampleFormControlTextarea'+caounter+'" name="about" rows="2"></textarea>\
           </div>\
   </div>'
     
   var form= document.getElementById('test_form')
   form.innerHTML+= html
   $('#theForm').on('click', 'button', function(e) {
     alert(e.target.id);
   });

 
   var item = (caounter);
   localStorage.setItem("localStorage",item);
  //  console.log(item)

   }
   
   