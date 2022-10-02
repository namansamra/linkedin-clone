import { createStandaloneToast, theme } from '@chakra-ui/react';
import { useGlobalStore } from '../../store/store';

const toast = createStandaloneToast({ theme });

export function queryErrorHandler(obj, graphQLErrors = []) {
  const { message, locations, path, extensions } = obj;
  const id = 'react-query-error';
  const err = message ? message : extensions?.code;
  toast.closeAll();
  toast({
    id,
    title: err,
    status: 'error',
    variant: 'subtle',
    isClosable: true,
    position: 'top-right',
  });
  for (let err of graphQLErrors) {
    switch (err.extensions.code) {
      case 'UNAUTHENTICATED':
        window.location.replace('/login');
        localStorage.clear();
        useGlobalStore?.getState()?.resetStore();
        break;
      default:
        break;
    }
  }
}
