import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ShowString{
    show: {
        id: number, 
        url: string,
        name: string
    },
}

const ListMovieApi = () => {
    const [movies, setMovies] = useState<ShowString[]>([])

    useEffect( () => {
        axios.get("http://api.tvmaze.com/search/shows?q=star%20wars").then(response => {

            setMovies(response.data)
        })
    }, [])

    return(
        <div id="page-content">
            <div className="page-container">
                <h1>Listing Movies Star Wars</h1>
                {movies.map(movie => (
                    <ul key={movie.show.id}>
                        <h2>
                            <strong>Title: </strong>
                            {movie.show.name}
                        </h2>
                        <p>Url: {movie.show.url}</p>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default ListMovieApi;