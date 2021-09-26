// start show

    $('.show').hide();

    $('.hidden').click(function(){

        $('.show').fadeIn(1000);

        $('.welcome-lorem').fadeOut(1000);
    })

//end show

//start hover

function hover(){
    document.getElementById("butt").style.backgroundColor="#03ff7f"
}
function nohover(){
    document.getElementById("butt").style.backgroundColor= "#4fae7e00"
}

//end hover

// start display block

function disply(){

    document.querySelector('.magna .magna2').style.display= "block";
    
};

let n = 0 ;

function hovor(){
    n = n + 1;

    document.querySelector('.p').innerHTML = n;
    document.querySelector('.p1').innerHTML = n;
    document.querySelector('.p2').innerHTML = n;
    document.querySelector('.p3').innerHTML = n;
}