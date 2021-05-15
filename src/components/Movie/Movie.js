import React from 'react';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8) {
        return 'green';
    } else if(vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
};

const Movie = ({title, poster_path, overview, release_date, vote_average}) => {
    return(
        <div className="movie">
            <img src={poster_path ? (IMAGE_API + poster_path) : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUqGvs-Wgpbk4a8HcVMjOVeHJ7kiryV12xpX-WwjUty5NwqHlMTm4M1caosM6IYxkW9I&usqp=CAU'} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-overview">
                <h2>Overview: </h2>
                <p>{overview}</p>
            </div>
        </div>
    );
}

export default Movie;