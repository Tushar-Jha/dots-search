import { SearchX } from 'lucide-react'
import React from 'react'


const NoResultsFound = () => {
  return (
    <div className='no-results-found-container'>
        <SearchX size={36}/>
        <h4>No Results Found</h4>
    </div>
  )
}

export default NoResultsFound