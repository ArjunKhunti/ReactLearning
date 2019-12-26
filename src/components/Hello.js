import React from 'react';

const Hello = () => {
    // Using JSX
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Arjun!</h1>
    //     </div>
    // )

    // Without using JSX
    return React.createElement(
        'div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'Hello Arjun')
    );
}

export default Hello;