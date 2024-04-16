const ActionFilm=[{title:"Die Hard 1988"}, 
{title:"Mad Max Fury Road 2015"},
{title:"The Dark Knight 2008"},
{title:"The Raid 2011"},
{title:"John Wick 2014"}
]
const RomanceFilm=[{title:"Casablanca 1942"}, 
{title:"The Notebook 2004"},
{title:"Pride and Prejudice 2005"},
{title:"Before Sunrise 1995"},
{title:"Eternal Sunshine of the Spotless Mind 2004 "}
]
const ComedyFilm=[{title:"The Hangover 2009"}, 
{title:"Superbad 2007"},
{title:"Bridesmaids 2011"},
{title:"Knives Out 2019"},
{title:"The Grand Budapest Hotel 2014"}
]
const arrow= document.querySelectorAll(".arrow");
const movieLists=document.querySelectorAll(".movie-list")

arrow.forEach((arrow,i)=>{
    const itemNum=movieLists[i].querySelectorAll("img").length;
    let clickCounter=0;
    arrow.addEventListener("click",()=>{
        const ratio=Math.floor(window.innerWidth/200);
        clickCounter++;
        if(itemNum-(4+ clickCounter)+(4-ratio)>=0){
        movieLists[i].style.transform= `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        }
        else {
            movieLists[i].style.transform="translateX(0)";
            clickCounter=0;
        }    
   })})
   