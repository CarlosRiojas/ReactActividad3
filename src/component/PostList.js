import Post from "./Post"



function PostList({posts}){
   

   

    return(

        <div className='PostSumBlock'>
            { 
            posts.map((post)=>(
                <Post 
                key={post.id}
                post={post} />
            ))}
        </div>

    )


}

export default PostList