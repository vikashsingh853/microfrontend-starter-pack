
import { useState } from 'react';
import './../../index.css';

const LandingPage = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
    };

    return (<>
        <div className=' flex flex-col items-center justify-center gap-2 px-2 '>
            <h2 className='text-blue-600 text-center'>Welcome to Remote App 1 </h2>
            <p className='text-center'>This is a simple microfrontend exposed via Module Federation.</p>
            <button className='bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>
                You clicked me {count} {count === 1 ? 'time' : 'times'}
            </button>
        </div>
    </>

  )
}

export default LandingPage