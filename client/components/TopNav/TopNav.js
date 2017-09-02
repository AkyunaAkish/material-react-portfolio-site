import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toggleMobileView from './redux/actions/toggleMobileView';

import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';

class TopNav extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.props.toggleMobileView($(window).width());
    });
  }

  renderIconLeft() {
    return (
      <Link to='/' className='top-nav-logo-link'>
        <img className='top-nav-logo' src='/images/akyunatransparent.png' />
      </Link>
    );
  }

  renderChildren() {
    if(this.props.showMobileView) {
      return [];
    } else {
      return [
        <Tabs key='tabs' className='top-nav-tabs'>
          <Tab className='top-nav-tab' label='About' />
          <Tab className='top-nav-tab' label='Resumé' />
          <Tab className='top-nav-tab' label='Contact' />
        </Tabs>
      ];
    }
  }

  render() {
    return (
      <AppBar className='top-nav'
              iconStyleLeft={{ marginTop: 0 }}
              iconElementLeft={ this.renderIconLeft() }
              children={ this.renderChildren() } />
    );
  }
}

function mapStateToProps(state) {
  return {
    showMobileView: state.topNav.showMobileView
  };
}

export default connect(mapStateToProps, { toggleMobileView })(TopNav);
