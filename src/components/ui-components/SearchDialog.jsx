import { Search } from 'lucide-react'
import React from 'react'


const SearchDialog = () => {
  return (
    <div className='search-dialog-container'>
        <Search size={36}/>
        <h4>Search across files, people, chats, and lists in one place.</h4>
    </div>
  )
}

export default SearchDialog