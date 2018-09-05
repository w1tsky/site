function f1()
{
    for (var i = 0; i < document.all.length; i++) 
    { 
        alert("Тег " + (i + 1) + " - " + document.all[i].tagName ); //какого нельзя через документ,вр
    }
}


function f2()
{
    //Вывести все дочерние элементы узла document.body своей первой web-страницы.
    for(var i=1; i<document.body.childNodes.length; i++) {
        var child = document.body.childNodes[i];
        var a=(child.tagName);
        if (a!=undefined){
            alert(a)
        }
    }
}

 function f3a()
 {
    /* for (i=0; i <= document.all.length; i++)
    {
        if (document.all[i] instanceof HTMLSpanElement)
        {
            break;
        }
    }*/
    var elements = document.querySelectorAll('span:first-child'); 
    for (var i = 0; i < 1; i++) { 
        alert( elements[0].innerHTML ); // "тест", "пройден" 
    } 
}

 function f3b()
 
{
alert (document.getElementsByTagName('span')[0].textContent);

}


 function f3c()
 
{
alert (document.getElementById('s1').innerHTML);

}

function f4()
{
    /*Задание 4. Организовать доступ к содержимому таблицы и по-считать свой средний балл. Добавить значение среднего балла к со-держимому второго элемента span*/

         var sum = 0;
            var tds = document.getElementsByTagName('td');
            for (var i = 10; i <= tds.length; i += 3) {
                sum += parseInt(tds[i].innerHTML);
            }
            alert("sr=" + sum / 5);
            alert(document.getElementsByTagName('span')[1].textContent+=sum/5);      
}

