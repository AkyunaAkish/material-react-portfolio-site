import React, { PureComponent } from 'react';
import BioHeader from '../BioHeader/BioHeader.js';

class Landing extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='landing-container'>
        <BioHeader />
      </div>
    );
  }
}

export default Landing;
