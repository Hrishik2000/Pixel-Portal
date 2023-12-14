//import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";


function Github() {
  const data =useLoaderData()

  // //to show data on page using useEffect we need useState
  // const [data,setdata] = useState([]);
  // //this api call will be done only when github component loads
  // //useEffect hook is used 
      //! Using loader to fetch data instead of useEffect because its a optimized approach & data gets loaded from api when we just hover over GitHub link 
      //!using Use useEffect is little slower approach then using Loader
  //   useEffect(()=>{
  //       fetch('https://api.github.com/users/hrishik2000')
  //       .then( response => response.json())
  //       .then(data =>{
  //         console.log(data);
  //         setdata(data);
  //       })
  //     },[])


  return (
    <div className=" flex flex-col text-center m-4 p-5 bg-gray-800 text-white">Github Followers : {data.followers}
    <img className=" allign items-center" src={data.avatar_url} alt="Git picure" width={300} /></div>
  )
}

export default Github;    

//exporting function for loader
export const githubInfoLoader = async ()=>{
  const response = await fetch("https://api.github.com/users/hrishik2000")
  return response.json();
}

