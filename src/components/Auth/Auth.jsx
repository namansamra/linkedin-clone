import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useGlobalStore } from '../../store/store';
import { MUTATION_USER_SIGNIN } from '../../utils/mutation';
import { queryErrorHandler } from '../ErrorToast/ErrorToast';
import Login from '../Login/Login';
function Auth(props) {
  const setUserInfo = useGlobalStore((state) => state.setUserInfo);
  const [userSignIn, { loading }] = useMutation(MUTATION_USER_SIGNIN);
  const [genuineUser, setGenuineUser] = useState(false);
  const navigate = useNavigate();
  const authenticateUser = async () => {
    try {
      const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        navigate('/login');
        return;
      }
      const { data } = await userSignIn({
        context: {
          headers: {
            authorization: access_token,
            'x-auth-type': 'token',
          },
        },
      });
      console.log(data);
      setUserInfo(data.signInUser);
      setGenuineUser(true);
      navigate('home');
    } catch (err) {
      navigate('/login');
      return;
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return genuineUser ? <>{props.children}</> : <Login />;
}

export default Auth;
