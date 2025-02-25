import { useEffect, useState } from "react";

const FatchingDataFromAPI=()=>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(json => setData(json))
        .catch(err => console.error(err))
    },[])

    return(
        <>
            <ul>{data.map(item=>(
                    
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    )

}
export default FatchingDataFromAPI;