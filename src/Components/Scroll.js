import React from 'react';

const Scroll = (prop) =>{
    return(
        <div style={{overflowY:'scroll',height:'800px' ,border:'5px solid black'}}>
            {prop.children}
        </div>
    ) 
}

export default Scroll;


// ,border:'5px solid black',height:'500px'