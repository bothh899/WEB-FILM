// script.js

// Sample movie data for demonstration purposes
const movieDataPool = [
    { 
        title: 'ផែនការកម្ទេចសុខនខពិសោធន៍', 
        imageUrl: 'https://image.tmdb.org/t/p/w300/o4z5rtTS2jZgL1OaTLV0sxIyVxO.jpg', 
        link: `/movie/${encodeURIComponent('ផែនការកម្ទេចសុខនខពិសោធន៍')}.html` 
    },
    { 
        title: 'សោកនាដកម្មលើយន្តហោះ', 
        imageUrl: 'https://image.tmdb.org/t/p/original/zHoEGiZ8webTnaPlNB7DmxAJ14B.jpg', 
        link: `/movie/${encodeURIComponent('សោកនា')}.html` 
    },

    { 
        title: 'ភ្លើងស្នេហ៍ខុសជំនាន់', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcwIZmaWbYLZw6jH5GIdbYU45r1APdyb2lg&s', 
        link: `/movie/${encodeURIComponent('ភ្លើងស្នេហ៍ខុសជំនាន់')}.html` 
    },
    { 
        title: 'Memories of the Alhambra', 
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BODJhZTE2ZmMtZDdjMi00NTZlLWI1ZWYtNWY3NDhhYjc1NTU5XkEyXkFqcGc@._V1_QL75_UX582_.jpg', 
        link: `/movie/${encodeURIComponent('Memories')}.html` 
    },
    { 
        title: 'Dominion of Darkness', 
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZDhlYjhkNmYtYzIwZS00NDBlLTgwNmQtYzVkY2U0MDI2ZGFiXkEyXkFqcGc@._V1_QL75_UX796.5_.jpg', 
        link: `/movie/${encodeURIComponent('Dominion')}.html` 
    },
    { 
        title: 'មហន្តរាយធ្លាក់យន្តហោះ', 
        imageUrl: 'https://image.tmdb.org/t/p/w300/sgz16oJ5sKUGcwy96OjSrujqmuI.jpg', 
        link: `/movie/${encodeURIComponent('មហន្តរាយធ្លាក់យន្តហោះ')}.html` 
    },
    { 
        title: 'Den of Thieves 2', 
        imageUrl: 'https://i.ytimg.com/vi/rzCNYieVIQU/maxresdefault.jpg', 
        link: `/movie/${encodeURIComponent('DenofThieves')}.html` 
    },
    { 
        title: 'The Witch Part 2', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfok9qbKBq0Pu2T5uwktPQgvod2TFOAir6fg&s', 
        link: `/movie/${encodeURIComponent('TheWitch')}.html` 
    },
    { 
        title: 'LITTLE FOREST 2020', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Y6C2lrUZOrhY3AEKbjqP0fhfqxWGAmDIlQ&s', 
        link: `/movie/${encodeURIComponent('LITTLEFOREST')}.html` 
    },
    { 
        title: 'Operation Undead', 
        imageUrl: 'https://image.tmdb.org/t/p/original/elxYvqymNurnpUJmlEgoDGogXwq.jpg', 
        link: `/movie/${encodeURIComponent('កោះទាហានខ្មោចឆៅ')}.html` 
    },
    { 
        title: 'Push', 
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTk0MjI0ODAyMV5BMl5BanBnXkFtZTcwOTU0ODIzMw@@._V1_QL75_UX492_.jpg', 
        link: `/movie/${encodeURIComponent('Push')}.html` 
    },
    { 
        title: 'បងប្អូនសង្ហាកំពូលស៊យ', 
        imageUrl: 'https://image.tmdb.org/t/p/original/2AxzcOOVnRB07iHbxXSnq4zqOD6.jpg', 
        link: `/movie/${encodeURIComponent('បងប្អូនសង្ហាកំពូលស៊យ')}.html` 
    },
    { 
        title: 'កូនទានាំស្នេហ៍', 
        imageUrl: 'https://image.tmdb.org/t/p/original/rbYJTwO4lufOxsHwUDQ7YNwHpOA.jpg', 
        link: `/movie/${encodeURIComponent('កូនទានាំស្នេហ៍')}.html` 
    },
   
    { 
        title: 'IGH FORCES Starring Andy Lau', 
        imageUrl: 'https://image.tmdb.org/t/p/original/8lqfrOBQ2EcY7znD3LxTYcvlh25.jpg', 
        link: `/movie/${encodeURIComponent('សង្គ្រោះចំណាប់ខ្មាំងលើយន្តហោះ')}.html` ,
    },
    { 
        title: 'Who Am I?', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDDkTWa_ePWeF1VEb1yFiIV1vPVDMIhiS-Zm8EFGdH4K0qFz7AgsCsYxBmO5YnrLn6OmE&usqp=CAU', 
        link: `/movie/${encodeURIComponent('WhoAmI')}.html` ,
    },
    { 
        title: 'Men In Black III', 
        imageUrl: 'https://reviewsfromthedisc.wordpress.com/wp-content/uploads/2013/07/men-in-black-3-poster.jpg', 
        link: `/movie/${encodeURIComponent('meninblack')}.html` ,
    },
    { 
        title: 'Hostage: Missing Celebrity', 
        imageUrl: 'https://image.tmdb.org/t/p/original/v4KKJ57xOIUJBA3a8ZN7Eeo2HrG.jpg', 
        link: `/movie/${encodeURIComponent('ចាប់ជំរិតតារាល្បី')}.html` ,
    },
    { 
        title: 'TAROT', 
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BYTNhMmE2YjgtZDQxMy00NzBjLWFjOTQtODY1ZjI2MWM5ZTY5XkEyXkFqcGc@._V1_QL75_UX582_.jpg', 
        link: `/movie/${encodeURIComponent('Tarot')}.html` ,
    },
    
    //     title: '', 
    //     imageUrl: '', 
    //     link: `/movie/${encodeURIComponent('')}.html` ,
    // },


];

// Function to fetch a unique random set of movies
function getRandomMovieSet(num) {
    const shuffledMovies = [...movieDataPool].sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffledMovies.slice(0, num); // Get the first 'num' elements
}

// Function to create movie cards dynamically
function createMovieCards() {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = ''; // Clear existing content

    const randomMovies = getRandomMovieSet(15); // Get a random set of 14 unique movies

    randomMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImage = document.createElement('div');
        movieImage.classList.add('movie-image');
        movieImage.onclick = () => window.location.href = movie.link;

        const img = document.createElement('img');
        img.src = movie.imageUrl;
        img.alt = 'Movie Poster';
        movieImage.appendChild(img);

        const movieTitle = document.createElement('div');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = movie.title;

        movieContainer.appendChild(movieImage);
        movieContainer.appendChild(movieTitle);
        movieCard.appendChild(movieContainer);
        movieGrid.appendChild(movieCard);
    });
}
 
// Call the function to create movie cards when the page loads
document.addEventListener('DOMContentLoaded', createMovieCards);
