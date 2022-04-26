import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import ConfigModal from '../../Modal/ConfigModal'
import EditUserForm from '../../User/EditUserForm'
import AvatarNotFound from '../../../assets/png/avatar-no-found.png'
import { API_HOST } from '../../../utils/constants'

import "./BannerAvatar.scss"

export default function BannerAvatar(props) {
    const { user, currentUser } = props;

    const [showModal, setShowModal] = useState(false);

    const bannerURL = user?.banner ? `${API_HOST}/obtenerBanner?id=${user.id}` : null;
    const avatarURL = user?.avatar ? `${API_HOST}/obtenerAvatar?id=${user.id}` : AvatarNotFound;

    return (
        <div className='banner-avatar' style={{ backgroundImage: `url('${bannerURL}')` }}>
            <div className='avatar' style={{ backgroundImage: `url('${avatarURL}')` }}></div>
            {user && (
                <div className="options">
                    {currentUser._id === user.id && 
                        <Button onClick={() => setShowModal(true)}>Editar Perfil</Button>
                    }
                    {currentUser._id !== user.id && (
                        <Button>Seguir</Button>
                     )}
                </div>
            )}
            <ConfigModal 
                show={showModal} 
                setShow={setShowModal} 
                title="Editar perfil"
            >
                <EditUserForm user={user} setShowModal={setShowModal} />
            </ConfigModal>
        </div>
    )
}
