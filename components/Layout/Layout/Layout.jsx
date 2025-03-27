import React, { Fragment } from 'react';
import SiteHeader from '../SiteHeader/SiteHeader';
import Footer from '../Footer/Footer';
export default function Layout(props) {
  return (
    <Fragment>
      <SiteHeader />
      {props.children}
      <Footer />
    </Fragment>
  );
}
