let l1 = document.querySelector('#lightbulb1');
let l2 = document.querySelector('#lightbulb2');
let l3 = document.querySelector('#lightbulb3');
let subtitle = document.querySelector('.subtitle');
let bulb;
let counter = 0

function changeState (bulb){
    console.log('workin');
    const list = bulb.classList;
    console.log(list);
    list.toggle("active");
    counter = counter + 1;
    subtitle.innerHTML = "You've clicked the lights " + counter + " times";
}

l1.addEventListener('click', function(){changeState(l1)});
l2.addEventListener('click', function(){changeState(l2)});
l3.addEventListener('click', function(){changeState(l3)});