import React from 'react'
import CardSection from './CardSection'
import './CSS/Filter.css'
import {LaunchByWeek, LaunchByMonth, LaunchByYear,LaunchBy_Failure_status} from '../Redux/apiSlice'
import {useDispatch, useSelector} from 'react-redux'



function Filter() {

    const doprdownOptions = ['Last Week', 'Last Month', 'Last Year']
    const dispatch = useDispatch()
    


    const filterByLaunchDate = doprdownOptions.length &&
    doprdownOptions.map(item=><option key={item.index} value={item}>{item}</option>)

  return (
   
        <div className="container-fluid"> 
        {/* <div className="row">  */}
            <div className="col-sm-3 col-md-3 col-lg-3"> 
                <div className="filter-options"> 
                    <span className="glyphicon glyphicon-th-list toggle-span" data-toggle="collapse" 
                            data-target="#demo"></span> 

                <div id="demo" className="collapse show"> 
                    <div className="filter-heading">Filter Data</div> 
                    <div className="Select-Location">Launch Date</div> 
                    <select className="Rectangle-2236"> 
                        <option>Select</option> 

                        {filterByLaunchDate}
                        
                    </select>
                </div>
               
                   
                   {/* Filter by launch status : Success OR failure */}

                    <div className="Select-Location">Launch By Status</div> 
                    <div> 
                        <input type="radio" onChange={()=>dispatch.LaunchBy_Failure_status()}/> 
                        <span className="checkbox-items">Failure</span> 
                    </div> 

                    <div> 
                    <input type="radio" onChange={()=>dispatch.LaunchBy_Success_status()}/> 
                    <span className="checkbox-items">Success</span> 
                    </div> 

                    <div> 
                    <input type="radio"/> 
                    <span className="checkbox-items">Is it upcoming?</span> 
                    </div> 

                    </div> 
           
        </div> 

    {/* </div>  */}
    </div>
  )
}

export default Filter