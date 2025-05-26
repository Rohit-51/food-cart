import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
	const {cart:cartData, totalPrice} = useSelector(state => state.cart);
	console.log("cartData", cartData,  totalPrice)
  return (
    <div>
		{
			cartData?.map((item) => (
				<div key={item?.id} className='w-full flex justify-between items-center gap-5 border-b border-b-[#B2BEB5] p-4'>
					<div className='font-normal w-9/12'>
						<p>{item?.name}</p>
						<p>Rs {item?.price * item?.quantity}</p>
						<p>Qnt. {item?.quantity}</p>
					</div>
					<div className='3/12'>
						<img src={item?.imageSrc} alt='recipeImg' className='w-[100px] h-[100px]' />
					</div>
				</div>
			))
		}
    </div>
  )
}

export default Cart