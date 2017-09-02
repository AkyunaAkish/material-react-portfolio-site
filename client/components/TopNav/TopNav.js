import React, { PureComponent } from 'react';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';

class TopNav extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar className='top-nav'
              iconStyleLeft={{ marginTop: 0 }}
              iconElementLeft={ <img className='top-nav-logo' src='/images/akyunatransparent.png' /> }
              children={[
                <Tabs key='tabs'
                      className='top-nav-tabs'
                      inkBarStyle={{ borderWidth: 4 }}>
                  <Tab className='top-nav-tab' label='About' />
                  <Tab className='top-nav-tab' label='Resumé' />
                  <Tab className='top-nav-tab' label='Contact' />
                </Tabs>
              ]} />
    );
  }
}

export default TopNav;
