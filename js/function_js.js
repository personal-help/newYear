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
    $("#headMenu").hide(800, function(){
        $("#hide").hide(300);
        $("#show").show(300);
    });
}
         
function showMenu(){
    $("#headMenu").show(800, function(){
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
    
    $(".part3").bind("click", calculate);
    $(".part4").bind("click", function(){
        alert("ТЫ ЧО ДУРАК!? ОН КОЛЬЯН КУРИТ! ЕМУ НЕКОГДА С НАМИ ТУСИТЬ!")
    });
    
    $(".part5").bind("click", function(){
        $('#muztext').slideDown(1000);
    });
});

function calculate(){
    var number = prompt("Количество участников торжества");
    var summ = number * prompt("Взнос каждого участника");
    if(!summ || summ<3000){
        alert("ЭТО НЕ ДЕНЬГИ");
     }else{
    
        if(summ>60000){
            alert("БЮДЖЕТ СОСТАВЛЯЕТ " + summ+ "\n\n" + "СОЛИДНАЯ СУММА!");
        }else alert("БЮДЖЕТ СОСТАВЛЯЕТ " + summ+ "\n\n" + "НА СОК И ЧИПСЫ ХВАТИТ!");
    
        var house = prompt("ЦЕНА ЖИЛЬЯ");
    
        if(summ<house){ 
            alert("ВЫ СТОЛЬКО ДАЖЕ НЕ СОБРАЛИ! ТАК ЧТО С ЛЁХОЙ КЛЕНИНЫМ ОТПРАЗНУЕТЕ!");
        }else 
            alert("МОЖНО И БАБ ПОЗВАТЬ");
   
     }
}






















