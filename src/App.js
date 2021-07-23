import { useState } from "react";
import PostList from "./component/PostList";
import PostModalBtn from "./component/postModalBtn";
import PostFormModal from "./component/PostFormModal";
import FilterButton from "./component/FilterButton";
//Filter MAP
const FilterMap = {
  All:() => true,
  Travel: posts => posts.getGenere==="Travel",
  Lifestyle:posts=> posts.getGenere==="Lifestyle",
  Business:posts=> posts.getGenere==="Business",
  Food:posts=> posts.getGenere==="Food",
  Work:posts=>posts.getGenere==="Work"
  
}
const FilterNames=Object.keys(FilterMap)


function App({onAdd}) {
const [isModalDisplayed,setIsModalDisplayed]=useState(false)
const[filter, setFilter]= useState('All')
const[posts,setPosts]=useState(
  [
    {
      id:1,
      getTitle:'Titulo Generico',
      getGenere:'Lifestyle',
      getBody:'Prueba de body'
    },
  ]
 )

//FilterList

const filterList =  FilterNames.map(name=>(
  <FilterButton 
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}/>
))

 //addPost action

 const addPost = (post)=>{
   const id= Math.floor(Math.random()*1000)+1
   const getPost = {id,...post}
   setPosts([...posts,getPost])
 }
  return (
  <>
        <div className='headerTitle'>
          <div className='innerHeader'>
          <h1> [ </h1><h5>Making your life easier</h5> <h1>]</h1>
          </div>
        </div>
        <div className='titleCont'>
          <h1>Discovering the world</h1>
        </div>
        <div className='buttonCont'>
           <PostModalBtn onClick={()=>setIsModalDisplayed(!isModalDisplayed)}/>
        </div>
        <div className='FilterBtnStyle'>
          {filterList}
        </div>
        {isModalDisplayed &&  <PostFormModal onAdd={addPost} 
        />}
        
      <PostList posts={posts.filter(FilterMap[filter])}/>
       { console.log(<PostList/>)}
 </>
  );
}

export default App;
