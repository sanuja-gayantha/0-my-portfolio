import React, {useContext, UseReducer, useRef, useState} from 'react';


const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const refContactName = useRef('');
  const refContactSubject = useRef('');
  const refContactEmail = useRef('');
  const refContactMessage = useRef('');
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  return(
    <AppContext.Provider value={{refContactName, refContactSubject, refContactEmail, refContactMessage, alert, showAlert}}>
      {children}
    </AppContext.Provider>
  );
}
// custom hook useGlobalContext
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }