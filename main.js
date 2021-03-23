//Задание 1

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};
let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
let filmRating = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = filmRating;

console.log(personalMovieDB);


//Задание 2

/*
let numberOfFilms;

do {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
} while (numberOfFilms === 0);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

let lastFilm;

do {
    lastFilm = prompt('Один из последних просмотренных фильмов?', '');
} while (lastFilm === null || lastFilm === '' || lastFilm.length > 10);

let filmRating;

do {
    filmRating = prompt('На сколько оцените его?', '');
} while (filmRating === null || filmRating === '');

personalMovieDB.movies[lastFilm] = +filmRating;

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}*/
