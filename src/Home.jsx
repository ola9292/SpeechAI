import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

function Home(){
    const [value, setValue] = useState('');
    const { speak } = useSpeechSynthesis();
  
    return(
        <div className='border flex justify-center h-screen text-white bg-gray-800 p-4'>
       
                <div className='w-screen w-1/3 h-1/3'>
                <h2 className='text-center font-bold'>Text to Speech</h2>
                    <textarea className='bg-gray-500 border border-blue-500 w-full h-full px-2'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
                <br></br>
                <p className='text-center mb-2'>Enter your text and click the button to listen</p>
                <div className='flex justify-center'>
                <button onClick={() => speak({ text: value })} className="border rounded-lg px-6 py-1 w-1/2">Speak</button>
                </div>
               

            </div>
           

     
    </div>
  )
        
    
}

export default Home