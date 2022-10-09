import React, { useState } from 'react';
import {
  useAddress,
  useDisconnect,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
} from '@thirdweb-dev/react';

const App = () => {
  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();

  const login = useLogin();
  const logout = useLogout();
  const { user } = useUser();

  const [secret, setSecret] = useState();

  const getSecret = async () => {
    const res = await fetch('http:localhost:8000/secret');
    const data = await res.json();
    setSecret(data);
  };

  return (
    <div>
      {address ? (
        <>
          <button onClick={disconnect}>Disconnect Wallet</button>
          <button onClick={() => login()}>Login with Wallet</button>
          <button onClick={logout}>Logout</button>
          <p>Your address: {address}</p>
          <pre>User: {JSON.stringify(user || null)}</pre>
          <br />
          <br />
          <button onClick={getSecret}>Get Secret</button>
          <pre>Secret: {JSON.stringify(secret || null)}</pre>
        </>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
};

export default App;
