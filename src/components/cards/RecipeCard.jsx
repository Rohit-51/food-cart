import React from 'react'

const RecipeCard = ({recipe}) => {
  return (
    <>
        <div className='w-[200px] rounded-[8px] border-[1px] border-transparent hover:border-[1px] hover:border-[#B2BEB5] shadow-xl'>
          <div>
              <img
                className='w-[200px] h-[150px] rounded-t-[8px]' 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${recipe?.info?.cloudinaryImageId}`}
                alt='recipe-img' 
              />
          </div>
          <div className='p-2 bg-[#d7d0d030]'>
            <div className='flex justify-between items-center'>
              <span className='block overflow-hidden whitespace-nowrap text-ellipsis max-w-[90%]'>{recipe?.info?.name}</span>
              <span className='flex whitespace-nowrap'>⭐ {recipe?.info?.avgRating}</span>
            </div>
            <div className='block overflow-hidden whitespace-nowrap text-ellipsis max-w-[90%]' data-text={recipe?.info?.cuisines}>
              <span className='scrolling-text'>{recipe?.info?.cuisines}</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span>Rs 100</span>
              <span>30 min</span>
            </div>
          </div>
        </div>
    </>
  )
}

export default RecipeCard