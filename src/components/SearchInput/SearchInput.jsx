import "./SearchInput.css";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState, useRef } from "react";

const SearchInput = (props) => {

    const inputRef = useRef(null)
    const [stateIcon, setStateIcon] = useState(true)
    const [inputState, setInputState] = useState('')

    const handleState = () => {
        const newStateIcon = !stateIcon; 
        setStateIcon(newStateIcon); 
        props.changeState(newStateIcon);

        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const handleClear = () => {
        handleState()
        setInputState("")
    }

    const handleInputChange = (event) => {
        setInputState(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleState()
        }
    }

    return(
        <div className="input-container">
            <div className="input-wrapper">
                {stateIcon ? <SearchSharpIcon style={{fontSize: "25px", marginRight: "5px"}} onClick={handleState} /> : <ClearIcon style={{fontSize: "25px", marginRight: "5px"}} onClick={handleClear}/> }
                <input className="input" placeholder="search" value={inputState} onChange={handleInputChange} onKeyDown={handleKeyPress} ref={inputRef}></input>
                {inputState ? <ArrowUpwardIcon style={{fontSize: "25px", marginRight: "5px"}} onClick={handleState} /> : null}
            </div>
        </div>
    )
}

export default SearchInput;
