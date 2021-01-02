import React from "react";
import PropTypes from "prop-types";

// have not state
function Movie({id, year, title, summary, poster}){
    return <h5>{title}</h5>
}

//define props
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };

export default Movie;