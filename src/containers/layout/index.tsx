import React from 'react';

type LayoutProps = { children: JSX.Element };

const Layout = ({ children }: LayoutProps) => (
  <div className="w-full h-full flex grow justify-center p-6 md:p-12">{children}</div>
);

export default Layout;
