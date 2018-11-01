function print(text)  { document.write(text); }
function println(text){ document.write("<br>" + text); }  

var people, summ, home, eatAll, drink1, drink2, drink3, drink;

var men,wom,mon,hom,homd,eat,eatP,dri1,dri2,dri3,dri21,dri22,dri23,dri31,dri32,dri33;

        

function bodyColor(){
    var col = prompt("Ввод цвета body по кодировке #0000 или английским названием!");
    $("body").css("background", col);
}
         
function userName(){
   var uName = prompt("Как вас звать?");
    if(uName){
        $("#hdOne").text("Приветствую, " + uName + "!");
    }else{ 
        $("#hdOne").text("ВВЕСТИ ИМЯ");
    }
}     
         
function hideMenu(){
    $("#headMenu").slideUp(600, function(){
        $("#hide").hide(300);
        $("#show").show(300);
    });
}
         
function showMenu(){
    $("#headMenu").slideDown(600, function(){
        $("#show").hide(300);
        $("#hide").show(300);
    });
}
         
$(document).ready(function(){
    showMenu();
    
    
    $("#hdOne").show(400);
    $("#hdTwo").show(600);
    $("#hdThr").show(800);
    
    $("#hide").bind("click", hideMenu);
    $("#show").bind("click", showMenu);
    
    $(".part1").bind("click", bodyColor);

    $(".part4").bind("click", function(){
        alert("ТЫ ЧО ДУРАК!? ОН КОЛЬЯН КУРИТ! ЕМУ НЕКОГДА С НАМИ ТУСИТЬ!")
    });
    
    $(".part5").bind("click", function(){
        $('#muztext').slideDown(1000);
    });
    
    $(".part3").bind("click", function(){
        $(".cols.col-8").css("background", "white").css("color", "black");
        $(".engineSys").slideDown(600);
    });
    
     $("#hdTwo").bind("click", function(){
       $("#regform").show(500); 
    });
    
    $(".regBut").bind("click", function(){
       $("#regform").hide(600); 
        
        alert("НА ДАННЫЙ МОМЕНТ ВЫ НЕ ЧЛЕН ОБЩЕСТВА НОВОГОДНЕГО ВЕСЕЛЬЯ!\n ОБРАТИТЕСЬ К АДМИНИСТРАЦИИ ТОРЖЕСТВА!\n ");
    });
    
    $("#inBut").bind("click", function(){
        
        /*men = document.getElementById('a').innerHTML;
        wom = document.getElementById('b').innerHTML;
        mon = document.getElementById('c').innerHTML;
        hom = document.getElementById('d').innerHTML;
         homd = document.getElementById('dd').innerHTML;
        eat = document.getElementById('e').innerHTML;
         eatP = document.getElementById('ee').innerHTML;
        dri1 = document.getElementById('f').innerHTML;
         dri2 = document.getElementById('ff').innerHTML;
         dri3 = document.getElementById('fff').innerHTML;
        dri21 = document.getElementById('g').innerHTML;
         dri22 =document.getElementById('gg').innerHTML;
         dri23 = document.getElementById('ggg').innerHTML;
        dri31 = document.getElementById('h').innerHTML;
         dri32 = document.getElementById('hh').innerHTML;
         dri33 = document.getElementById('hhh').innerHTML;*/
        
        
        men = Number.parseInt($("#a").val());
        wom = Number.parseInt($("#b").val());
        mon = Number.parseInt($("#c").val());
        hom = Number.parseInt($("#d").val());
        homd = Number.parseInt($("#dd").val());
        eat = Number.parseInt($("#e").val());
        eatP = Number.parseInt($("#ee").val());
        dri1 = Number.parseInt($("#f").val());
        dri2 = Number.parseInt($("#ff").val());
        dri3 = Number.parseInt($("#fff").val());
        dri21 = Number.parseInt($("#g").val());
        dri22 = Number.parseInt($("#gg").val());
        dri23 = Number.parseInt($("#ggg").val());
        dri31 = Number.parseInt($("#h").val());
        dri32 = Number.parseInt($("#hh").val());
        dri33 = Number.parseInt($("#hhh").val());
        
         people =  men +  wom;
         summ = people * mon;
         home = hom * homd;
         eatAll = eat * eatP;
         drink1 = dri1 * dri2;
         drink2 = dri22 * dri23;
         drink3 = dri32 * dri33;
         drink = drink1+drink2;
        
       $(".cols.col-7").show(500);
        
    });
    
    $("#outBut").bind("click", function(){
        $(".cols.col-7").hide(500);
    });
});























