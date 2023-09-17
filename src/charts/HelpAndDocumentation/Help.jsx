import React, { useState } from 'react';
import Faq from './Faq';

const Help = () => {
    const [activeTab, setActiveTab] = useState('tabs-home03');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className='flex flex-col gap-2 items-center'>
            <ul className="mr-4 flex  list-none  flex-wrap pl-0" role="tablist">
                <li role="presentation" className="flex-grow text-center">
                    <a
                        href="#tabs-home03"
                        className={`my-2 block ${activeTab === 'tabs-home03'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-neutral-800'
                            } border-x-0 border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:border-transparent hover:bg-neutral-100 focus:border-transparent focus:outline-none`}
                        onClick={() => handleTabClick('tabs-home03')}
                        role="tab"
                        aria-controls="tabs-home03"
                        aria-selected={activeTab === 'tabs-home03'}
                    >
                        User guides
                    </a>
                </li>
                <li role="presentation" className="flex-grow text-center">
                    <a
                        href="#tabs-profile03"
                        className={`my-2 block ${activeTab === 'tabs-profile03'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-neutral-800'
                            } border-x-0 border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:border-transparent hover:bg-neutral-100 focus:border-transparent focus:outline-none`}
                        onClick={() => handleTabClick('tabs-profile03')}
                        role="tab"
                        aria-controls="tabs-profile03"
                        aria-selected={activeTab === 'tabs-profile03'}
                    >
                        FAQs
                    </a>
                </li>
                <li role="presentation" className="flex-grow text-center">
                    <a
                        href="#tabs-messages03"
                        className={`my-2 block ${activeTab === 'tabs-messages03'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-neutral-800'
                            } border-x-0 border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:border-transparent hover:bg-neutral-100 focus:border-transparent focus:outline-none`}
                        onClick={() => handleTabClick('tabs-messages03')}
                        role="tab"
                        aria-controls="tabs-messages03"
                        aria-selected={activeTab === 'tabs-messages03'}
                    >
                        Documentation for administrators.

                    </a>
                </li>

            </ul>
            <div className="my-2">
                <div
                    className={`${activeTab === 'tabs-home03' ? 'block' : 'hidden'
                        } opacity-100 transition-opacity duration-150 ease-linear`}
                    id="tabs-home03"
                    role="tabpanel"
                    aria-labelledby="tabs-home-tab03"
                >
                    Social Reach pro create account eith facebook.
                </div>
                <div
                    className={`${activeTab === 'tabs-profile03' ? 'block' : 'hidden'
                        } opacity-100 transition-opacity duration-150 ease-linear`}
                    id="tabs-profile03"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab03"
                >
                    <Faq />
                </div>
                <div
                    className={`${activeTab === 'tabs-messages03' ? 'block' : 'hidden'
                        } opacity-100 transition-opacity duration-150 ease-linear`}
                    id="tabs-messages03"
                    role="tabpanel"
                    aria-labelledby="tabs-messages-tab03"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam rerum quos consectetur, delectus dolores quisquam asperiores deleniti tempora voluptatum commodi?
                </div>

            </div>
        </div>
    );
};

export default Help;
