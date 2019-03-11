document.addEventListener("DOMContentLoaded",function(){     //désolée David pour ce code barbare
    
    var nouvellepartie=document.querySelector('button'); //bouton de nouvelle partie
    var montd;                                          //la variable qui définit quel td est le bon
    var mestr=document.querySelectorAll('tr'); //tous mes tr
    var mestd=document.querySelectorAll('td'); //tous mes td
    var messages=document.querySelector('#info');
    var matable=document.querySelector('tbody');
    
    nouvellepartie.addEventListener('click', function(){  //on lance la partie
        //var gagne=false;
        lebon();
        reseter();
        var compteur=6;
        //console.log(montd); 
        
        for (let i=0;i<mestd.length;i++){
            mestd[i].addEventListener('click', function(){
                compteur--;
                console.log(compteur);
                
                if(compteur<0){
                    messages.innerHTML="Vous n'avez plus d'essais!";
                    
                }
                
                else if(i==montd){
                    mestd[i].classList.add('correct');
                    //gagne=true;
                    messages.innerHTML="Vous avez gagné";
                    compteur=0;
                }
                else if(i!=montd && (montd===0 || montd%5===0)){
                    if(i==(montd+1)||i==montd+5||i==montd-5||i==montd-4||i==montd+6){
                        mestd[i].classList.add('close');
                    }
                    else{
                        mestd[i].classList.add('wrong');
                    }
                  messages.innerHTML="il vous reste "+compteur+" essais";  
                }
                else if(i!=montd && (montd+1)%5===0){
                     if(i==(montd-1) ||i==montd+5||i==montd-5||i==montd+4||i==montd-6){
                        mestd[i].classList.add('close');
                    }
                     else{

                        mestd[i].classList.add('wrong');
                    }
                    messages.innerHTML="il vous reste "+compteur+" essais";
                }

                else{
                    if(i==(montd+1)||i==(montd-1) ||i==montd+5||i==montd-5||i==montd-4||i==montd+6||i==montd+4||i==montd-6){
                        mestd[i].classList.add('close');
                    }
                    else{

                        mestd[i].classList.add('wrong');
                    }
                    messages.innerHTML="il vous reste "+compteur+" essais";
                }
            })

        }
            
             
        
    });
    
    //console.log(mestd);
    
    function lebon(){   //fonction pour choisir le bon td sur tous les td ici de 0-24
        var rnd=Math.floor(Math.random()*25); 
        montd=rnd;
        
    }
    
    
    function reseter(){
        for(let i=0; i<mestd.length;i++){
            mestd[i].classList.remove('wrong');
            mestd[i].classList.remove('close');
            mestd[i].classList.remove('correct');
        }
    }  
    
    


    
    
    
})