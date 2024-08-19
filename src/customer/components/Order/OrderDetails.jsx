import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid} from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarIcon from '@mui/icons-material/Star';


const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard/>
        </div>

        <div className='py-20'>
            <OrderTraker activeStep={3}/>
        </div>

        <Grid className='space-y-5' container>

            {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}>

<Grid item xs={6}>

    <div className='flex items-center space-x-4'>
        <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://m.media-amazon.com/images/I/51oe3wyzL8L._SY550_.jpg' alt='' />

        <div className='space-y-2 ml-5'>
            <p className='font-bold'>Brand: TAGAS</p>
            <p className='font-semibold'>TAGAS Men Jeans</p>
            <p> ₹699</p>
            <p>Seller:linaria</p>
            <span>
            <p>Color:Black</p>
            <p>Size:36</p> 
            </span>
        </div>
    </div>

</Grid>

<Grid item>

    <Box sx={{color:deepPurple[500]}}>
        <StarIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
        <span>Rate & Review Product</span>

    </Box>

    <Grid>

    </Grid>

</Grid>

</Grid>)}

            {/* <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}>

                <Grid item xs={6}>

                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://m.media-amazon.com/images/I/51oe3wyzL8L._SY550_.jpg' alt='' />

                        <div className='space-y-2 ml-5'>
                            <p className='font-bold'>Brand: TAGAS</p>
                            <p className='font-semibold'>TAGAS Men Jeans</p>
                            <p> ₹699</p>
                            <p>Seller:linaria</p>
                            <span>
                            <p>Color:Black</p>
                            <p>Size:36</p> 
                            </span>
                        </div>
                    </div>

                </Grid>

                <Grid item>

                    <Box sx={{color:deepPurple[500]}}>
                        <StarIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
                        <span>Rate & Review Product</span>

                    </Box>

                    <Grid>

                    </Grid>

                </Grid>

            </Grid> */}

        </Grid>

    </div>
  )
}

export default OrderDetails
