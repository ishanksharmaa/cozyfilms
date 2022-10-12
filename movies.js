const next = document.querySelectorAll('.next');
const prev = document.querySelectorAll('.prev');
let movieLists = document.querySelectorAll('.movie-list');
let itemNumber;

//SLIDER JS FOR NEXT BUTTON
var i = 0;
next.forEach((next, i) => {
    clickCounter = 0; // if var type is declared then it would forgot it's value.
    next.addEventListener("click", () => {
        clickCounter++;
        clickCounter2--;
        itemNumber = movieLists[i].querySelectorAll("img").length;
        if (itemNumber - (3 + clickCounter) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 380
                }px)`;
            // clickCounts = clickCounter; // clickCounts have global scope coz var type not declared.
        }
        /* else if (itemNumber - (3 + clickCounter) == 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
                }px)`;
            clickCounterMax = clickCounter; //saved when counter at its maximum position
        } */    //no need to translate 300px just translate 380px as usual.
        else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
            clickCounter2 = 0;
        }
    });     // EventListner Ending

    console.log(movieLists[i].querySelectorAll("img").length);
});         // ForEach Ending

// SLIDER JS FOR PREVIOUS BUTTON
prev.forEach((prev, i) => {
    itemNumber = movieLists[i].querySelectorAll("img").length;
    clickCounter2 = 0;
    prev.addEventListener("click", () => {
        clickCounter2++;
        clickCounter--;
        if (clickCounter2 <= clickCounter) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value + 380
                }px)`;
        }
        else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter2 = 0;
            clickCounter = 0;
        }
    });     // EventListner Ending

});         // ForEach Ending

let save;
let img;
let newShow = document.querySelector('.new-show');
function addShow() {
    img = '<span class="new-show"><div class="movie-items"><img class="photo" src="mr-robot.jpg" alt=""><div class="details"><form id="frm"><input class="title" type="text"></form><p class="desc">Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.</p><button class="button">Watch Trailer</button><button class="save-btn" onclick="autoSubmit()">save</button></div></span>'
    movieLists.innerHTML += img;
    var last = movieLists.lastChild;
    movieLists.insertBefore(last, movieLists.children[itemNumber]);
    console.log(movieLists[i].querySelectorAll("img").length);
}
function autoSubmit() {
    // newShow.addEventListener('click', function (event) {
    save = document.querySelector('.save-btn');
    save.remove();
    localStorage.setItem('saving', JSON.stringify(img));
    newShow.outerHTML = newShow.innerHTML;
    // }, false);
}

var saved = JSON.parse(localStorage.getItem('saving'));
if (saved) {
    movieLists.innerHTML += saved;
    var change = movieLists.lastChild;
    movieLists.insertBefore(change, movieLists.children[itemNumber]);
}

//  ANIMATION, SOUNDS, SEARCH, ETC.

// SETS SOME ABOUT OF TIME FOR LOADING ANOTHER PAGE
function time() {
    setTimeout(function () {
    }, 5000);
}

// STARTING ANIMATION WHEN ANOTHER PAGE IS ABOUT TO LOAD
function start() {
    var x = document.getElementById("ani");
    x.classList.remove("opening");
    x.classList.add("animate");
}

// PLAYING SOUND (DARK MATTER)
function sound() {
    setInterval(function remove() {
        document.getElementById("myaudio").remove();
    }, 2500);
    document.getElementById("matter").play();
}

// JUMP ON FAVORITES PAGE
function fav(){
    window.location.href = "favorites.html"
}

// SHOWS SEARCH BAR (INPUT)
function searching() {
    document.getElementById('input').classList.remove('candycons');
    document.getElementById('search').classList.add('search-after');
    document.getElementById('input').classList.remove('input-before');
    document.getElementById('input').classList.add('input-after');
}

// REMOVES SEARCH BAR (INPUT)
concon = document.querySelectorAll('.content-container'); //concon means content-container it's just a var.
concon.forEach(function (concons) {
    concons.onclick = function searchrev() {
        document.getElementById('input').classList.add('candycons');
        document.getElementById('search').classList.remove('search-after');
        document.getElementById('input').classList.add('input-before');
        document.getElementById('input').classList.remove('input-after');
    }
});

// SEARCH BY ENTER KEY
function handle() {
    const input = document.getElementById('input');
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            document.getElementById('input').submit();
        }
    });
}

function caret(){
    document.body.classList.toggle('caret-up');
    if(document.body.classList.contains('caret-up')){
        document.getElementById('caret').className = "fa-solid fa-caret-up";
    }
    else{
        document.getElementById('caret').className = "fa-solid fa-caret-down";
    }
}

function mode() {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        document.getElementById('mode').className = "fa-solid fa-sun";
    }
    else {
        document.getElementById('mode').className = "fa-solid fa-moon";
    }
}
// CAN ADD SOME MORE JS WHEN REQUIRED.