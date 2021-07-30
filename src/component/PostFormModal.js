import { useState } from "react"
import Axios from "axios"



function PostFormModal({onAdd}){
 
let [getGenere,setGenere]=useState('Travel')
const [getTitle,setTitle]=useState('')
const [getBody,setBody]=useState('')
let [getImage,setImage]=useState('')
let [getImgUrl,setImgUrl]=useState('')


   const UploadImage = ({getImgUrl}) => {
    
    const formData = new FormData()
    formData.append("file",getImage)
    formData.append("upload_preset","ddyy5zbx")

    Axios.post("https://api.cloudinary.com/v1_1/dk5lv4qj5/image/upload",formData)

        .then((res)=>{console.log(res.data.secure_url)
             setImgUrl(res.data.secure_url)
             getImgUrl=res.data.secure_url
             console.log(getImgUrl)
            })
           
            .catch((e)=>console.log(e))   


    console.log(getImage)
}    
 
    //const genere = ['Travel','LifeStyle','Business','Food','Work']
        
        
    const onSubmit=(e)=>{
        e.preventDefault()
        onAdd({getGenere,getTitle,getBody,getImage,getImgUrl})
    }

return( 

        <div className='formStyle' >
            <form onSubmit={onSubmit} >
                <div className="formStyleInner">
                    <label>Choose a genere: </label>
                    <select value={getGenere} onChange={e=>setGenere(e.target.value)}>
                        <option value='Travel'>Travel</option>
                        <option value='Lifestyle'>LifeStyle</option>
                        <option value='Business'>Business</option>
                        <option value='Food'>Food</option>
                        <option value='Work'>Work</option>
                    </ select>
               </div>

                <div className="formStyleInner">
                    <label>Title:</label>
                        <input type="text"
                        value={getTitle}
                                placeholder='add a title!'
                                onChange={(e)=>setTitle(e.target.value)}> 
                        </input>
                </div>
                
                <div className="formStyleInner">
                    <label>Background Image:</label>
                        <input type="file"
                                onChange={(e)=>setImage(e.target.files[0])}> 
                               
                        </input>
                      
                </div>

                <div className="formStyleInner">
                       
                    <textarea type='textarea'
                        rows='10'
                        cols="35"
                        value={getBody}
                        placeholder='add text!'
                        onChange={(e)=>setBody(e.target.value)}>
                       
                    </textarea>
                </div>
                    <input type="submit" value="Save post" onClick={UploadImage}/>
            </form>
        </div>
    )
}

export default PostFormModal