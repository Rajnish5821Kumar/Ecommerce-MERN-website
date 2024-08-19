import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'

const TrignleImg=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})

const TrophyImg=styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})

const Achivement = () => {
  return (
    <Card sx={{position:"relative",bgcolor:"#2F363F",color:"white"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>
                Rajnish Shop
            </Typography>
            <Typography variant='body2'>
                Congratulations 🥳
            </Typography>
            <Typography variant='h5'>100k</Typography>

            <Button size='small' variant='contained'>View Sales</Button>

            <TrignleImg src=''></TrignleImg>
            <TrophyImg src='http://pluspng.com/img-png/trophy-hd-png-trophy-free-png-image-png-808.png'></TrophyImg>
        </CardContent>
    </Card>
  )
}

export default Achivement
