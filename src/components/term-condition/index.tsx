'use client'
import { term as enBlog } from '@/i18n/messages/en.json';
import { term as ziBlog } from '@/i18n/messages/zi.json';
import bg_term from '@/images/faq-help/gradient.png';
import logo from '@/images/term/newpay_square_mark.svg';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import TermContent from './term-content';
import TermGeneral from './term-general';

export default function TermsAndConditions() {
  const generalChildrenIds = ['general', 'general-1', 'general-2', 'general-3', 'general-4', 'general-5', 'general-6', 'general-7', 'general-8', 'general-9', 'general-10', 'general-11', 'general-12', 'general-13', 'general-14'];
  const idSubitems = ['general-1-1', 'general-1-2', 'general-1-3', 'general-1-4', 'general-2-1', 'general-2-2', 'general-2-3', 'general-2-4', 'general-3-1', 'general-3-2', 'general-3-3', 'general-3-4', 'general-3-5', 'general-4-1', 'general-4-2', 'general-4-3', 'general-4-4', 'general-4-5'];
  const idPivacy = ['privacy-1', 'privacy-2', 'privacy-3', 'privacy-4', 'privacy-5', 'privacy-6', 'privacy-7', 'privacy-8', 'privacy-9', 'privacy-10', 'privacy-11', 'privacy-12', 'privacy-13', 'privacy-14'];
  const idCommission = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'general': false,
    'privacy': false,
    'commission': false
  });

  const [activeSection, setActiveSection] = useState<string>('general');
  const [displaySection, setDisplaySection] = useState<string>('general');
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const isOpen = prev[section];
      if (isOpen) {
        return {}
      }
      return {
        [section]: true
      };
    })
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (generalChildrenIds.includes(sectionId)) {
      setDisplaySection('general');
    } else if (idPivacy.includes(sectionId)) {
      setDisplaySection('privacy');
    } else if (idCommission.includes(sectionId)) {
      setDisplaySection('commission');
    } else {
      setDisplaySection(sectionId);
    }
    setPendingScrollId(sectionId);
  };

  const locale = useLocale();
  const termData = locale === 'en' ? enBlog : ziBlog;
  const sidebarItems = termData.sidebarItems;
  const mainContent = termData.mainContent;
  const currentSectionContent = (mainContent as Record<string, any>)[displaySection];

  useEffect(() => {
    if (!pendingScrollId) return;
    const scroll = () => {
      const el = document.getElementById(pendingScrollId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setPendingScrollId(null);
      } else {
        setTimeout(scroll, 100);
      }
    };
    scroll();
  }, [pendingScrollId]);

  //sidebar scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const allIds = [
        ...generalChildrenIds,
        ...idSubitems,
        ...idPivacy,
        ...idCommission,
      ];

      let foundId: string | null = null;
      for (const id of allIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight * 0.4) {
            foundId = id;
            break;
          }
        }
      }
      if (foundId) {
        setActiveSection(foundId);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  // Wheel event handling for sidebar
  useEffect(() => {
    const sidebar = document.querySelector('.sidebar-container') as HTMLElement | null;
    if (!sidebar) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();
      sidebar.scrollTop += event.deltaY * 1.5;
    };

    sidebar.addEventListener('wheel', handleWheel, { passive: false });

    // no scroll body when on sidebar
    const handleMouseEnter = () => {
      document.body.style.overflow = 'hidden';
    };

    const handleMouseLeave = () => {
      document.body.style.overflow = 'auto';
    };

    sidebar.addEventListener('mouseenter', handleMouseEnter);
    sidebar.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      sidebar.removeEventListener('wheel', handleWheel);
      sidebar.removeEventListener('mouseenter', handleMouseEnter);
      sidebar.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.overflow = 'auto';
    };
  }, []);

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
          className={`w-full text-left
            ${item.isMain ? 'text-[#FFF] font-medium p-4 my-1' : ''}
            ${depth === 1 ? 'px-4 py-3 mb-2' : ''}
            ${depth === 2 ? 'ml-8 px-4 py-3 border-l-2' : ''}
            ${isActive
              ? depth === 2
                ? 'text-[#E77228] border-[#E77228] font-semibold bg-[#FFFFFF]/4'
                : 'text-white bg-[#FFFFFF]/4 rounded-lg'
              : depth === 2
                ? 'text-[#AEAEAE] hover:text-[#AEAEAE] hover:bg-[#FFFFFF]/4'
                : 'text-[#AEAEAE] hover:text-[#AEAEAE] hover:bg-[#FFFFFF]/4 hover:rounded-lg'
            }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm">{item.label}</span>
            {item.hasChildren && (
              <div className="flex-shrink-0 ml-2">
                {isExpanded ? <MdKeyboardArrowDown size={20} /> : <RiArrowRightSLine size={20} />}
              </div>
            )}
          </div>
        </button>

        {item.hasChildren && isExpanded && item.children && (
          <div className="bg-gray-850">
            {item.children.map((child: any) => renderSidebarItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-black lg:pt-0 pt-30">
      {/* Header */}
      <div
        style={{
          backgroundImage: `url(${bg_term.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className='relative lg:h-[400px] h-[300px]'
      >
        <div className="absolute inset-0 text-center flex justify-center items-center">
          <div className='m-auto'>
            <Image src={logo} alt="NewPay Logo" className='mx-auto' />
            <h1
              style={{
                background: "linear-gradient(93deg, #FFF 21.92%, rgba(255, 255, 255, 0.00) 149.05%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="lg:text-7xl text-4xl font-semibold text-[#AEAEAE] pt-10"
            >
              {termData.header.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container lg:px-20 pt-8 mx-auto flex flex-col lg:flex-row gap-8 text-sm">
        {/* Sidebar */}
        <div className="lg:w-1/3 px-2 lg:px-0">
          <div className="sticky top-18 max-h-[calc(100vh-72px)] overflow-y-auto rounded-lg custom-scroll scroll-smooth lg:sidebar-container">
            <nav className="space-y-0 max-h-[calc(100vh-80px)]">
              {sidebarItems.map((item) => renderSidebarItem(item))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        {currentSectionContent && (
          displaySection === 'general' ? (
            <TermGeneral currentSectionContent={currentSectionContent} ids={generalChildrenIds} idSubitems={idSubitems} />
          ) : (
            <TermContent content={currentSectionContent} idPivacy={idPivacy} idCommission={idCommission} />
          )
        )}
      </div>
    </div>
  );
}
