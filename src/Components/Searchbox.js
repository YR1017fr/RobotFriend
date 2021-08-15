import React from 'react';

const Searchbox = ({searchfield,Searchchange}) => { 
    return(
        <div  className='pa2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue' 
            type='search' 
            placeholder='search robots'
            onChange={Searchchange} 
            />
        </div>
    )
}
export default Searchbox;