import React from 'react';

const GoogleAdsConversionTracking = () => {
  return (
    <>
         <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11463168320"></script>
        <script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11463168320');
            `}
        </script>
    </>
  )
};

export default GoogleAdsConversionTracking;
