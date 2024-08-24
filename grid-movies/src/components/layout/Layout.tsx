import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';

const Layout = (props: any) => {
  return (
    <div className="bg-dark-background bg-cover  w-full h-full flex flex-col pt-10 bg-gray-darkest">
      <Header />
      <div className="flex flex-col no-scrollbar h-full">
        <SideBar />
        {props.children}
      </div>
     <Footer />
    </div>
  );
};

export default Layout;