import React, { useState } from "react";
import { useTranslation } from 'react-i18next';


const OnDemandComponent = () =>{
    const { t } = useTranslation();

    const [submit, setSubmit] = useState(false)
    function handleSubmit(){
        setSubmit(true)
    }
    return(
        <div className="container mt-20">
            {submit && <div className="comingSoon text-center"><h2>{t('onDemand.comingSoon')}</h2></div>}
            <div className="heading text-center"><h2>{t('onDemand.heading')}</h2></div>
            <div className="sub-txt text-center mt-12"><h4>{t('onDemand.subTxt')}</h4></div>
            <div className="input text-center mt-12"><input className="shadow-md pl-3 rtl:pr-3 py-3 w-3/4 sm:w-2/3 lg:w-2/5 rounded-lg outline-none bg-slate-200" type="text" placeholder={t('onDemand.inputPlaceholder')}/></div>
            <div className="button text-center mt-12"><input onClick={handleSubmit} className="shadow-md py-3 w-1/2 sm:w-2/5 lg:w-1/5 rounded-lg outline-none bg-green-600 text-white" type="submit"/></div>
        </div>
    )
}

export default OnDemandComponent;