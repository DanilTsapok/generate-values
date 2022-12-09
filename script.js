 function auth(){
   let name = document.getElementById('name-user').value;
    document.getElementById('name').innerHTML = name;
    document.getElementById('point2').innerHTML = 0;
    document.getElementById('point1').innerHTML = 0;
    document.getElementById('result1').innerHTML = 0;
    document.getElementById('result2').innerHTML = 0;
}
let sum1 = 0;
let sum2 = 0;  
function func(){   
   let a = Math.floor(Math.random() * 10)+6;
   let b = Math.floor(Math.random() * 10)+6;

   document.getElementById('result1').innerHTML= a;
   document.getElementById('result2').innerHTML= b; 
   if(a>b){
      sum1 += 1;
      document.getElementById('point1').innerHTML = sum1; 
      document.getElementById('point2').innerHTML = sum2; 
   }if(a<b){
      sum2 += 1;
      document.getElementById('point1').innerHTML = sum1; 
      document.getElementById('point2').innerHTML = sum2; 
   }if (a==b){
      sum1+=1;
      sum2+=1;
      document.getElementById('point1').innerHTML = sum1; 
      document.getElementById('point2').innerHTML = sum2; 
   }
  
  btn = document.querySelector('#btn');
  if(document.getElementById('point1').innerHTML == 3 || document.getElementById('point2').innerHTML == 3){
   btn.setAttribute('disabled', true);
   if(document.getElementById('point1').innerHTML>document.getElementById('point2').innerHTML){
      user = document.querySelector('#name');
      user.setAttribute('style', ' color: yellow;',)
   } else{
      user = document.querySelector('#comput');
      user.setAttribute('style', ' color: yellow;')
   }
   } 
}


   
  


  
      

