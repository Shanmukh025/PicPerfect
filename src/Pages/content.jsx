import React from 'react'

const Content = () => {
  const images=[
    {'url':'https://cdn.pixabay.com/photo/2023/10/20/10/41/man-8329151_640.jpg'},
    {'url':'https://cdn.pixabay.com/photo/2023/10/13/22/13/window-8313576_640.jpg'},
    {'url':'https://cdn.pixabay.com/photo/2023/09/25/00/01/dog-8273965_640.jpg'},
    {'url':'https://cdn.pixabay.com/photo/2023/09/12/18/33/jackdaw-8249384_640.jpg'},
    {'url':'https://cdn.pixabay.com/photo/2023/10/17/06/38/wind-chimes-8320493_640.jpg'},
    {'url':'https://cdn.pixabay.com/photo/2023/10/16/10/51/fox-8318961_640.png'},
    {'url':'https://cdn.pixabay.com/photo/2023/10/17/10/32/building-8320842_640.png'},
    {'url':''},
    {'url':''},
    {'url':''},
    {'url':''},
  ]
  return (
    <>
      <div className="content-container">
        <h1>Our Gallery</h1>
        <div className="content-image">
        </div>
      </div>
    </>
  )
}

export default Content