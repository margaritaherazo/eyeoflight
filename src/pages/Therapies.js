import React from 'react';

import Reiki from '../components/therapies/Reiki';
import AuraReading from '../components/therapies/Aurareading';
import Regression from '../components/therapies/Regression';

function Therapies() {
  return (
    <div className="therapies-page">
      <h2>Therapies</h2>
      <Reiki />
      <AuraReading />
      <Regression />
    </div>
  );
}

export default Therapies;
