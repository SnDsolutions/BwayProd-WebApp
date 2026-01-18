import React from 'react';
import { AnimatePresence } from 'framer-motion';
import PortfolioV2Card from './PortfolioV2Card';

/**
 * PortfolioV2Grid - Grid bento responsive con CSS Grid
 * que respeta ratios horizontales/verticales
 */
const PortfolioV2Grid = ({ items, onItemClick, detectedRatios = {}, onRatioDetected }) => {
  // Función para obtener grid spans basado en ratio
  const getItemSpans = (itemId) => {
    const ratio = detectedRatios[itemId];
    
    if (!ratio) {
      return { colSpan: 1, rowSpan: 1, colSpanMd: 1, rowSpanMd: 1 };
    }

    if (ratio >= 1.3) {
      // Horizontal (wide) - 2 columnas, 1 fila (solo en desktop)
      return { colSpan: 1, rowSpan: 1, colSpanMd: 2, rowSpanMd: 1 };
    } else if (ratio <= 0.8) {
      // Vertical (tall) - 1 columna, 2 filas (solo en desktop)
      return { colSpan: 1, rowSpan: 1, colSpanMd: 1, rowSpanMd: 2 };
    } else {
      // Cuadrado o casi cuadrado - 1 columna, 1 fila
      return { colSpan: 1, rowSpan: 1, colSpanMd: 1, rowSpanMd: 1 };
    }
  };

  return (
    <>
      <style>{`
        .pf2-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          grid-auto-flow: dense;
          gap: 1.5rem;
          grid-auto-rows: minmax(280px, auto);
        }
        .pf2-grid-item {
          min-height: 280px;
        }
        @media (min-width: 768px) {
          .pf2-grid-item[data-col-md="2"] {
            grid-column: span 2 !important;
          }
          .pf2-grid-item[data-row-md="2"] {
            grid-row: span 2 !important;
          }
        }
      `}</style>
      <div className="pf2-grid w-full">
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => {
            const { colSpan, rowSpan, colSpanMd, rowSpanMd } = getItemSpans(item.id);
            
            return (
              <div
                key={item.id}
                className="pf2-grid-item"
                style={{
                  gridColumn: `span ${colSpan}`,
                  gridRow: `span ${rowSpan}`
                }}
                data-col-md={colSpanMd}
                data-row-md={rowSpanMd}
              >
                <PortfolioV2Card
                  item={item}
                  onClick={onItemClick}
                  index={index}
                  detectedRatio={onRatioDetected}
                />
              </div>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
};

export default PortfolioV2Grid;
