import React from "react";
import { ArrowUpRight, Link } from "lucide-react";
import FileTypeIconMap from "../../data/fileTypeIcons.jsx";
import HighlightedText from "./HighlightedText.jsx";

const SearchResult = ({title, subscript1, subscript2, image, icon, highlightedText='', link}) => {
    const [showCopyTooltip, setShowCopyTooltip] = React.useState(false);
    const [copyLinkText, setCopyLinkText] = React.useState('Copy link');

    const copyLinkHandler = (id) => {
        const link = `${window.location.origin}/${id}`;
        navigator.clipboard.writeText(link).then(() => {
            setCopyLinkText("Link copied!");
        })
    }

    const copyButtonMouseEnterHandler = () => {
        setShowCopyTooltip(true);
    }

    const copyButtonMouseLeaveHandler = () => {
        setShowCopyTooltip(false);
        setCopyLinkText('Copy link');
    }

    const openInNewTabHandler = (link) => {
        window.open(link, '_blank');
    }

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
                <div className="search-result-item-action-container">
                    {
                        showCopyTooltip ? <span className="copy-link-text">{copyLinkText}</span> : null
                    }
                    <button className="search-result-item-action-button" onClick={() => copyLinkHandler(item.id)} onMouseEnter={copyButtonMouseEnterHandler} onMouseLeave={copyButtonMouseLeaveHandler}><Link size={16}/></button>
                    <button className="search-result-item-action-button" onClick={() => openInNewTabHandler(item.id)}><ArrowUpRight size={16}/></button><span className="open-in-new-tab">New tab</span>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;