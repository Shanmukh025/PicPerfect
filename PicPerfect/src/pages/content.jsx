import React from 'react'

const Content = () => {
  const images=[
    {'url': 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg'},
    {'url':'https://cdn.pixabay.com/photo/2023/09/26/06/45/bride-8276620_1280.jpg'},
    {'url':'https://cdn.pixabay.com/photo/2023/10/17/06/38/wind-chimes-8320493_640.jpg'},
    {'url':'https://cdn.pixabay.com/photo/2023/09/12/18/33/jackdaw-8249384_640.jpg'},
    {'url':'https://cdn.pixabay.com/photo/2023/10/16/10/51/fox-8318961_640.png'},
    {'url':'https://cdn.pixabay.com/photo/2023/10/17/10/32/building-8320842_640.png'},
    {'url':'https://cdn.pixabay.com/photo/2023/09/14/19/46/elephant-8253639_640.jpg'},
    {'url':'https://cdn.pixabay.com/photo/2023/09/09/08/31/woman-8242672_640.jpg'},
    {'url':'https://cdn.pixabay.com/photo/2023/10/01/19/14/oranges-8287967_640.jpg'},
    {'url':'https://cdn.pixabay.com/photo/2023/10/20/20/53/pears-8330221_640.jpg'},
    {'url':'https://cdn.pixabay.com/photo/2023/10/13/22/13/window-8313576_640.jpg'},
    {'url':'https://cdn.pixabay.com/photo/2023/09/25/00/01/dog-8273965_640.jpg'}
  ]
  return (
    <>
      <div className="content-container">
        <h1>Gallery</h1>
        <div className="content-image">
          {
            images.map((element, index)=>{
              return(<img key={index} src={element.url} />)
            })
          }
        </div>
      </div>
    </>
  )
}

export default Content