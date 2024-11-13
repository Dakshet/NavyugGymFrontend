import React, { useState } from 'react'
import GymContext from './GymContext'

const GymState = (props) => {

    const host = process.env.REACT_APP_HOST_NAME;

    const [pendingData, setPendingData] = useState([]);
    const [membershipData, setMembershipData] = useState([]);
    const [homeAdminData, setHomeAdminData] = useState([]);
    const [searchUser, setSearchUser] = useState([]);
    const [subscriptionEnd, setSubscriptionEnd] = useState([]);
    // const [noData, setNoData] = useState("")

    // Get fees pending data
    const fetchFeesPendingData = async () => {

        try {
            const response = await fetch(`${host}/user/admin/feespending`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth_token": localStorage.getItem("gymdata")
                    // "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiODEwNDEzMDE3NiJ9LCJpYXQiOjE3MzA5MDM0MjN9.Af9xlNcXZfd7k2Ycdao3M8FoEnfKcv3plTHwCV_jPgI"
                }
            })

            if (response.ok) {
                const json = await response.json();

                if (json.Data) {
                    if (json.Data.length === 0) {
                        setPendingData(1);
                    }
                    else {
                        setPendingData(json.Data);
                    }
                }

                else {
                    console.log(json.Error);
                    setPendingData([]);//Reset state when 'news' is missing
                }
            }
            else {
                console.log(`Error fetching news: ${response.status} ${response.statusText}`)
                setPendingData([]);
            }


        } catch (error) {
            // Catch any network or unexpected errors
            console.error("Error fetching the news:", error);
            // setNews([]); // Optional: Reset state in case of network error
        }
    }


    // Get fees pending data
    const fetchMembershipStatusUserData = async () => {

        try {
            const response = await fetch(`${host}/user/admin/feesdeadline`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth_token": localStorage.getItem("gymdata")
                    // "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiODEwNDEzMDE3NiJ9LCJpYXQiOjE3MzA5MDM0MjN9.Af9xlNcXZfd7k2Ycdao3M8FoEnfKcv3plTHwCV_jPgI"
                }
            })

            if (response.ok) {
                const json = await response.json();

                // console.log(json);

                if (json.Data) {
                    if (json.Data.length === 0) {
                        setMembershipData(1);
                    }
                    else {
                        setMembershipData(json.Data);
                    }
                }

                else {
                    console.log(json.Error);
                    setMembershipData([]);//Reset state when 'news' is missing
                }
            }
            else {
                console.log(`Error fetching news: ${response.status} ${response.statusText}`)
                setMembershipData([]);
            }

        } catch (error) {
            // Catch any network or unexpected errors
            console.error("Error fetching the news:", error);
            // setNews([]); // Optional: Reset state in case of network error
        }
    }

    // Get fees pending data
    const fetchHomeAdminData = async () => {

        try {
            const response = await fetch(`${host}/user/admin/homedata`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth_token": localStorage.getItem("gymdata")
                    // "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiODEwNDEzMDE3NiJ9LCJpYXQiOjE3MzA5MDM0MjN9.Af9xlNcXZfd7k2Ycdao3M8FoEnfKcv3plTHwCV_jPgI"
                }
            })

            if (response.ok) {
                const json = await response.json();

                // console.log(json);

                if (json.Data) {
                    setHomeAdminData(json.Data);
                    // console.log(json.Data);
                }

                else {
                    console.log(json.Error);
                    setHomeAdminData([]);//Reset state when 'news' is missing
                }
            }
            else {
                console.log(`Error fetching news: ${response.status} ${response.statusText}`)
                setHomeAdminData([]);
            }

        } catch (error) {
            // Catch any network or unexpected errors
            console.error("Error fetching the news:", error);
            // setNews([]); // Optional: Reset state in case of network error
        }
    }

    // Get search user data
    const fetchSearchUser = async (search) => {

        try {
            const response = await fetch(`${host}/user/admin/search/?name=${search}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth_token": localStorage.getItem("gymdata")
                    // "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiODEwNDEzMDE3NiJ9LCJpYXQiOjE3MzA5MDM0MjN9.Af9xlNcXZfd7k2Ycdao3M8FoEnfKcv3plTHwCV_jPgI"
                }
            })

            if (response.ok) {
                const json = await response.json();

                // console.log(json);

                if (json.Data) {
                    if (json.Data.length === 18) {
                        setSearchUser(1);
                    }
                    else {
                        setSearchUser(json.Data);
                    }
                    // console.log(json.Data);
                }

                // else {
                //     console.log(json.Error);
                //     setSearchUser([]);//Reset state when 'news' is missing
                // }
            }
            else {
                console.log(`Error fetching news: ${response.status} ${response.statusText}`)
                setSearchUser([]);
            }

        } catch (error) {
            // Catch any network or unexpected errors
            console.error("Error fetching the news:", error);
            // setNews([]); // Optional: Reset state in case of network error
        }
    }


    // Get search user data
    const aceeptMemberRequest = async (id, amount, pStatus) => {

        const acceptFeesArray = pendingData.filter((ids) => ids[5] !== id);

        setPendingData(acceptFeesArray);
        if (acceptFeesArray.length === 0) {
            setPendingData(1);
        }

        try {
            const response = await fetch(`${host}/user/admin/feesaccept/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth_token": localStorage.getItem("gymdata")
                    // "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiODEwNDEzMDE3NiJ9LCJpYXQiOjE3MzA5MDM0MjN9.Af9xlNcXZfd7k2Ycdao3M8FoEnfKcv3plTHwCV_jPgI"
                },
                body: JSON.stringify({ amount })
            })

            if (response.ok) {
                const json = await response.json();

                // console.log(json);

                if (json.Data) {
                    alert(json.Data);
                    // setSearchUser(json.Data);
                    // console.log(json.Data);
                }

                else {
                    console.log(json.Error);
                    // setSearchUser([]);//Reset state when 'news' is missing
                }
            }
            else {
                console.log(`Error fetching news: ${response.status} ${response.statusText}`)
                // setSearchUser([]);
            }

        } catch (error) {
            // Catch any network or unexpected errors
            console.error("Error fetching the news:", error);
            // setNews([]); // Optional: Reset state in case of network error
        }
    }


    // Delete user data from the member request.
    const deleteMemberRequest = async (id) => {

        const acceptFeesArray = pendingData.filter((ids) => ids[5] !== id);
        // console.log(acceptFeesArray);

        setPendingData(acceptFeesArray);
        if (acceptFeesArray.length === 0) {
            setPendingData(1);
        }

        try {
            const response = await fetch(`${host}/user/admin/deletedata/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth_token": localStorage.getItem("gymdata")
                    // "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiODEwNDEzMDE3NiJ9LCJpYXQiOjE3MzA5MDM0MjN9.Af9xlNcXZfd7k2Ycdao3M8FoEnfKcv3plTHwCV_jPgI"
                }
            })

            if (response.ok) {
                const json = await response.json();

                // console.log(json);

                if (json.Data) {
                    alert("Deleted successfully!");
                    // setSearchUser(json.Data);
                    // console.log(json.Data);
                }

                else {
                    console.log(json.Error);
                    // setSearchUser([]);//Reset state when 'news' is missing
                }
            }
            else {
                console.log(`Error fetching news: ${response.status} ${response.statusText}`)
                // setSearchUser([]);
            }

        } catch (error) {
            // Catch any network or unexpected errors
            console.error("Error fetching the news:", error);
            // setNews([]); // Optional: Reset state in case of network error
        }
    }


    // Fetch subscription end data
    const fetchSubscriptionEndUserData = async (search) => {

        try {
            const response = await fetch(`${host}/user/admin/feesend`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth_token": localStorage.getItem("gymdata")
                    // "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiODEwNDEzMDE3NiJ9LCJpYXQiOjE3MzA5MDM0MjN9.Af9xlNcXZfd7k2Ycdao3M8FoEnfKcv3plTHwCV_jPgI"
                }
            })

            if (response.ok) {
                const json = await response.json();

                // console.log(json);

                if (json.Data) {
                    if (json.Data.length === 0) {
                        setSubscriptionEnd(1);
                    }
                    else {
                        setSubscriptionEnd(json.Data);
                    }
                    // console.log(json.Data);
                }

                else {
                    console.log(json.Error);
                    setSubscriptionEnd([]);//Reset state when 'news' is missing
                }
            }
            else {
                console.log(`Error fetching news: ${response.status} ${response.statusText}`)
                setSubscriptionEnd([]);
            }

        } catch (error) {
            // Catch any network or unexpected errors
            console.error("Error fetching the news:", error);
            // setNews([]); // Optional: Reset state in case of network error
        }
    }

    return (
        <GymContext.Provider value={{ pendingData, fetchFeesPendingData, membershipData, fetchMembershipStatusUserData, homeAdminData, fetchHomeAdminData, searchUser, fetchSearchUser, aceeptMemberRequest, deleteMemberRequest, subscriptionEnd, fetchSubscriptionEndUserData }}>
            {props.children}
        </GymContext.Provider>
    )
}

export default GymState
