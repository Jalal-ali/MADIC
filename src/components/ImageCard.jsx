import React from 'react'

const ImageCard = ({imgSrc}) => {
  return (
//   <div className="rounded-md bg-[#9147FF] w-[350px] h-[400px] overflow-hidden">
//   <img
//     src={imgSrc}
//     alt="img"
//     className="w-full h-full object-cover rounded-lg"
//   />
// </div>
 <div className="w-[350px] h-[400px] rounded-3xl bg-[#9147FF] overflow-hidden p-4">
    <img
      src={imgSrc}
      alt="Card 1"
      className="w-full h-full object-cover rounded-4xl"
    />
  </div>

  )
}

export default ImageCard