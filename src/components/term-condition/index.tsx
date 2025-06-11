'use client'
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

import { term as enBlog } from '@/i18n/messages/en.json';
import { term as ziBlog } from '@/i18n/messages/zi.json';

import bg_gradient from '@/images/term/bg_gradient.png';
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
            <Image src={logo} alt="NewPay Logo" />
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