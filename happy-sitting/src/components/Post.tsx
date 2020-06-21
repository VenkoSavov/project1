import React from 'react';
import { userParent } from '../model/parent.model';
import './Post.css'

interface PostProps {
    userParent: userParent;
}

export const Post: React.FC<PostProps> = ({userParent}) => {
    return (
        <div className="Post">
            <div className="left-column">
            <span className="ImageKid"><img src={userParent.imageUrl} alt="Kid"/></span>
                <div><strong>Author:</strong> {userParent.fName + ' ' +  userParent.lName}</div>
                <div><strong>Date:</strong> {userParent.date}, time slot: From: {userParent.timeFrom} - To: {userParent.timeTo}</div>
                <div><strong>Child</strong>: Name: {userParent.kidName}, Age: {userParent.kidAge}</div>
            </div>
        </div>
    )
}