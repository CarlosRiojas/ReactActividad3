

function FilterButton({isPressed,setFilter,name}){
        return(
            <button 
                type="button" 
                className="fltrBtn"
                aria-pressed={isPressed}
                onClick={()=>setFilter(name)}>
                <span>{name}</span>
               
            </button>
        )
    }

    export default FilterButton