let ant1
let ant2
let ant3
let ant4

let add1
let add2
let add3
let add4

let summ


ant1 = prompt ("самый глубокий океан 1-Тихий 2-Индийский 3-Атлантический 4 Северный Ледовитый")

if (ant1 ==1) add1 =1;

else add1=0;

if (add1==1) alert ('правильно, ты заработал 1 бал')

else alert ('не правильно, получи 0')



ant2 = prompt ('восточная точка России 1-мыс Челюскин 2-мыс Дежнева 3-Балтийская коса 4-Кушка');

if (ant2 ==2) add2 =2;

else add2=0;

if (add1+add2==3) alert ('правильно, у тебя уже 3 бала');

else if (add1+add2==2)alert ('а вот теперь верно,держи 2 бала');

else alert('не правильно, езжай на Чукотку!')


ant3 = prompt ("сколько регионов в РФ 1-33 2- 89 3- 100 4-85");

if (ant3 ==4) add3 =3;

else add3 =0;

if (add1+add2+add3==6) alert ('Молодец! уже 6 балов');

else if (add1+add2+add3==5) alert (' с сушей у тебя лучше чем с морем, садись 5');

else if (add1+add2+add3<5  && add3 != 3) alert ('плоховато отвечаешь, посмотри на карту');

else if (add1+add2+add3<5 && add3==3) alert ('ну наконец-то! держи 3 бала за этот вопрос');


ant4 = prompt ("столица России 1-Воронеж 2-Фрязино 3-Москва 4-Данков");

if (ant4 ==3) add4 =4;

else add4 =0;


summ =(add1+add2+add3+add4);

if (summ >= 8 ) alert (`Молодец, ты знаток географии, получил ${summ} балов`);
else alert(`подучи географию, всего ${summ} балов`)



// if (summ ==10) alert ("все верно");

// else if ( 6 <= summ <=9 ) alert ("почти молодец!");

// else if (5 <= summ <=4) alert ("подучи географию!");

// else alert ("покупай карту");













