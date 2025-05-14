import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/cards/RecipeCard';
import { cardsUrl } from '../../constants';
import useFetchApi from '../utils/hooks/useFetchApi';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';
import { Link } from 'react-router-dom';
import recipeCardHoc from '../utils/hooks/HOC/recipeCardHoc';


const Home = () => {
    const [searchText, setSearchText] =  useState("");
    const [recipiesData, setRecipiesData] = useState([]);
    const [filterRecipes, setFilterRecipes] = useState([]);
    const {data, loading, error} = useFetchApi({apiUrl:cardsUrl});
    const onlineStatus = useOnlineStatus();

    const PermotedRecipeCard = recipeCardHoc(RecipeCard)
  
    useEffect(() => {
      // const fetchRecipiesData = async () => {
      //   const rawData = await fetch(cardsUrl);
      //   console.log("raw result ", rawData)
      //   if(rawData?.status === 200) {
      //     const data = await rawData.json();
      //     // console.log("data", data)
          
      //   }
  
      // };
  
      //  fetchRecipiesData();
       if(data) {
           console.log("data", data)
        setRecipiesData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRecipes(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       }
    }, [data]);
    useEffect(() => {

        const scrollTop =  window.scrollY;
        const windowHeight = window.innerHeight;
        const pageHeight = document.body.scrollHeight;
        console.log("window scroll - ", scrollTop, windowHeight, pageHeight)

        const handleScroll = () => {
            console.log("scroll")
        }

        window.addEventListener('scroll', handleScroll);

        return  () => window.removeEventListener('scroll', handleScroll);
    }, [])

    // console.log("recipeData", recipiesData)
    
    if(!onlineStatus) {
        return (
            <h1>Please Check Your Internet Connection!</h1>
        )
    }
  
    const searchHanlder = () => {
      const filteredRecipesResult = recipiesData?.filter(item => item?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
      setFilterRecipes(filteredRecipesResult);
    }

    // console.log("recipeData", recipiesData)
    return (
        <>
            <div className='flex justify-center items-center my-[10px] '>
                <input 
                type='text' 
                value={searchText} 
                onChange={(e) => {setSearchText(e.target.value)}} 
                className='border-[1px] border-black rounded-[8px] rounded-r-[0px] p-[10px]' 
                />
                <button 
                className='search-btn border-[1px] border-l-0 border-black rounded-r-[8px] p-[10px] bg-cyan-500 text-white cursor-pointer'
                onClick={searchHanlder}
                >
                search
                </button>
            </div>
            <div className='flex justify-center items-center gap-[20px] flex-wrap'>
                {filterRecipes?.map((item, index) => (
                <Link to={`/restaurant/${item?.info?.id}`} key={item?.info?.id}>
                    {console.log("item", item?.info?.permoted)}
                    {item?.info?.permoted ? <PermotedRecipeCard recipe={item} /> : <RecipeCard recipe={item} /> }
                </Link>
                ))}
            </div>
        </>
    )
}

export default Home;