window .onload = function(){
    let left = document.querySelector('.prev');
    let right = document.querySelector('.next');
    let imgs = document.querySelectorAll('.images img');
    let i = 0;

    left.onclick = function(){
         imgs[i].className= '';
         if(i==0){
             i = imgs.length - 1;

         }
         i--;
         imgs[i].className = 'showed';
        }
    right.onclick = function(){
        imgs[i].className= '';
        if(i == imgs.length - 1){
            i = 0;
   
        }
        i++;
        imgs[i].className = 'showed'; 
      
    }


}