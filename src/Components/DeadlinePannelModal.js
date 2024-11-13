import React from 'react'
import "./DeadlinePannelModal.css"

const DeadlinePannelModal = ({ data, dateDiff, openDeadlinePannelInfo, setOpenDeadlinePannelInfo }) => {
    return (
        <div className={`${openDeadlinePannelInfo ? "deadlinePannelModal" : "hideDeadlinePannelModal"}`}>
            <div className='deadlinePannelModalInner'>
                <i onClick={() => setOpenDeadlinePannelInfo(false)} className="ri-close-circle-line"></i>
                <div className="deadlinePannelModalInnerBox">
                    <img src="https://img.freepik.com/premium-photo/personal-fitness-avatar-realistic-white-background-style-raw-stylize-750-job-id-ee19bd69c40a4dd58c8b_343960-70963.jpg" alt="" />
                    <h4>Name: <span>{data[0].toUpperCase()}</span></h4>
                    <h5>Email Id: <span>{data[1]}</span></h5>
                    <h6>Phone No: {data[2]}</h6>
                    <h6>Address: {data[3]}</h6>
                    <h6>Start Subscription: {data[6]}</h6>
                    <h6>End Subscription: {data[8]}</h6>
                    {dateDiff === 0 ? (<h6>Expires in: <span>Today is the last day.</span></h6>) : (<h6>Expires in: <span>{dateDiff} Day Left</span></h6>)}
                    <div className="combinationData">
                        <h6>Date Of Birth: {data[9]}</h6>
                        <h6>Age: {data[10]}</h6>
                    </div>
                    <div className="combinationData">
                        <h6>Blood Group: {data[11]}</h6>
                        <h6>Workout Time: {data[12]}</h6>
                    </div>
                    <div className="combinationData">
                        <h6>Fess Paid: {data[13]}</h6>
                        <h6>Amount: {data[14]}</h6>
                    </div>
                    <h6>Fee Receiver: {data[15]}</h6>
                </div>
            </div>
        </div >
    )
}

export default DeadlinePannelModal
