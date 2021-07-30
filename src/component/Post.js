import {Image} from 'cloudinary-react'
function Post({post}){

    return(
        <div className='PostBlock' 
        style={{
            backgroundImage: `url(${post.getImgUrl})`}}> 
           
           {console.log(post.getImage)}
           {console.log(post.getImgUrl)} 
              <div>
            <h3>genere:{post.getGenere}</h3>
           
                </div>
             <div>
                 <h3>Title: {post.getTitle}</h3>
            </div>
            
            <div>
            <p>{post.getBody}</p>
        
            </div>
    
        </div>
    )
}

export default Post

/*
<div>
{post.getTitle}
</div>

<div>
{post.getGenere}
</div>
<div>
{post.getBody}
</div>

*/