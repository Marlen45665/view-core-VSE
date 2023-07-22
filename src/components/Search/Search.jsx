import { useState, useRef, useEffect} from "react";
import "./Search.css"
import SearchContent from "../SearchContent/SearchContent";

const Search = (props) => {

    const [state, setState] = useState(true)
    const ref = useRef(null)

    const styles = {
        height: "70%",
    }

    const stylesSer = {
        position: "fixed"
    }

    const openView = () => {  
        // ref.current.scrollTop = 0
        // ref.current.style.scrollBehavior = 'smooth';
        setState(state => !state)
        props.newState(state)
    }

    useEffect(() => {
        if (ref.current){
            // ref.current.scrollTop = 0
            // ref.current.style.scrollBehavior = 'smooth';
        }
    })


    return (
        <>
            <div ref={ref} className="search" style={state ? null : styles}>
                <div style={state ? null : stylesSer} onClick={openView} className="search-button">сменить контент</div>
                <div className="bottom-block">ggg</div>
            </div>
            {state ? null : <SearchContent/>}
        </>
    )
}

export default Search;