import React from 'react';

const Banner = (props) => {
    return ( 
        <div className='row' style={{ textAlign: 'center', paddingTop: '50px'}}>
            <h1>{props.title}</h1>
        </div>
     );
}
 
export default Banner;