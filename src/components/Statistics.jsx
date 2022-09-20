import React from 'react'

const Statistics = ({imageUrl, title, content}) => {
  return (
    <div className='statistics-card'>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Statistics