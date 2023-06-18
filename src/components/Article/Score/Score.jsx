import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Importer le style

function CircleProgress({ percentage }) {
  return (
    <div style={{ width: '200px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          // Couleur du chemin et du texte
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
          textColor: '#f88',
          // Couleur de la trace, c'est-à-dire la partie du cercle non remplie
          trailColor: '#d6d6d6',
          // Couleur de fond
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
}

export default CircleProgress;
