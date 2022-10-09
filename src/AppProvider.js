import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ChakraProvider } from '@chakra-ui/react';
import chakraTheme from './Theme/chakraTheme';
import { Global, css } from '@emotion/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { onError } from '@apollo/client/link/error';
import { queryErrorHandler } from './components/ErrorToast/ErrorToast';

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none !important;
    box-shadow: none;
  }
`;

function AppProvider({ children }) {
  const httpLink = createHttpLink({
    uri: process.env.BACKEND_URL,
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('access_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...(headers && { ...headers }),
        authorization:
          headers && headers['x-auth-type'] === 'code'
            ? headers.authorization
            : token,
        'x-auth-type':
          headers && headers['x-auth-type'] === 'code' ? 'code' : 'token',
      },
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors.length > 0) {
      const { message, locations, path, extensions } = graphQLErrors[0];
      queryErrorHandler(
        { message, locations, path, extensions },
        graphQLErrors
      );
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const apolloClient = new ApolloClient({
    link: from([errorLink, authLink.concat(httpLink)]),
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={chakraTheme}>
        <GoogleOAuthProvider clientId="663390552587-erbt6bch4a4onfilahm9gtlkevfj9pnb.apps.googleusercontent.com">
          <Global styles={GlobalStyles} />
          {children}
        </GoogleOAuthProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default AppProvider;
