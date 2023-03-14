import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
function SpeechToText(){

    const [value, setValue] = useState('');
    const { listen, listening, stop } = useSpeechRecognition({
      onResult: (result) => {
        setValue(result);
      },
    });
   
    return(
        <div className='border flex justify-center h-screen text-white bg-gray-800 p-4'>
            <div className='w-screen w-1/3 h-1/3'>
                <h2 className='text-center font-bold'>Speech To Text</h2>
                <textarea  className='bg-gray-500 border border-gray-500 w-full h-full px-2'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
                <div className='flex justify-center'>
                {/* <button className="border rounded-lg px-6 py-4 w-1/2" onMouseDown={listen} onMouseUp={stop}>
                    🎤
                </button> */}
                <button onClick={listen} className="border px-4 rounded m-2">🎤</button>
                <button onClick={stop} className="border px-4 rounded m-2"><i class="fa-solid fa-stop"></i></button>
                <button onClick={()=>{setValue('')}} className="border px-4 rounded m-2"><i class="fa-solid fa-rotate-right"></i></button>
                </div>
              
                {listening && <div>Go ahead I'm listening...</div>}
            </div>
            
        </div>
    )
}

export default SpeechToText