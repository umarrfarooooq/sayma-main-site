import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Search = ({ onSearch }) => {
    const { t } = useTranslation();

    return (
        <div className="w-full">
                <div style={{border:"1px solid #C3D0D4"}} className="flex items-center gap-2 bg-[#EBEBEB] p-3 rounded-xl">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="#434146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.0002 21.4992L16.7002 17.1992" stroke="#434146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span>
                        <input 
                        onChange={(e) => onSearch(e.target.value)} type="text" placeholder={t('allProfiles.searchBtn')} className="outline-none bg-transparent"/>
                    </span>
                </div>
        </div>
    );
}

export default Search;
