import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt=""/>
            <img src={Profile} alt=""/>
        </div>

        <div className="ProfileName">
            <span>Maithri</span>
            <span>CSE Student</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                <span>6890</span>
                <span>Followers</span>
            </div>
            <div className="vl"> </div>
            <div className="follow">
                <span>1</span>
                <span>Following</span>
            </div>
            <hr />
        </div>
        </div>
        <span>
            My Profile
        </span>
    </div>
  )
}

export default ProfileCard