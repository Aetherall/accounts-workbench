import AccountsClient from '@accounts/client';
import TransportRest from '@accounts/client-transport-rest';
import CTSLocalStorage from '@accounts/client-token-localstorage';
import Password from '@accounts/client-password';

const client = new AccountsClient({
  transport: new TransportRest(),
  tokenStorage: new CTSLocalStorage(),
  strategies: [new Password()]
})
window.accounts = client
export default client;