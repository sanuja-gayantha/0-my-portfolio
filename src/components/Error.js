import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Error = () => {
    return(
        <ErrorContainer>
            <section className="section-error">
                <div className="error-center">
                    <h1>Page not found!</h1>
                    <div>
                        <Link to='./' className="btn">Back to home</Link>
                    </div>              
                </div>
            </section>
        </ErrorContainer>
    )
}

const ErrorContainer = styled.section`

.error-center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .error-center h1{
    font-size:var(--big-font-size);
    color: rgb(189, 69, 69);
  }
`

export default Error;