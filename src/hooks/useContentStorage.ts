
import { useState, useEffect } from 'react';

export interface ContentSection {
  id: string;
  title: string;
  description: string;
  content: string;
}

export const useContentStorage = () => {
  const [sections, setSections] = useState<Record<string, ContentSection>>({});

  useEffect(() => {
    const savedSections = localStorage.getItem('dcs_content_sections');
    if (savedSections) {
      setSections(JSON.parse(savedSections));
    } else {
      // Initialize with default content from the website
      const defaultSections = {
        'Hero Section': {
          id: 'hero',
          title: 'Dream. Create. Secure.',
          description: 'AI-Powered Cybersecurity Solutions for Modern Businesses',
          content: 'We leverage cutting-edge artificial intelligence to protect your digital assets with proactive threat detection, automated response systems, and comprehensive security solutions tailored for the modern enterprise.'
        },
        'About Section': {
          id: 'about',
          title: 'Leading the Future of Cybersecurity',
          description: 'Expert cybersecurity solutions powered by AI innovation',
          content: 'At DCS (Dream. Create. Secure.), we are pioneers in AI-driven cybersecurity solutions. Founded with a vision to revolutionize digital security, we combine cutting-edge artificial intelligence with deep cybersecurity expertise to protect businesses from evolving threats.'
        },
        'Services': {
          id: 'services',
          title: 'Comprehensive Security Solutions',
          description: 'End-to-end cybersecurity services tailored to your needs',
          content: 'Our comprehensive suite of services includes AI-powered threat detection, security audits, penetration testing, compliance management, incident response, and custom security solution development.'
        },
        'Features': {
          id: 'features',
          title: 'Why Choose DCS?',
          description: 'Advanced features that set us apart',
          content: 'AI-powered threat detection, real-time monitoring, automated incident response, comprehensive security audits, 24/7 support, and scalable solutions designed for businesses of all sizes.'
        },
        'Contact Info': {
          id: 'contact',
          title: 'Get in Touch',
          description: 'Ready to secure your digital future?',
          content: 'Contact us today to discuss your cybersecurity needs. Email: info@devanshcybersec.in | Phone: +91 9082678303 | Location: Mumbai, India'
        },
        'Footer': {
          id: 'footer',
          title: 'DCS Footer Information',
          description: 'Company information and links',
          content: 'DCS - Dream. Create. Secure. Leading provider of AI-powered cybersecurity solutions. Protecting businesses with innovative security technologies and expert consulting services.'
        }
      };
      setSections(defaultSections);
      localStorage.setItem('dcs_content_sections', JSON.stringify(defaultSections));
    }
  }, []);

  const updateSection = (sectionTitle: string, updatedContent: Partial<ContentSection>) => {
    const newSections = {
      ...sections,
      [sectionTitle]: {
        ...sections[sectionTitle],
        ...updatedContent
      }
    };
    setSections(newSections);
    localStorage.setItem('dcs_content_sections', JSON.stringify(newSections));
  };

  const getSection = (sectionTitle: string): ContentSection | undefined => {
    return sections[sectionTitle];
  };

  return {
    sections,
    updateSection,
    getSection
  };
};
