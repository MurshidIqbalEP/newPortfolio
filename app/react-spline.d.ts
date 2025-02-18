declare module '@splinetool/react-spline' {
    import React from 'react';
  
    interface SplineProps {
      scene: string;
      onLoad?: (spline: any) => void;
      [key: string]: any;
    }
  
    const Spline: React.FC<SplineProps>;
  
    export default Spline;
  }
  