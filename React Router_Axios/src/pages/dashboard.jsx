// import client from "axiosConfig";
import axios from 'axios';
import { useEffect,useState } from 'react';

const Dashboard = () => {

    const param_value = {
        role:"RegionalHead"
    }
    const [exposure_val, setExposure] = useState(0);
    const [deadnet_val, setDeadnet] = useState(0);
    const [volume_val, setVolume] = useState(0);
    useEffect( () => {axios.post('http://localhost:8000/api/dashboardData/', param_value)
    .then(res => {
        const responseData = res.data;
        setExposure(responseData.exposure);
        setDeadnet(responseData.deadnet);
        setVolume(responseData.volume);
        // console.log(exposure);
    })},[] )



    return <div>
             <h1>Dashboard</h1>
             <div class="text-large gray">Exposure</div>
             <p >{exposure_val}</p>
             <div class="text-large gray">Deadnet Price</div>
             <p >{deadnet_val}</p>
             <div class="text-large gray">Volume</div>
             <p >{volume_val}</p>
            </div> ;
  };

  export default Dashboard;