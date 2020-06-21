import React from 'react'
import {Post} from './Post'
import { userParent } from '../model/parent.model'
import './PostList.css'

interface PostListProps{
    posts: userParent[];
}

export const PostList:React.FC<PostListProps> = ({posts}) => {
    return (
    <div className="PostList">{posts.map(pst => (<Post key={pst.id} userParent={pst}/>))}</div>
    )
}