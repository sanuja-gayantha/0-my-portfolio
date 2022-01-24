import React, {useContext, UseReducer, useRef, useState, useEffect} from 'react';
import {links} from './data/data';
import {Link} from 'react-router-dom';

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

  // useEffect(() => {
  //   const event = window.addEventListener('scroll', () => {
  //     return(
  //       <Link to='/about'></Link>
  //     )
          
  //       })
  //   return () => window.removeEventListener('scroll', event);
  //   // eslint-disable-next-line
  // }, [])


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