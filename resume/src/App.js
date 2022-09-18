import { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import './App.css';
import Leftbar from './Leftbar';
import Content from './Content';

function App() {

    const componentRef = useRef();

    return (
        /*         <>
                    <ReactToPrint 
                        trigger={() => <button>Print</button>}
                        content={() => componentRef.current}
                    />
                </> */
        <div ref={componentRef} className='resume'>
            <Leftbar />
            <Content />
        </div>
    );
}

export default App;
