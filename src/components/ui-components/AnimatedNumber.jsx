import React from 'react';

const AnimatedNumber = ({number}) => {
    const prevNumberRef = React.useRef(number);
    const [displayNumber, setDisplayNumber] = React.useState(number);
    const animationRef = React.useRef(null);

    React.useEffect(() => {
        if(prevNumberRef.current !== number) {
            const startNumber = prevNumberRef.current;
            const endNumber = number;
            const duration = 300;
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const currentNumber = Math.floor(startNumber + (endNumber - startNumber) * progress);
                setDisplayNumber(currentNumber);
                if(progress < 1) {
                    animationRef.current = requestAnimationFrame(animate);
                } else {
                    prevNumberRef.current = endNumber;
                }
            }
            animationRef.current = requestAnimationFrame(animate);
        }
        return () => cancelAnimationFrame(animationRef.current);
    }, [number]);

    return (
        <span className='animated-number'>{displayNumber}</span>
    );
}

export default AnimatedNumber;