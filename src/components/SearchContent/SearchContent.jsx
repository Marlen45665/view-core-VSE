import "./SearchContent.css"
import { useRef, useEffect} from "react";

const SearchContent = () => {

    const ref = useRef("")

    useEffect(() => {
        // ref.current.scrollTo({top: 0})
        // window.scrollTo({top: 0})
    })

    useEffect(() => {
        if (ref.current){
            // console.log("ok")
            // ref.current.scrollTo = 0
        }
    })


    return (
        <div ref={ref} className="search-content-erapper">
            <div  className="search-content">контент после результата поиска</div>
        </div>
        
    )
}

export default SearchContent;