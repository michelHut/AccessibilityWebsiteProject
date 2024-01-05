import React from 'react';
import Nav from './AdminPortaalNav'
import SideBar from '../layouts/ChatSideBar'
import PropTypes from 'prop-types'; 

export default class AdminPortaalLayout extends React.Component {
  render() {
    return (
    <div id='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <Nav />
        </div>
      </div>
      <div className='row'>
        <div className='container-fluid'>

          <div className='row'>
            <SideBar />
            <div className='col-md-10 col-12'>
              <div className='row p-3'>
                <div id='PageContent' className='col-12 text-center'>
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

AdminPortaalLayout.propTypes = {
  children: PropTypes.node, 
};