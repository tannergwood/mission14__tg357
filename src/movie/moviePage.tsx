import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MovieTable() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
      console.log(movieData);
    };

    fetchMovie();
  }, []);

  return (
    <>
      <div className="row">
        <h1>&nbsp;My Movie Collection</h1>
      </div>
      {/* Heres the table that has all of the movie information */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Movie ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((q) => (
            <tr key={q.movieId}>
              <td>{q.movieId}</td>
              <td>{q.title}</td>
              <td>{q.category}</td>
              <td>{q.year}</td>
              <td>{q.director}</td>
              <td>{q.rating}</td>
              <td>{q.edited}</td>
              <td>{q.lentTo}</td>
              <td>{q.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieTable;
