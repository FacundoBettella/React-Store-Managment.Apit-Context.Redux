import React, { useContext, useState, createContext } from "react";

const AppContext = createContext();

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext debe ser usado dentro de AppProvider!");
  return context;
};

const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Saludos desde el context!");

  const value = {
    count,
    setCount,
    message,
    setMessage,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const Message = () => {
  const { message } = useAppContext();

  // const message = "Saludos por fuera del context!"
  const getColor = () => Math.floor(Math.random() * 255);
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };

  console.log("Messege component Re-renders");
  return (
    <div>
      <h4 style={style}>{message}</h4>
    </div>
  );
};

const IndependentMessage = () => {
  const getColor = () => Math.floor(Math.random() * 255);

  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };

  console.log("IndependentMessage component Re-renders");

  return (
    <div>
      <h4 style={style}>Mensaje independiente del context!</h4>
    </div>
  );
};

const Count = () => {
  const { count, setCount } = useAppContext();
  return (
    <div>
      <h3>Cuenta actual del context: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

const AppReRenders = () => {
  return (
    <div>
      <AppProvider>
        <h2>Re-renders! 😩</h2>
        <Message />
        <Message />
        <Message />
        {/* <IndependentMessage /> */}
        <Count />
      </AppProvider>
    </div>
  );
};

export default AppReRenders;
