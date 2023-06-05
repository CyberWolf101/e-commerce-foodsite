import React from 'react';
import loading from '../assets/orbit.gif'

function Loading(props) {
    return (
        <div>
            <div className='loading'>
                <div>
                    <center>
                        <img src={loading} alt="" className='img-fluid' />
                        <h3 className=''>loading...</h3>
                    </center>

                </div>
            </div>

        </div>
    );
}

export default Loading;