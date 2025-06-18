'use client'
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

import { term as enBlog } from '@/i18n/messages/en.json';
import { term as ziBlog } from '@/i18n/messages/zi.json';

import logo from '@/images/term/newpay_square_mark.svg';

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
          className={`w-full text-left ${item.isMain ? 'text-[#FFF] font-medium  py-4' : depth === 1
            ? `px-4 py-3 mb-2 ${isActive ? 'text-white bg-[#FFFFFF]/4 rounded-lg' : 'text-[#AEAEAE] hover:text-[#AEAEAE] hover:bg-[#FFFFFF]/4 hover:rounded-lg '}`
            : depth === 2 ? `ml-8 px-4 py-3 border-l-2 ${isActive ? 'text-[#E77228] border-[#E77228] font-semibold' : 'text-[#AEAEAE] hover:text-[#AEAEAE] hover:bg-[#FFFFFF]/4'}` : ''
            }`}
        >
          <div className="flex items-center justify-between">
            <span className=" text-sm">{item.label}</span>
            {item.hasChildren && (
              <div className="flex-shrink-0 ml-2">
                {isExpanded ? <MdKeyboardArrowDown size={20} /> : <RiArrowRightSLine size={20} />}
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
    <div className="bg-black">
      {/* Header */}
      <div className="text-center md:h-[400px] flex justify-center items-center">
        <div className='m-auto'>
          <Image src={logo} alt="NewPay Logo" className='mx-auto' />
          <h1 style={{
            background: "linear-gradient(93deg, #FFF 21.92%, rgba(255, 255, 255, 0.00) 149.05%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
            className="text-7xl md:text-5xl font-semibold text-[#AEAEAE] pt-10">
            {termData.header.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-8 text-sm">
        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="rounded-lg overflow-hidden">
            <nav className="space-y-0">
              {sidebarItems.map((item) => renderSidebarItem(item))}
            </nav>

          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          <div className="bg-opacity-40 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-[#FFF] mb-6">
              {termData.mainContent.title}
            </h2>

            <p className="text-gray-300 text-sm mb-8">
              {termData.mainContent.lastUpdated}
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#FFF] mb-4">
                {mainContent.introSection.title}
              </h3>

              {mainContent.introSection.paragraphs.map(p => {
                return (
                  <p key={p}
                    className="text-[#AEAEAE] mb-4 leading-relaxed text-sm">
                    {p}
                  </p>
                );
              })}
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-[#FFF] mb-4">
                  {generalTerms.title}
                </h3>

                <div className="space-y-6">
                  {
                    generalTerms.sections.map((section, index) => (
                      <div className="text-sm" key={index}>
                        <h4 className="font-semibold text-[#FFF] mb-3">{section.title}</h4>
                        {section.content.map((c, idx) => {
                          return (
                            <>
                              <p key={idx} className="text-[#AEAEAE] leading-relaxed mb-4">
                                {c.paragraph}
                              </p>
                              {c.subItems && c.subItems.map((subItem, subInx) => (
                                <p key={subInx} className="text-[#AEAEAE]">{subItem}</p>
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
    </div >
  );
}