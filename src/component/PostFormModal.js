import { useState } from "react"

function PostFormModal({onAdd}){
 let [getGenere,setGenere]=useState('Travel')
 const [getTitle,setTitle]=useState('')
const [getBody,setBody]=useState('')

    //const genere = ['Travel','LifeStyle','Business','Food','Work']
        
        
    const onSubmit=(e)=>{
        e.preventDefault()
        onAdd({getGenere,getTitle,getBody})

    }


return( 

        <div className='formStyle' >
            <form onSubmit={onSubmit}>
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
                       
                    <textarea type='textarea'
                        rows='10'
                        cols="35"
                        value={getBody}
                        placeholder='add text!'
                        onChange={(e)=>setBody(e.target.value)}>
                       
                    </textarea>
                </div>
                    <input type="submit" value="Save post"/>
            </form>
        </div>
    )
}

export default PostFormModal