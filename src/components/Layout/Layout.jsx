import React from 'react';
import Header from '../Header/Header';
import './Layout.css'

function Layout(props) {
  return (
    <div className='layout mt-3'>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
