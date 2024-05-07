import React, { useState } from 'react';

function ImageWithTooltip({ src, alt, tooltipText }) {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <img 
                src={src} 
                alt={alt} 
                onMouseEnter={() => setShowTooltip(true)} 
                onMouseLeave={() => setShowTooltip(false)}
            />
            {showTooltip && (
                <div style={{
                    position: 'absolute',
                    bottom: '100%', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    padding: '5px',
                    marginBottom: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    borderRadius: '5px',
                    pointerEvents: 'none',
                    width: '10rem',
                    fontSize:'0.625rem'
                    
                }}>
                    {tooltipText}
                </div>
            )}
        </div>
    );
}

export default ImageWithTooltip;
