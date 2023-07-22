import { useState} from "react";
import "./Search.css";
import SearchInput from "../SearchInput/SearchInput"
import SearchContent from "../SearchContent/SearchContent";
import { useInView } from 'react-intersection-observer';
import BottomBlock from "../../BottomBlock/BottomBlock";

const Search = (props) => {

    const {ref, inView} = useInView({
        threshold: 0.7,
    });

    const [state, setState] = useState(true)

    const styles = {
        height: "70%",
    }

    const stylesSer = {
        position: "fixed",
        transition: 'opacity 0.4s ease',
        opacity: inView ? 1 : 0,
    }

    const handleState = (states) => {
        setState(states)
        props.newState(state)
    }

    return (
        <>
            <div ref={ref} className="search" style={state ? null : styles}>
                <div style={state ? null : stylesSer} className={`search-button`}>
                    <SearchInput changeState={handleState}/>
                </div>
                <div className="bottom-block">
                    <BottomBlock/>
                </div>
            </div>
            {state ? null : <SearchContent/>}
        </>
    )
}

export default Search;