import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";

const RecipeMenu = () => {
    const [restaurantData, setRestaurantData] = useState("");
    const [showRecipesList, setShowRecipesList] = useState(false);
    const [showRecipeIndex, setShowRecipeIndex] = useState('');
    const {resId} = useParams();
    console.log("params", resId)
    

    useEffect(() => {
        fetchRestaurantMenuData();
    }, []);

    const fetchRestaurantMenuData = async () => {
        try {
            const rawResult = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
            console.log("rawResult", rawResult)
            if(rawResult?.ok) {
                const result = await rawResult?.json();
                console.log("result", result)
                const resInfoData = result?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => (c.card?.['card']?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
                setRestaurantData(resInfoData)
            }
        } catch (error) {
            console.log("error", error)
        }

    }
console.log("restaurantData>>>>>>>>", restaurantData)
    // const {itemCards} = restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.card?.card;
    // console.log("resInfo", {restaurantData, itemCards})

  return (
    <div className='flex flex-col justify-center items-center gap-4 mt-4'>
        {
            restaurantData && restaurantData?.map((item, index) => (
                <RecipeMenuCard 
                    data={item?.card?.card} 
                    key={index} 
                    showRecipesList={index === showRecipeIndex && showRecipesList}
                    setShowRecipesList={() => {setShowRecipesList(prev => !prev); setShowRecipeIndex(index)}}
                />
            ))
        }
    </div>
  )
}

export default RecipeMenu;

const RecipeMenuCard = ({data, showRecipesList, setShowRecipesList}) => {
    return (
        <div className='w-[500px] p-4 border-[1px] border-[#B2BEB5] rounded-[8px] text-[#000] font-bold'>
            <div 
                className='flex justify-between items-center cursor-pointer'
                    onClick={setShowRecipesList}
            >
                <div className=''>{data?.title} {`(${data?.itemCards?.length})`}</div>
                <div 
                    className={`${showRecipesList ? 'rotate-180' : ""}`}
                >
                    <IoMdArrowDropdown size={20}/>
                </div>
            </div>
            {showRecipesList && <div className='flex flex-col justify-center items-center gap-5 '>
                {
                    data.itemCards?.map((item, _) => (
                        <RecipeList listInfo={item?.card?.info}  key={item?.card?.info?.id} />
                    ))
                }
            </div>}
        </div>
    )
};

const RecipeList = ({listInfo}) => {
    return (
        <div className='w-full flex justify-between items-center gap-5 border-b border-b-[#B2BEB5] p-4'>
            <div className='font-normal w-9/12'>
                <p>{listInfo?.name}</p>
                <p>Rs {(listInfo?.price || listInfo?.defaultPrice) /100}</p>
                <p>{listInfo?.description}</p>
            </div>
            <div className='3/12'>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${listInfo?.imageId}`} alt='recipeImg' className='w-[100px] h-[100px]' />
            </div>
        </div>
    )
}