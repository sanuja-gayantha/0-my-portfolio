import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Updating = () => {
    return(
        <UpdatingContainer>
            <section className="section-update">
                <div className="update-center">
                    <h1>Page is updating!</h1>
                    <div>
                        <Link to='./' className="btn">Back to home</Link>
                    </div>              
                </div>
            </section>
        </UpdatingContainer>
    )
}

const UpdatingContainer = styled.section`

.update-center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .update-center h1{
    font-size:var(--big-font-size);
    color: rgb(189, 69, 69);
  }
`

export default Updating;