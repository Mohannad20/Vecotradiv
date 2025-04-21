import { motion, useMotionValue, animate } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';

const InfiniteSlider = ({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className = '',
}) => {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  // useMeasure instead of manual ResizeObserver
  const [ref, bounds] = useMeasure();
  const size = direction === 'horizontal' ? bounds.width : bounds.height;

  useEffect(() => {
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;
    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    let controls;

    if (isTransitioning) {
      const remaining = Math.abs(translation.get() - to);
      const transitionDuration = remaining / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prev) => prev + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => translation.set(from),
      });
    }

    return () => controls?.stop();
  }, [
    key,
    translation,
    currentSpeed,
    size,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className} scrollbar-hide`}
    >
      <motion.div
        ref={ref}
        className={`flex w-max ${direction === 'vertical' ? 'flex-col' : 'flex-row'}`}
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexWrap: 'nowrap',
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
