import React, { useState } from 'react';

const Context = React.createContext();

function ContextProvider(props) {
  const [theColor, setTheColor] = useState('white');
  console.log(theColor);

  return (
    <Context.Provider
      value={{
        theColor,
        setTheColor,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
