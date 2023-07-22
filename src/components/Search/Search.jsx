import { useState} from "react";
import "./Search.css"
import SearchContent from "../SearchContent/SearchContent";
import { useInView } from 'react-intersection-observer';

const Search = (props) => {

    const {ref, inView} = useInView({
        threshold: 0.8,
    });
    console.log(inView)




    const [state, setState] = useState(true)

    const styles = {
        height: "70%",
    }

    const stylesSer = {
        position: "fixed",
        transition: 'opacity 0.3s',
        opacity: inView ? 1 : 0,
    }

    const openView = () => {  

        setState(state => !state)
        props.newState(state)
    }

    return (
        <>
            <div ref={ref} className="search" style={state ? null : styles}>
                <div style={state ? null : stylesSer} onClick={openView} className={`search-button`}>сменить контент</div>
                <div className="bottom-block">ggg</div>
            </div>
            {state ? null : <SearchContent/>}
        </>
    )
}

export default Search;