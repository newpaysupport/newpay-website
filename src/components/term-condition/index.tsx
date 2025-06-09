import bg_gradient from '@/images/bg_gradient.png';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

import { term as enBlog } from '@/i18n/messages/en.json';
import { term as ziBlog } from '@/i18n/messages/zi.json';

export default function TermsAndConditions() {

  // State to manage expanded sections
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'general': true,
    'newpay-card': true
  });

  // State to manage the active section 
  const [activeSection, setActiveSection] = useState<string>('hongkong-card');

  //toggle the expanded state of a section
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  //handle section click and set active section
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  const locale = useLocale();
  const termData = locale === 'en' ? enBlog : ziBlog;
  const sidebarItems = termData.sidebarItems;
  const mainContent = termData.mainContent;
  const generalTerms = termData.mainContent.generalTerms;

  // Render sidebar items recursively
  const renderSidebarItem = (item: any, depth = 0) => {
    const isActive = activeSection === item.id;
    const isExpanded = expandedSections[item.id];

    return (
      <div key={item.id}>
        <button
          onClick={() => {
            if (item.hasChildren) {
              toggleSection(item.id);
              handleSectionClick(item.id);
            } else {
              handleSectionClick(item.id);
            }
          }}
          className={`w-full text-left ${item.isMain
            ? 'text-white font-medium px-6 py-3'
            : depth === 1
              ? `px-6 py-3 ${isActive
                ? 'text-orange-400 border-l-4 border-orange-400'
                : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`
              : depth === 2
                ? `px-8 py-2 border-l-4 ${isActive
                  ? 'text-orange-400 border-orange-400'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`
                : 'text-gray-300 hover:text-white hover:bg-gray-800 px-6 py-3'
            }`}
        >
          <div className="flex items-center justify-between">
            <span className="leading-tight text-sm">{item.label}</span>
            {item.hasChildren && (
              <div className="flex-shrink-0 ml-2">
                {isExpanded ? <MdKeyboardArrowDown size={16} /> : <RiArrowRightSLine size={16} />}
              </div>
            )}
          </div>
        </button>

        {/* Render children if expanded */}
        {item.hasChildren && isExpanded && item.children && (
          <div className="bg-gray-850">
            {item.children.map((child: any) => renderSidebarItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <div className="relative text-center">
        <Image src={bg_gradient} alt='bg_gradient' width={400} height={400} className='w-full h-full' />
        <div className='absolute right-[30%] left-[30%] top-[35%]'>
          <div className="flex justify-center items-center mb-6">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_i_461_3682)">
                <path d="M0 33C0 19.251 0 12.3765 3.50136 7.55727C4.63215 6.00087 6.00087 4.63215 7.55727 3.50136C12.3765 0 19.251 0 33 0H47C60.749 0 67.6235 0 72.4427 3.50136C73.9991 4.63215 75.3678 6.00087 76.4986 7.55727C80 12.3765 80 19.251 80 33V47C80 60.749 80 67.6235 76.4986 72.4427C75.3678 73.9991 73.9991 75.3678 72.4427 76.4986C67.6235 80 60.749 80 47 80H33C19.251 80 12.3765 80 7.55727 76.4986C6.00087 75.3678 4.63215 73.9991 3.50136 72.4427C0 67.6235 0 60.749 0 47V33Z" fill="#FF6910" />
              </g>
              <path d="M33 0.416992H47C53.8838 0.416992 59.0134 0.416889 63.0254 0.851562C66.7791 1.25827 69.5109 2.04216 71.7549 3.53125L72.1982 3.83887C73.5289 4.80571 74.7193 5.95035 75.7363 7.24023L76.1611 7.80176C77.8516 10.1285 78.7146 12.9705 79.1484 16.9746C79.5831 20.9866 79.583 26.1162 79.583 33V47C79.583 53.8838 79.5831 59.0134 79.1484 63.0254C78.7417 66.7791 77.9578 69.5109 76.4688 71.7549L76.1611 72.1982C75.1943 73.5289 74.0497 74.7193 72.7598 75.7363L72.1982 76.1611C69.8715 77.8516 67.0295 78.7146 63.0254 79.1484C59.0134 79.5831 53.8838 79.583 47 79.583H33C26.1162 79.583 20.9866 79.5831 16.9746 79.1484C13.2209 78.7417 10.4891 77.9578 8.24512 76.4688L7.80176 76.1611C6.47111 75.1943 5.28067 74.0497 4.26367 72.7598L3.83887 72.1982C2.14842 69.8715 1.2854 67.0295 0.851562 63.0254C0.416889 59.0134 0.416992 53.8838 0.416992 47V33C0.416992 26.1162 0.416889 20.9866 0.851562 16.9746C1.25827 13.2209 2.04216 10.4891 3.53125 8.24512L3.83887 7.80176C4.80571 6.47111 5.95035 5.28067 7.24023 4.26367L7.80176 3.83887C10.1285 2.14842 12.9705 1.2854 16.9746 0.851562C20.9866 0.416889 26.1162 0.416992 33 0.416992Z" stroke="url(#paint0_linear_461_3682)" stroke-opacity="0.12" stroke-width="0.833333" />
              <path d="M29.0418 16.0952C30.692 16.0952 32.0297 17.4331 32.0298 19.0833V29.6794C32.082 30.7085 32.9549 30.9211 33.4083 30.6509L46.7874 17.2749C46.9854 17.084 47.3882 16.7617 47.9644 16.5009L47.9666 16.4999C48.4145 16.2975 48.967 16.1323 49.6097 16.0952H60.9154C62.5656 16.0952 63.9033 17.4331 63.9034 19.0833V45.4931C63.9034 47.0781 63.2737 48.5982 62.153 49.719L52.0484 59.8102C51.8005 60.1013 50.5822 60.9949 49.1773 60.2293C48.2877 59.7445 48.0403 59.0267 47.9666 58.5236V36.0147C47.7718 33.0862 45.2414 32.1602 43.695 32.0315H35.6898C34.1514 32.0074 32.315 32.6725 32.0298 35.4852V60.9168C32.0298 62.5671 30.692 63.9048 29.0418 63.9049H19.0818C17.4315 63.9048 16.0938 62.5671 16.0938 60.9168V49.2063C16.0938 48.4139 16.4086 47.6537 16.9689 47.0933L30.2623 33.7975C31.2077 32.4816 30.2682 32.0898 29.6552 32.0315H19.0818C17.4315 32.0315 16.0938 30.6937 16.0938 29.0435V23.3091C16.0938 22.5167 16.4086 21.7566 16.9689 21.1963L21.1947 16.9704C21.7551 16.4101 22.5151 16.0952 23.3075 16.0952H29.0418Z" fill="white" />
              <defs>
                <filter id="filter0_i_461_3682" x="0" y="-5" width="80" height="85" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feMorphology radius="0.833333" operator="dilate" in="SourceAlpha" result="effect1_innerShadow_461_3682" />
                  <feOffset dy="-5" />
                  <feGaussianBlur stdDeviation="3.33333" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.32 0" />
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_461_3682" />
                </filter>
                <linearGradient id="paint0_linear_461_3682" x1="40" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="text-7xl md:text-5xl font-semibold text-white mb-4">
            {termData.header.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-8 mt-6 text-sm">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="rounded-lg overflow-hidden">
            <nav className="space-y-0">
              {sidebarItems.map((item) => renderSidebarItem(item))}
            </nav>

          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          <div className="bg-opacity-40 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-white mb-6">
              {termData.mainContent.title}
            </h2>

            <p className="text-gray-300 text-sm mb-8">
              {termData.mainContent.lastUpdated}
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {mainContent.introSection.title}
              </h3>

              {mainContent.introSection.paragraphs.map(p => {
                return (
                  <p key={p}
                    className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {p}
                  </p>
                );
              })}
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {generalTerms.title}
                </h3>

                <div className="space-y-6">
                  {
                    generalTerms.sections.map((section, index) => (
                      <div className="text-sm" key={index}>
                        <h4 className="font-semibold text-white mb-3">{section.title}</h4>
                        {section.content.map((c, idx) => {
                          return (
                            <>
                              <p key={idx} className="text-gray-300 leading-relaxed mb-4">
                                {c.paragraph}
                              </p>
                              {c.subItems && c.subItems.map((subItem, subInx) => (
                                <p key={subInx} className="text-gray-300">{subItem}</p>
                              ))}
                            </>
                          )
                        })}
                      </div>
                    ))
                  }
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}