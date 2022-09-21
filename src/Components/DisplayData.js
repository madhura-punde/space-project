import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardSection from './CardSection'
import Filter from './Filter'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../Redux/apiSlice'

function DisaplayData() {

    const [spaceData, setSpaceData] = useState([])

    const dispatch = useDispatch()
  
      useEffect(()=>{
    
          // dispatch(fetchData())
          axios
          .get('https://api.spacexdata.com/v3/launches')
          .then(response=>setSpaceData(response.data))
          },[])

      const {newData, loading} = useSelector((state)=>state.space)

      const SpaceDataMap = spaceData.length && spaceData.map(
        item=> <CardSection Data = {item} key = {item.flight_number}/>)


  return (
    <div className='container-fluid'>

      <div>
           <Filter/>
      </div>

      <div className='row'>

          {SpaceDataMap}
        
      </div>

    </div>
   
  )
}

export default DisaplayData