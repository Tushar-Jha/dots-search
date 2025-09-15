import React, { useRef } from 'react';
import { FileSpreadsheet, FileText, Folder, ImageIcon, List, Loader, MessageCircleMore, Presentation, Search, Settings, Users , Video } from 'lucide-react';
import staticList from '../data/staticList';
import { useDebounce } from '../hooks/useDebounce';
import { useFilteredResults } from '../hooks/useFilteredResults';
import Shimmer from './ui-components/Shimmer';
import ToggleButton from './ui-components/ToggleButton';
import AnimatedNumber from './ui-components/AnimatedNumber';
import SearchResult from './ui-components/SearchResult';
import SearchInput from './ui-components/SearchInput';
import NoResultsFound from './ui-components/NoResultsFound';
import SearchDialog from './ui-components/SearchDialog';

const FILTER_ICON_SIZE = 16;

const FILTERS = [
    { id:'all' ,name: 'All', value: null, icon: null, show: true },
    { id:'people', name: 'People', value: 'person', icon: <Users size={FILTER_ICON_SIZE}/>, show: true },
    { id:'chat', name: 'Chats', value: 'chat', icon: <MessageCircleMore size={FILTER_ICON_SIZE}/>, show: true },
    { id:'file', name: 'Files', value:'file', icon: <FileText size={FILTER_ICON_SIZE}/>, show: true },
    { id:'list', name: 'Lists', value: 'list', icon: <List size={FILTER_ICON_SIZE}/>, show: true },
]

const PersonSearchResult = ({person, highlightedText}) => SearchResult({ title: person.name, subscript1: person.status, subscript2: person.timeAgo, image: person.avatar, highlightedText });
const FileSearchResult = ({file, highlightedText}) => SearchResult({ title: file.name, subscript1: `in ${file.category}`, subscript2: file.timeAgo, icon: file.fileType, highlightedText });
const ChatSearchResult = ({chat, highlightedText}) => SearchResult({ title: chat.name, subscript1: chat.lastMessage, subscript2: null, icon: 'chat', highlightedText });
const ListSearchResult = ({list, highlightedText}) => SearchResult({ title: list.name, subscript1: `in ${list.category}`, subscript2: list.timeAgo, icon: 'list', highlightedText});

const SearchContainer = () => {

    const containerRef = React.useRef(null);

    const [insideInteraction, setInsideInteraction] = React.useState(false);
    const [inputFocused, setInputFocused] = React.useState(false);
    const [selectedFilter, setSelectedFilter] = React.useState({ id: 'all', value: null });
    const [searchText, setSearchText] = React.useState("");
    const [searchLoading, setSearchLoading] = React.useState(false);
    const [selectedFilterState, setSelectedFilterState] = React.useState([...FILTERS]);
    const [showFilterDropdown, setShowFilterDropdown] = React.useState(false);
    const [expandSearchInput, setExpandSearchInput] = React.useState(false);

    const debouncedSearchText = useDebounce(searchText, 400);
    const filteredSearchResults = useFilteredResults(staticList, debouncedSearchText)

    React.useEffect(() => {setSearchLoading(false)}, [filteredSearchResults])

    const changeSearchHandler = (searchText) => {
        setSearchLoading(true);
        setSearchText(searchText);
    }

    const clickFilterHandler = (selectedFilter) => {
        setInsideInteraction(true);
        setSelectedFilter({ id: selectedFilter.id, value: selectedFilter.value });
    }

    const changeSelectedFiltersHandler = (filter, show) => {
        setInsideInteraction(true);
        if(filter.id === selectedFilter.id) {
            setSelectedFilter({ id: 'all', value: null });
        }
        setSelectedFilterState([...selectedFilterState].map(f => f.id === filter.id ? {...f, show: show} : f))
    }

    const inputFocusHandler = () => {
        setInsideInteraction(true);
        setInputFocused(true);
    }

    const inputBlurHandler = () => {
        setInputFocused(false); 
    }

    const clickFilterDropdownToggler = () => {
        setInsideInteraction(true);
        setShowFilterDropdown((prev) => !prev)
    }

    React.useEffect(() => { 
        setExpandSearchInput(searchText.length > 0 || showFilterDropdown || inputFocused || insideInteraction);
    }, [searchText, showFilterDropdown, inputFocused, insideInteraction]);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setInsideInteraction(false);
            setInputFocused(false);
            setShowFilterDropdown(false);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className='container'>
            <div
                ref={containerRef}
                className={`search-container ${expandSearchInput ? ' expanded' : ''}`}>
                <div className='search-input-container'>
                    {
                        searchLoading ? <Loader className='loading-icon' /> : <Search />
                    }
                    <SearchInput searchText={searchText} changeSearch={(searchText) => changeSearchHandler(searchText)} onFocus={() => inputFocusHandler()} onBlur={() => inputBlurHandler()}></SearchInput>
                    
                </div>
                {
                    expandSearchInput ? 
                    <div>
                        <div className="filters-conatiner">
                            <div className="visible-filters">
                                {selectedFilterState.filter(filter => filter.show).map((filter, index) => {

                                    return (
                                        <div className={`filter-item${filter.id === selectedFilter.id ? ' active' : ''}`} onClick={() => clickFilterHandler(filter)} key={index} >
                                            { filter.icon }
                                            <span>{ filter.name }</span>
                                            <AnimatedNumber number={filteredSearchResults.filter(res => filter.id === 'all' ? true : res.type === filter.value)?.length ?? 0}></AnimatedNumber>
                                        </div>
                                    )

                                })}
                            </div>
                            <div className='filter-dropdown-conatiner'>
                                <div>
                                    <Settings onMouseDown={() => clickFilterDropdownToggler()} className={`filter-icon${showFilterDropdown === true ? ' active': ''}`}/>
                                    {
                                        showFilterDropdown ? 
                                        <div className='filter-dropdown'>
                                            <ul>
                                                {selectedFilterState.filter(filter => filter.value).map((filter, index) => {
                                                    return (
                                                        <li key={index} className={`filter-dropdown-item${filter.show === true ? ' active' : ''}`}>
                                                            <span>{ filter.icon }{filter.name}</span>
                                                            <ToggleButton active={filter.show === true} onChange={(show) => changeSelectedFiltersHandler(filter, show)}></ToggleButton>          
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div> : null
                                    }
                                    
                                </div>
                            </div>
                        </div>
                        <div className='search-results-container'>
                            {
                                searchLoading 
                                ? <div className='shimmer-container'>{[...Array(5)].map((_, i) => (<Shimmer key={i} />))}</div>
                                : (
                                    filteredSearchResults.filter(item => selectedFilter.id === 'all' ? true : item.type === selectedFilter.value).length === 0
                                    ? (
                                        searchText.length === 0 ? <SearchDialog />: <NoResultsFound />
                                    )
                                    : filteredSearchResults.filter(item => selectedFilter.id === 'all' ? true : item.type === selectedFilter.value).map((item, index) => {
                                        switch(item.type) {
                                            case 'person':
                                                return <PersonSearchResult key={index} person={item} highlightedText={searchText.split(" ").filter(text => text.trim()).join(" ")}></PersonSearchResult>;
                                            case 'file':
                                                return <FileSearchResult key={index} file={item} highlightedText={searchText.split(" ").filter(text => text.trim()).join(" ")}></FileSearchResult>;
                                            case 'list':
                                                return <ListSearchResult key={index} list={item} highlightedText={searchText.split(" ").filter(text => text.trim()).join(" ")}></ListSearchResult>;
                                            case 'chat':
                                                return <ChatSearchResult key={index} chat={item} highlightedText={searchText.split(" ").filter(text => text.trim()).join(" ")}></ChatSearchResult>;
                                            default:
                                                return null;
                                        }
                                    })
                                )
                            }
                        </div>
                    </div>
                     : null
                }
            </div>
        </div>
    )
}

export default SearchContainer