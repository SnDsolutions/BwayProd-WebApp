import React, { memo } from 'react';

const RunwayLights = memo(() => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" style={{ willChange: 'transform' }}>
      <div className="runway-lights" />
    </div>
  );
});

RunwayLights.displayName = 'RunwayLights';

export default RunwayLights;