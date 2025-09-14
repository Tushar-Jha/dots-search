import FileTypeIconMap from "../../data/fileTypeIcons.jsx";
import HighlightedText from "./HighlightedText.jsx";

const SearchResult = ({title, subscript1, subscript2, image, icon, highlightedText=''}) => {
    return (
        <div className='search-result'>
            <div className='search-result-item'>
                <div className='search-result-item-icon'>
                    { 
                        image ? <img className='avatar-image' src={image} /> : (icon ? FileTypeIconMap[icon] : <FileText />)
                    }
                </div>
                <div className='search-result-item-info'>
                    <div className='search-result-item-title'><HighlightedText text={title} highlight={highlightedText}/></div>
                    <div className='search-result-item-subscript-container'>
                        <span className='search-result-item-subscript'>{subscript1}</span>
                        {
                            subscript1 && subscript2 ? <span> &nbsp;•&nbsp; </span> : null
                        }
                        <span className='search-result-item-subscript'>{subscript2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;