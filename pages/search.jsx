
import Searchbar from "../components/search bar/search";
import Component from "../components/footer/footer";
import GooeyNav from "../components/navbar/GooeyNav";
import ChromaGrid  from "../components/card/ChromaGrid";
import movieNight1 from './components/MovieNight-bro.png';
import { useState } from "react";

export default function Search1() {


        let [data, usedata] = useState([])
        let[id, useid] = useState("")

        let key = "ac57430900d565f8b3f23b339a6f7efa"
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}`
        

        function work(){
            fetch(`${url}&query=${id}`)
            .then((Response)=> Response.json())
            .then((Response)=> {
                usedata(Response.results)
                console.log(Response.results);
        })
        }






     const items = [
      {
        image: data[0]?.poster_path? `https://image.tmdb.org/t/p/w500${data[0].poster_path}`
        : "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: `${data[0]?.original_title || "Movie Name"}`,
        subtitle: `${data[0]?.overview || ""}...`.slice(0,100),
        handle: `Rating: ${data[0]?.vote_average || "Rating:"}`,
        borderColor: "#3B82F6",
        gradient: "linear-gradient(145deg, #3B82F6, #000)",
        url: `https://en.wikipedia.org/wiki/${id}`
      },
    ];


    const items1 = [
    { label: "Home", to: "/home" },
    { label: "Search", to: "/search" },
  ];
  
  return (
    <>
      <div className="h-20 w-full bg-[#1a1a1a] flex justify-center items-center px-4">
        <div className="relative right-[450px]">
          <h1 className="text-white text-[30px] font-black font-sans">
            Binge <span className="text-red-600">Better</span>
          </h1>
        </div>
        <GooeyNav
          items={items1}
          particleCount={1}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
        <Searchbar id={id} useid={useid} work={work} />
        <div style={{display: "flex", alignItems:"center"}}>
            <ChromaGrid 
                items={items}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
            />
            <div>
                <img src={movieNight1} style={{height: "700px", }}/>
            </div>
        </div>
        <div style={{marginTop:"100px"}}><Component /></div>
      
    </>
  );
}
