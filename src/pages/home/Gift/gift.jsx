import { useState } from 'react';
import styles from './gift.css';
import { TypeAnimation } from 'react-type-animation';

function Gift() {
    const [isDisplay, setIsDisplay] = useState(false)
    return (
        <div>
            <div className="container">
                <div className="back">
                    <div className="topTriangle"></div>
                </div>

                <div className="card" onMouseEnter={() => {setIsDisplay(true)}} onMouseLeave={() => {setIsDisplay(false)}}>
                    {/* <div className="title1">♥</div> */}
                    {/* <div className="desc">Love From India</div> */}
                    <div>
                        {
                            isDisplay ? 
                            <TypeAnimation
                                sequence={[
                                    'hi',
                                    1000,
                                ]}
                                wrapper="span"
                                cursor={false}
                                repeat={Infinity}
                                style={{ fontSize: '24px', display: 'inline-block', textAlign: 'center' }}
                            />
                            : ''
                        }
                    </div>
                </div>


                <div className="front_container">
                    <div className="front"></div>
                </div>
            </div>
        </div>
    );
}

export default Gift;
