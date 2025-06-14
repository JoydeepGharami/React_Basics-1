import React from 'react'
import axios from 'axios';
const Axioexample = () => {
    const[data,setData] = useState([]);
    useEffect(() => {
       axios.get('https://axios-http.com/docs/intro').then((response)=> setData(response.data)).catch(error=> {
        console.log("Error fetching data",error);
       })
    },[])
  return (
    <div>
        {data.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}

export default Axioexample
