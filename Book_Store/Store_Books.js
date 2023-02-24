/*Myimage.forEach(Myimage =>{

    
Myimage.addEventListener("mouseover",hoverme)
   

})


function hoverme() {

    showingData.forEach(showingData =>{


        showingData.style.visibility = "visible" ;
        showingData.style.bottom ="-1px" ;

    })
    
}
*/
/* Functions to show the Data of the Book*/

var Myimage1 = document.querySelector(".First_img") ;
var Myimage2 = document.querySelector(".Second_img") ;
var Myimage3 = document.querySelector(".Third_img") ;
var Myimage4 = document.querySelector(".Forth_img") ;
var Myimage5 = document.querySelector(".Fifth_img") ;
var Myimage6 = document.querySelector(".six_img") ;
var Myimage7 = document.querySelector(".sventh_img") ;
var Myimage8 = document.querySelector(".eight_img") ;
var Myimage9 = document.querySelector(".nine_img") ;


var showingData1 = document.querySelector(".DataBooks1") ;
var showingData2 = document.querySelector(".DataBooks2") ;
var showingData3 = document.querySelector(".DataBooks3") ;
var showingData4 = document.querySelector(".DataBooks4") ;
var showingData5 = document.querySelector(".DataBooks5") ;
var showingData6 = document.querySelector(".DataBooks6") ;
var showingData7 = document.querySelector(".DataBooks7") ;
var showingData8 = document.querySelector(".DataBooks8") ;
var showingData9 = document.querySelector(".DataBooks9") ;


var doted1 = document.querySelector(".dot1") ;

var doted2 = document.querySelector(".dot2") ;

var doted3 = document.querySelector(".dot3") ;

var myText11 =document.querySelector(".Text11") ;

var myText3 = document.querySelector(".Text3") ;

var myText4 = document.querySelector(".Text4") ;


 doted1.addEventListener("click" , function() {
    myText3.style.zIndex = "-1" ;
    myText11.style.zIndex = "1" ;
    myText4.style.zIndex = "-1" ;

 })

 doted2.addEventListener("click" , function() {

    myText11.style.zIndex = "-1" ;
    myText3.style.zIndex = "1" ;
    myText4.style.zIndex = "-1" ;

 })

 doted3.addEventListener("click" , function() {

    myText11.style.zIndex = "-1" ;
    myText3.style.zIndex = "-1" ;
    myText4.style.zIndex = "1" ;

 })



var MyBag = document.getElementById("bag") ;

var btn =document.querySelectorAll(".btn11") ;

var counter = 0 ;

btn.forEach(btn => {

    btn.addEventListener('click',function () {
        
        counter++ ;

        MyBag.textContent = counter ;
    })
    
});




/* First BooksData */

Myimage1.addEventListener('mouseover',hoverme1)

function hoverme1() {

    showingData1.style.visibility = "visible" ;
    showingData1.style.right ="1px" ;
    
}

Myimage1.addEventListener('mouseout',hoverout1)

function hoverout1() {

    showingData1.style.visibility = "hidden" ;
    showingData1.style.right ="40px" ;
    
}


/* Second BookData */ 

Myimage2.addEventListener('mouseover',hoverme2)

function hoverme2() {

    showingData2.style.visibility = "visible" ;
    showingData2.style.right ="-5px" ;
    
}

Myimage2.addEventListener('mouseout',hoverout2)

function hoverout2() {

    showingData2.style.visibility = "hidden" ;
    showingData2.style.right ="40px" ;
    
}

/* Third BookData  */

Myimage3.addEventListener('mouseover',hoverme3)


function hoverme3() {

    showingData3.style.visibility = "visible" ;
    showingData3.style.right ="-5px" ;
    
}

Myimage3.addEventListener('mouseout',hoverout3)

function hoverout3() {

    showingData3.style.visibility = "hidden" ;
    showingData3.style.right ="40px" ;
    
} 


/* Fourth BooksData */

Myimage4.addEventListener('mouseover',hoverme4)

function hoverme4() {

    showingData4.style.visibility = "visible" ;
    showingData4.style.right ="-5px" ;
    
}

Myimage4.addEventListener('mouseout',hoverout4)

function hoverout4() {

    showingData4.style.visibility = "hidden" ;
    showingData4.style.right ="40px" ;
    
}

/* Fifth BookData */

Myimage5.addEventListener('mouseover',hoverme5)

function hoverme5() {
    showingData5.style.visibility = "visible" ;
    showingData5.style.right ="-5px" ;
}

Myimage5.addEventListener('mouseout',hoverout5)

function hoverout5() {

    showingData5.style.visibility = "hidden" ;
    showingData5.style.right ="40px" ;
    
}

/* sixth BookData */ 

Myimage6.addEventListener('mouseover',hoverme6)

function hoverme6() {

    showingData6.style.visibility = "visible" ;
    showingData6.style.right ="-5px" ;
    
}

Myimage6.addEventListener('mouseout',hoverout6)

function hoverout6() {

    showingData6.style.visibility = "hidden" ;
    showingData6.style.right ="40px" ;
    
}

/* seventh DataBook */

Myimage7.addEventListener('mouseover',hoverme7)

function hoverme7() {

    showingData7.style.visibility = "visible" ;
    showingData7.style.right ="-5px" ;
    
}

Myimage7.addEventListener('mouseout',hoverout7)

function hoverout7() {

    showingData7.style.visibility = "hidden" ;
    showingData7.style.right ="40px" ;
    
}

/* eighth DataBook */

Myimage8.addEventListener('mouseover',hoverme8)

function hoverme8() {

    showingData8.style.visibility = "visible" ;
    showingData8.style.right ="-5px" ;
    
}

Myimage8.addEventListener('mouseout',hoverout8)

function hoverout8() {

    showingData8.style.visibility = "hidden" ;
    showingData8.style.right ="40px" ;
    
}

/* nineth BookData */


Myimage9.addEventListener('mouseover',hoverme9)

function hoverme9() {

    showingData9.style.visibility = "visible" ;
    showingData9.style.right ="-5px" ;
}

Myimage9.addEventListener('mouseout',hoverout9)

function hoverout9() {

    showingData9.style.visibility = "hidden" ;
    showingData9.style.right ="40px" ;
    
}











