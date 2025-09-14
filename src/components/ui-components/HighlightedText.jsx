import React from 'react'

const HighlightedText = ({text, highlight}) => {
    if(!highlight.trim()) {
        return <span>{text}</span>;
    }

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return <span> {parts.map((part, i) => part.toLowerCase() === highlight.toLowerCase() ? <mark key={i} className="highlight">{part}</mark> : <span key={i}>{part}</span>)}</span>
}

export default HighlightedText