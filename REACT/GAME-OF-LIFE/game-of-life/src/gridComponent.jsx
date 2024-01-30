import react from 'react';

const Grid = ({ cells, onCellClick }) => {
    return (
        <div className="grid">
        {cells.map((cell, index) => (
            <div key={index} className={`cell ${cell.alive? 'alive' : ''}`} onClick={() => onCellClick(index)} />
            ))}
            </div>
            );
            };