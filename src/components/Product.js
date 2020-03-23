import React from "react";
import ProductImage from "../assets/titanRTX5.png";
import ProductImageTwo from "../assets/titanRTX4.png";

//svgs
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Chevron } from "../assets/chevron.svg";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";

const Product = () => {
    return (
        <div className='product'>
            <div className='product-inner'>
                <div className='product-content'>
                    <div className='product-content-inner'>
                        <h4>Deep learning AI</h4>
                        <h1>NVIDIA Titan RTX</h1>
                        <p>
                            The most demanding users need the best tools. TITAN RTX is build on NVIDIA's Turing GPU
                            architecture and includes the latest Tensor Core and RT Core technology for accelerating
                            AI and ray tracing. Its also supported by NVIDIA drivers and SDKs so that developers,
                            research, and creators can work faster and deliver better results.
                        </p>
                        <div className='btn-row'>
                            <button>Buy Now 33.999 NOK</button>
                            <DownArrow />
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-slide-enlarge'>
                <div className='background'></div>
                <div className='product-drag-header'>
                    <div className='company-name'>NVIDIA</div>
                    <div className='close'>
                        <Close />
                    </div>
                </div>
                <div className='product-container'>
                    <div className='product-image'>
                        <img src={ProductImageTwo} alt='product' />
                        <img src={ProductImage} alt='product' />
                    </div>
                </div>
                <div className='product-drag'>
                    <div className='product-drag-inner'>
                        <div className='product-drag-label'>
                            <h6>
                                <Chevron />
                                Drag To Enlarge
              </h6>
                        </div>
                        <div className='product-drag-progress-background'>
                            <div className='product-drag-progress'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;