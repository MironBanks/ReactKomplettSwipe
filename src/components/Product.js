import React, { useEffect, useState } from "react";
import ProductImage from "../assets/titanRTX5.png";
import ProductImageTwo from "../assets/titanRTX4.png";
import {
    motion,
    useSpring,
    useTransform,
    AnimatePresence
} from "framer";

//svgs
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Chevron } from "../assets/chevron.svg";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";

const Product = () => {
    const ease = [0.6, 0.05, -0.01, 0.99];
    let x = useSpring(0, { stiffness: 300, damping: 200, ease: ease });
    const fadeIn = useTransform(x, [-100, 0], [1, 0]);
    const fadeOut = useTransform(x, [-60, 0], [0, 1]);
    const scale = useTransform(x, [-100, 0], [1.25, 1]);
    const width = useTransform(x, [-1200, 0], [350, 0]);
    const up = useTransform(x, [-100, 0], [-100, 0]);
    const down = useTransform(x, [-100, 0], [100, 0]);

    //state
    const [state, setState] = useState(false);

    //scrolltargets
    let targetElement = document.querySelector("html");

    // Update the state to check if the user has dragged the product
    useEffect(() => {
        x.onChange(() => {
            x.get() > -100 ? setState(false) : setState(true);
        });
    }, [x]);

    //Setting body scroll
    useEffect(() => {
        state
            ? targetElement.classList.add("no-scroll")
            : targetElement.classList.remove("no-scroll");
    });

    // Closing the drag product
    const closeProductDrag = () => {
        x.stop();
        x.set(0);
    };

    return (
        <div className='product'>
            <div className='product-inner'>
                <div className='product-content'>
                    <motion.div
                        style={{ translateY: up }}
                        className='product-content-inner'>
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
                    </motion.div>
                </div>
            </div>
            <div className='product-slide-enlarge'>
                <motion.div
                    className='background'
                    style={{ opacity: fadeIn }}></motion.div>
                {state ? (
                    <AnimatePresence>
                        <motion.div
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            transition={{ ease: ease }}
                            className='product-drag-header'>
                            <div className='company-name'>NVIDIA</div>
                            <div onClick={closeProductDrag} className='close'>
                                <Close />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                ) : (
                        <AnimatePresence></AnimatePresence>
                    )}
                <div className='product-container'>
                    <motion.div
                        drag='x'
                        style={{ x, scale }}
                        dragElastic={0.1}
                        dragConstraints={{ left: -1200, right: 0 }}
                        className='product-image'>
                        <img src={ProductImageTwo} alt='product' />
                        <img src={ProductImage} alt='product' />
                    </motion.div>
                </div>
                <motion.div style={{ paddingBottom: down }} className='product-drag'>
                    <div className='product-drag-inner'>
                        <div className='product-drag-label'>
                            <motion.h6 style={{ x, opacity: fadeOut }}>
                                <Chevron />
                                Drag To Enlarge
              </motion.h6>
                        </div>
                        <div className='product-drag-progress-background'>
                            <motion.div
                                style={{ width }}
                                className='product-drag-progress'></motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Product;
