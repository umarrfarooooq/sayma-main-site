import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import "./Navbar.css"

const UpperHeader = () => {
  const { t, i18n } = useTranslation(); // Initialize the useTranslation hook

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div dir='ltr' className="upperHeader">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="uprHead flex items-center sm:space-x-4 flex-wrap">
          <div className="mb-2">
            <select
              className="bg-transparent outline-none text-black"
              onChange={handleLanguageChange}
              value={i18n.language}
            >
              <option value="en">{t('upperHeader.language.english')}</option>
              <option value="ar">{t('upperHeader.language.arabic')}</option>
            </select>
          </div>
          <div className="mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
            <span>info@alghawalimanpower.com</span>
          </div>
          <div className="mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-1" />
            <span>+968 9620 1040</span>
          </div>
        </div>
        <div className="mb-2">
          <a rel="noopener noreferrer" target='_blank' href='https://instagram.com/al.ghawalimanpower?igshid=MzRlODBiNWFlZA=='>
            <FontAwesomeIcon icon={faInstagram} className="text-black text-xl" />
          </a>
        </div>
      </div>
  </div>

  );
};

export default UpperHeader;
