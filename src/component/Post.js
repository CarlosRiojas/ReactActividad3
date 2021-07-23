
function Post({post}){


    return(
        <div className='PostBlock'>
             <div>
                {post.getTitle}
            </div>

            <div>
                {post.getGenere}
            </div>
            
            <div>
                {post.getBody}
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