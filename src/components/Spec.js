import React from "react";

const Spec = () => {
    return (
        <div className='spec'>
            <div className='spec-inner'>
                <div className='spec-header'>
                    <h5>
                        NVIDIA TITAN RTX <br /><span>Features and Specifications</span>
                    </h5>
                </div>
                <ul>
                    <li>
                        <div className='spec-label'>Warranty(months)</div>
                        <div className='spec-content red'>36</div>
                    </li>
                    <li>
                        <div className='spec-label'>Core Clock</div>
                        <div className='spec-content'>1350 MHz</div>
                    </li>
                    <li>
                        <div className='spec-label'>Boost Clock</div>
                        <div className='spec-content'>1770 MHz</div>
                    </li>
                    <li>
                        <div className='spec-label'>Cuda cores</div>
                        <div className='spec-content'>4608</div>
                    </li>
                    <li>
                        <div className='spec-label'>process Technology</div>
                        <div className='spec-content'>12 pm</div>
                    </li>
                    <li>
                        <div className='spec-label'>interface</div>
                        <div className='spec-content'>USB-C | 3 x DisplayPort | HDMI</div>
                    </li>
                    <li>
                        <div className='spec-label'>Characteristic</div>
                        <div className='spec-content'>NVIDIA Tuting GPU Architecture</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Spec;
