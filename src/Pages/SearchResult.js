import React, { useContext, useEffect } from 'react'
import GymContext from '../context/Gym/GymContext'
import SearchResultInner from '../Components/SearchResultInner';
import "./SearchResult.css"

const SearchResult = () => {

    const { searchUser } = useContext(GymContext);


    // Title change
    useEffect(() => {
        document.title = "Navyug Gym - Search User";  // Set the document title to the news title
    }, []);


    if (!searchUser || searchUser.length === 0) {
        return (
            <div className="dumbbell-container">
                <div className="dumbbell">
                    <div className="weightScrew" id='leftSide'>
                        <div className="wavex"></div>
                    </div>
                    <div className="weight">
                        <div className="wavex"></div>
                    </div>
                    <div className="handle">
                        <p>Navyug Gym</p>
                    </div>
                    <div className="weight">
                        <div className="wavex"></div>
                    </div>
                    <div className="weightScrew" id='rightSide'>
                        <div className="wavex"></div>
                    </div>
                </div>
            </div>
        )
        // Handle case when news is not yet available
    }


    return (
        <div className='searchResult'>
            <h1>Your Search Users</h1>
            <hr />
            {searchUser === 1 ? (<p className='emptyParaMsg'>User not found in our records.</p>) : <div className="searchResultBox">
                {searchUser.map((data, index) => {
                    return <SearchResultInner key={index} data={data} />
                })}
            </div>}
        </div>
    )
}

export default SearchResult
