import React, { useState, useEffect } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { withRouter } from "../../utils/functions"
import{ toast } from 'react-toastify';
import useAuth from "../../hooks/userAuth";
import BasicLayout from '../../layout/BasicLayout'
import BannerAvatar from '../../components/User/BannerAvatar';
import { getUserApi } from '../../api/user'

import "./User.scss";

function User(props) {
  const { router} = props;
  const [user, setUser] = useState(null);
  const { params } = router;
  const currentUser = useAuth();

  useEffect(() => {
   getUserApi(params.id).then(response => {
     setUser(response)
     if(!response) toast.error("El usuario que has visitado no existe");
   }).catch(err => {
     toast.error("El usuario que has visitado no existe");
   })
  }, [params])
  
  
  return (
    <BasicLayout className="user">
      <div className='user__title'>
        <h2>{user ? `${user.nombre} ${user.apellidos}` : 'Este usuario no existe'}</h2>
      </div>
      <BannerAvatar user={user} currentUser={currentUser}/>
      <div>Info Usuario</div>
      <div className='user__tweets'>Lista de Tweets</div>
    </BasicLayout>
  )
}

export default withRouter(User)

