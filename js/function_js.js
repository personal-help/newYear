function print(text)  { document.write(text); }
function println(text){ document.write("<br>" + text); }   

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
        
        var men = $(".a").val();
       var wom = $(".b").val();
       var mon = $(".c").val();
       var hom = $(".d").val();
        var homd = $(".dd").val();
       var eat = $(".e").val();
        var eatP = $(".ee").val();
       var dri1 = $(".f").val();
        var dri2 = $(".ff").val();
        var dri3 = $(".fff").val();
       var dri21 = $(".g").val();
        var dri22 = $(".g").val();
        var dri23 = $(".g").val();
       var dri31 = $(".h").val();
        var dri32 = $(".h").val();
        var dri33 = $(".h").val();
        
        var people = men + wom;
        var summ = people * mon;
        var home = hom * homd;
        var eatAll = eat * eatP;
        var drink1 = dri1 * dri2;
        var drink2 = dri22 * dri23;
        var drink3 = dri32 * dri33;
        var drink = drink1+drink2;

          /*alert("Количество участников " + people + "\n" 
                +"Общий фонд "+ summ+"\n"
                +"Жильё обойдётся в "+ home +"\n"
                +"Хавчика на "+ eatAll +"\n"
                +"Сушняка на "+ drink3 +"\n"
                +"Бухла на "+ drink);*/
        
       $(".cols.col-7").show(500);
        
    });
    
    $("#outBut").bind("click", function(){
        $(".cols.col-7").hide(500);
    });
});























