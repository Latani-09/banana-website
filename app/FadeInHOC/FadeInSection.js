import React from 'react';

const FadeInSection = ({ inView, children }) => {
  return (
    <div className={`transform transition-transform duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} >
    {/*  className={`opacity-0 transition-opacity duration-500 ${inView ? 'opacity-100' : ''}`}*/}
      {children}
    </div>
  );
};

export default FadeInSection;
