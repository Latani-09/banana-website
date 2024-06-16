import React from 'react';
import { useInView } from 'react-intersection-observer';

const withViewport = (WrappedComponent, options = { threshold: 0.5, triggerOnce: true }) => {
  return (props) => {
    const { ref, inView } = useInView(options);

    return (
      <div ref={ref}>
        <WrappedComponent inView={inView} {...props} />
      </div>
    );
  };
};

export default withViewport;
