import { useGlobalStore } from '../store/store';
import { createStandaloneToast, theme } from '@chakra-ui/react';

const toast = createStandaloneToast({ theme });
const logOut = () => {
  useGlobalStore?.setState({
    appState: {
      userInfo: null,
    },
  });

  toast.closeAll();
  localStorage.clear();
  toast({
    id: 'user-log-out',
    title: 'Logged out successfully',
    status: 'success',
    variant: 'subtle',
    isClosable: true,
    position: 'top-right',
  });
};

export { logOut };
