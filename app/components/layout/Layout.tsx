import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import NProgress from 'nprogress';
import NProgressContainer from 'nextjs-progressbar';
import Meta, { IMeta } from '@/utils/meta/Meta';
import Header from './Header/Header';
import { Router } from 'next/router';

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      setLoading(true);
    };

    const handleComplete = () => {
      NProgress.done();
      setLoading(false);
    };

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <>
      <Meta {...meta} />
      <Header />
      <div>
        <section>
          <main>
            <NProgressContainer
              color='black'
              options={{ showSpinner: true, easing: 'ease' }}
            />
            {loading && <div>Loading...</div>}
            {children}
          </main>
        </section>
      </div>
    </>
  );
};

export default Layout;