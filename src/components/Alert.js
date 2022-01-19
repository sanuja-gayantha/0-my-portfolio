import React, { useEffect } from 'react';
import styled from 'styled-components';

const Alert = ({ type, msg, removeAlert}) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 5000);
    return () => clearTimeout(timeout);
  }, [type]);

  return (
    <AlertContainer>
          <div className={`alert-${type}`}>{msg}</div>
    </AlertContainer>
    )
};

const AlertContainer = styled.div`

.alert-danger{
  color: red;
  font-size: var(--normal-font-size);
}
.alert-success{
  color:green;
  font-size: var(--normal-font-size);
}
`

export default Alert;
