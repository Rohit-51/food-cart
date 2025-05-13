import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const RecipeMenu = () => {
    const [restaurantData, setRestaurantData] = useState("");
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
            }
        } catch (error) {
            console.log("error", error)
        }

    }

  return (
    <div>RecipeMenu</div>
  )
}

export default RecipeMenu