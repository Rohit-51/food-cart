import React from 'react'

const recipeCardHoc = (CardComponent) => {
    return (props) => {

        return (
          <div className='relative'>
            <span className='absolute text-white bg-[#000] px-2 py-1'>permoted</span>
            <CardComponent {...props} />
          </div>
        )
    }
}

export default recipeCardHoc