import React from 'react';
import banner from '../../../images/welcome _banner.png'

function WelcomeBanner() {
  return (
    <div className="relative  p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Background illustration */}
      <div className="absolute right-0 top-0 -mt-4  pointer-events-none hidden xl:block" aria-hidden="true">
        <img src={banner} alt="" />
      </div>

      {/* Content */}
      <div className="relative"

      >
        <h1 className="text-2xl md:text-3xl text-white dark:text-black font-bold mb-1">Good afternoon, Social reach Pro. 👋</h1>
        <p className="text-white dark:text-black">Here is what’s happening with your projects today:</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
