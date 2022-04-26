import React from 'react'
import { Button } from 'react-bootstrap'
import AvatarNotFound from '../../../assets/png/avatar-no-found.png'
import { API_HOST } from '../../../utils/constants'

import "./BannerAvatar.scss"

export default function BannerAvatar(props) {
    const { user, currentUser } = props;

    const bannerURL = user?.banner ? `${API_HOST}/obtenerBanner?id=${user.id}` : null;
    const avatarURL = user?.avatar ? `${API_HOST}/obtenerAvatar?id=${user.id}` : AvatarNotFound;

    console.log(bannerURL);

    return (
        <div className='banner-avatar' style={{ backgroundImage: `url('${bannerURL}')` }}>
            <div className='avatar' style={{ backgroundImage: `url('${avatarURL}')` }}></div>
            {user && (
                <div className="options">
                    {currentUser._id === user.id && 
                        <Button>Editar Perfil</Button>
                    }
                    {currentUser._id !== user.id && (
                        <Button>Seguir</Button>
                     )}
                </div>
            )}
        </div>
    )
}
