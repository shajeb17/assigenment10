import React, { use } from 'react';
import { AuthContext } from '../uesContextHook/formhook/AuthContex';
import { Navigate } from 'react-router';

const PrivateRouter = ({children}) => {
    let {userInfo,loading}=use(AuthContext)
    if(loading){return}
    if(userInfo){return children}
    return <Navigate to={"/pagelayout"}></Navigate>;
};

export default PrivateRouter;