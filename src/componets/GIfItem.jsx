import PropTypes from "prop-types";
import React from 'react';

export const GifItem = ({title, url,id}) => {

  
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
        <p>Hola Jonas</p>
    </div>
  )
}

GifItem.proptypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}


