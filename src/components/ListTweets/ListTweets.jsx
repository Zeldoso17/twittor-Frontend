import React, { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { map } from 'lodash'
import moment from 'moment'
import AvatarNoFound from '../../assets/png/avatar-no-found.png'
import { API_HOST } from '../../utils/constants'
import { getUserApi } from '../../api/user'
import { replaceURLWithHTMLLinks } from '../../utils/functions'

import './ListTweets.scss'

export default function ListTweets(props) {
    const { tweets } = props;

  return (
    <div className='list-tweets'>
        {map(tweets, (tweet, index) => ( // Estamos iterando sobre el array de tweets
            <Tweet key={index} tweet={tweet} /> // Estamos pasando el tweet a este componente que se encarga de organizarlo
        ))}
    </div>
  )
}

function Tweet(props) {
    const { tweet } = props;
    const [userInfo, setUserInfo] = useState(null)
    const [avatarURL, setAvatarURL] = useState(null)

    useEffect(() => {
        getUserApi(tweet.userId).then(response => {
            setUserInfo(response)
            setAvatarURL(
                response?.avatar 
                ? `${API_HOST}/obtenerAvatar?id=${response.id}` 
                : AvatarNoFound
            );
        })
    }, [tweet]);

    return (
        <div className='tweet'>
            <Image className='avatar' src={avatarURL} roundedCircle />
            <div>
                <div className='name'>
                    {userInfo?.nombre} {userInfo?.apellidos}
                    <span>{moment(tweet.fecha).calendar()}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: replaceURLWithHTMLLinks(tweet.mensaje) }} />
            </div>
        </div>
    )
}
