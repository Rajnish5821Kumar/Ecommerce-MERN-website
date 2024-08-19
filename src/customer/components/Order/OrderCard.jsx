import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

        <Grid item xs={6}>

            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://m.media-amazon.com/images/I/71aQ6RzfQzL._SY550_.jpg' alt='' />
                <div className='ml-5 space-y-2'>

                    <p className='font-bold'>Brand: Pepe Jeans</p>
                    <p className='font-semibold'>Pepe Jeans Men Regular Fit Jeans</p>
                    <p className='opacity-50 text-xs'>Size:36</p>
                    <p className='opacity-50 text-xs'>Color:Blue</p>
                </div>
            </div>

        </Grid>

        <Grid item xs={2}>
            <p> ₹1,187</p>
        </Grid>

        <Grid item xs={4}>
            <p>
                <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                <span>
                    Delivered On June 23
                </span>
                <p className='text-xs'>Your Item Has Been Delivered</p>
            </p>
        </Grid>

      </Grid>
    </div>
  )
}

export default OrderCard
