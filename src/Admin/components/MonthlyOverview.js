import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesData=[
    {
        stats:'50k',
        tittle:"Sales",
        color:"#E5D68A",
        icon:<TrendingUpIcon sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'10k',
        tittle:"Customers",
        color:"#22CB5C",
        icon:<AccountCircleIcon sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'1k',
        tittle:"products",
        color:"#DE4839",
        icon:<SettingsCellIcon sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'30k',
        tittle:"Revenue",
        color:"#12B0E8",
        icon:<AttachMoneyIcon sx={{fontSize:"1.75rem"}}/>
    }
]

const renderStats=()=>{
    return salesData.map((item,index)=>(
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{display:"flex",alignItems:'center'}}>
                <Avatar variant='rounded' sx={{
                    mr:3,
                    width:44,
                    height:44,
                    boxShadow:3,
                    color:"white",
                    background:`${item.color}`
                }}>
                    {item.icon}
                </Avatar>

                <Box sx={{display:'flex',flexDirection:'column'}}>

                    <Typography variant='caption'>{item.tittle}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>

                </Box>
            </Box>

        </Grid>

    ))
}

const MonthlyOverview = () => {
  return (
   <Card sx={{bgcolor:"#2F363F",color:"white"}}>
    <CardHeader title="Monthly Overview"
    action={
        <IconButton size='small'>
            <MoreVertIcon/>
        </IconButton>
    } 
    subheader={
        <Typography variant='body2'>
            <Box component="span" sx={{fontWeight:600}}>Total 50% groth
            </Box>
            🥳 this month
        </Typography>
    }
    titleTypographyProps={{
        sx:{
            mb:2.5,
            lineHeight:'2rem !important',
            letterSpacing:'.15px !important'
        }
    }}
    />
    <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
        <Grid container spacing={[5,0]}>
            {renderStats()}
        </Grid>
    </CardContent>
   </Card>
  )
}

export default MonthlyOverview
