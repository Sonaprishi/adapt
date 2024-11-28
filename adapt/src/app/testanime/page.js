"use client"; // Use correct syntax for pragma
import { motion } from 'framer-motion';

const Animationpage = () => {

    const variants ={
        variant1: { x: 400, y: 300, opacity: 0.5, transition: { duration: 4 } }, // Correct syntax for transition
        variant2: { x: 100, y: -300, rotation: 90 }
    };

    return (
        <div className="h-full flex items-center justify-center">
            <motion.div
                className="w-96 h-96 bg-black rounded" // Changed bg-black-400 to bg-black
                variants={variants}
                animate="variant1"
            >
            
            </motion.div>
        </div>
    );
};

export default Animationpage;
