import React, { useState } from 'react';

const Faq = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(index === activeAccordion ? null : index);
    };

    const accordionData = [
        {
            id: 'flush-collapseOne',
            title: 'Social Reach Pro User Guides',
            content:
                'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item\'s accordion body.',
        },
        {
            id: 'flush-collapseTwo',
            title: 'Social Reach Pro User Faqs',
            content:
                'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the second item\'s accordion body. Let\'s imagine this being filled with some actual content.',
        },
        {
            id: 'flush-collapseThree',
            title: 'Social Reach Pro Others',
            content:
                'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the third item\'s accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.',
        },
    ];

    return (
        <div id="accordionFlushExample">

            {accordionData.map((item, index) => (
                <div
                    key={index}
                    className={`rounded-none w-full border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800`}
                >
                    <h2 className="mb-0" id={`flush-heading${index + 1}`}>
                        <button
                            className={`group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor-none hover:z-2 focus:z-3 focus:outline-none dark:bg-neutral-800 dark:text-white ${activeAccordion === index
                                ? 'bg-white text-primary box-shadow:inset_0_-1px_0_rgba(229,231,235)'
                                : 'bg-transparent text-neutral-500'
                                }`}
                            type="button"
                            data-te-collapse-init
                            data-te-target={`#${item.id}`}
                            aria-expanded={activeAccordion === index}
                            aria-controls={item.id}
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.title}
                            <span
                                className={`-mr-1 ml-auto h-5 w-5 shrink-0 rotate-${activeAccordion === index ? '-180' : '0'
                                    } fill-#336dec transition-transform duration-200 ease-in-out group-${activeAccordion === index ? 'mr-0' : 'rotate-0'
                                    } ${activeAccordion === index ? 'fill-[#212529]' : 'fill-[#336dec]'
                                    } motion-reduce:transition-none dark:${activeAccordion === index
                                        ? 'fill-white'
                                        : 'fill-blue-300 group-[[data-te-collapse-collapsed]]:fill-white'
                                    }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div
                        id={item.id}
                        className={`${activeAccordion === index ? '!visible' : 'hidden'
                            } border-0`}
                        data-te-collapse-item
                        aria-labelledby={`flush-heading${index + 1}`}
                    >
                        <div className="px-5 py-4">{item.content}</div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Faq;
