import React, { useEffect, useState } from 'react'
import "../Pages/SearchResult.css"
import { useMediaQuery } from 'react-responsive';
import SearchBarModal from './SearchBarModal';


const SearchResultInner = ({ data }) => {

    const [openSearchBarModal, setOpenSearchBarModal] = useState("");
    const [dateDiff, setDateDiff] = useState("");


    //Responsiveness
    const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });
    // const isMediumScreen = useMediaQuery({ query: '(max-width: 900px)' });
    // const isLargeScreen = useMediaQuery({ query: '(min-width: 901px) and (max-width: 1200px)' });
    const isExtraLargeScreen = useMediaQuery({ query: '(min-width: 1000px)' });

    let wordCount;
    if (isSmallScreen) {
        wordCount = 3;
    } else if (isExtraLargeScreen) {
        wordCount = 5;
    }


    // Date Difference
    useEffect(() => {
        const parseDate = (dateString) => {
            const [day, month, year] = dateString.split("-");
            return new Date(year, month - 1, day); // Month is zero-based in JavaScript's Date
        };

        const date2 = parseDate(data[6]);
        const date1 = new Date();        //current Date

        const dateDiffInMilliseconds = date2 - date1;
        const dateDiffInDays = Math.floor(dateDiffInMilliseconds / (1000 * 60 * 60 * 24));

        setDateDiff(dateDiffInDays);

    }, [data])


    return (
        <>
            <SearchBarModal data={data} dateDiff={dateDiff} openSearchBarModal={openSearchBarModal} setOpenSearchBarModal={setOpenSearchBarModal} />
            <div className='searchResultInner' onClick={() => setOpenSearchBarModal(true)}>
                <div className="searchResultInnerBox">
                    <h5>Name: {data[0].toUpperCase()}</h5>
                    <h6>Phone no: +91 {data[2]}</h6>
                    <h6>Address: {data[3].split(" ").slice(0, wordCount).join(" ") + "..."}</h6>
                    <div>
                        <h6>Membership Start: {data[5]}</h6>
                        <h6>Membership End: {data[6]}</h6>
                    </div>
                    {dateDiff === 0 ? (<h6>Expires in: <span>Today is the last day.</span></h6>) : (<h6>Expires in: <span>{dateDiff} Days Left</span></h6>)}
                </div>
            </div>
        </>
    )
}

export default SearchResultInner
