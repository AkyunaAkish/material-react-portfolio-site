import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toggleMobileView from './redux/actions/toggleMobileView';

import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class TopNav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rightIconOpen: false
    };
  }

  componentDidMount() {
    this.props.toggleMobileView($(window).width());

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

  handleRightIconClick() {
    this.setState({
      rightIconOpen: !this.state.rightIconOpen
    });
  }

  renderIconRight(props) {
    if(this.props.showMobileView) {
      return (
        <div className={ `hamburger hamburger--spin js-hamburger ${ this.state.rightIconOpen ? 'is-active' : '' }` } onClick={ () => this.handleRightIconClick() }>
          <div className='hamburger-box'>
            <div className='hamburger-inner'></div>
          </div>
        </div>
    );
    } else {
      return <span></span>;
    }
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
              iconElementRight={ this.renderIconRight() }
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
