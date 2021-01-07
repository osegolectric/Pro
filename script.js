const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt ('Один из просмотренных фильмов?', ''),
      b = prompt ('На сколько оцените его?', ''),
      c = prompt ('Один из просмотренных фильмов?', ''),
      d = prompt ('На сколько оцените его?', '');

personalMoviesDB.movies[a]  = b;
personalMoviesDB.movies[c]  = d;   

console.log (personalMoviesDB); 



let num = 50;

while (num <= 55) {
    console.log (num);
     num++;
}

// do {
//     console.log (num);
//     num++;        
//     }
// while (num <= 105); 

for (let i = 1; i < 10; i++) {
    console.log (i);
}
