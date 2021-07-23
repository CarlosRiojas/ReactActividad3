import { FiEdit } from "react-icons/fi";

const PostModalBtn=({onClick})=>{
    return(
        <button className='btn'
        onClick={onClick}>
            <FiEdit/>
        
        </button>
    )
}
export default PostModalBtn