import React from 'react';
import websitePageHOC from '../../src/components/wrappers/hoc';

function LoginScreen() {
  return (
    <div>
      Página de Login
    </div>
  );
}

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});
