
function Post({post}){


    return(
        <div className='PostBlock'>
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