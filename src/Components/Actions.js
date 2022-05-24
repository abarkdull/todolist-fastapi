import React from 'react';

const Actions = (props) => {
    return ( 
        <div className='btn-toolbar' style={{ spacing: ''}}>
            <button type='button me-5' className='btn btn-primary' style={{ marginRight: ''}}>Finished</button>
            <button type='button me-5' className='btn btn-danger' style={{ marginLeft: '10px'}}>Delete</button>
        </div>
     );
}
 
export default Actions;