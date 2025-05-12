import React from 'react';

import Workshops from '../components/learn/Workshops';
import Mentorships from '../components/learn/Mentorships';

function Learn() {
  return (
    <div className="learn-page">
      <h2>Learn with Me</h2>
      <Workshops />
      <Mentorships />
    </div>
  );
}

export default Learn;
