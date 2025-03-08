import React from "react";
import './Why-Choose-Us.css'
import { useTranslation } from 'react-i18next';

const WhyChooseUs = ()=>{
    const { t } = useTranslation();
    return (
        <div  style={{backgroundColor:"#F2F5FF"}}>
          <section
            id="features"
            className="container relative block py-10 md:py-20"
          >
            <div className="relative mx-auto max-w-5xl text-center">
              <h2 className="block w-full bg-gradient-to-b bg-clip-text font-bold  text-3xl sm:text-4xl">
              
              {t('chooseUsSection.subTitle')}
              </h2>
              <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide">
              {t('chooseUsSection.mainText')}
              </p>
            </div>
    
            <div className="relative z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
              {/* Customizable */}
              <div style={{backgroundColor:"#F5F6FC", boxShadow:"0px 16px 24px 0px rgba(7, 42, 91, 0.12)"}} className="rounded-md p-8 text-center">
              <div className="button-text mx-auto flex h-28 w-28 items-center justify-center">
                  <div className="circle-vector h-full w-full">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2159_849)">
<path d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120Z" fill="#D5E8FF"/>
<g clip-path="url(#clip1_2159_849)">
<path d="M132.75 100.5L90.75 41.25L58.5 62.25L30.75 81.75L111.976 146.574L132.75 100.5Z" fill="#9ECBFF"/>
<path d="M57.1673 22.1073C57.3682 22.0342 57.7973 21.9155 58.1261 21.8425C58.5279 21.7603 59.1123 21.7329 59.9525 21.7603C60.7013 21.7785 61.4044 21.8516 61.7332 21.9429C62.0345 22.0251 62.6738 22.299 63.1486 22.5456C63.6235 22.7921 64.2718 23.1939 64.5823 23.4496C64.9019 23.6961 65.3677 24.1801 65.6233 24.518C65.879 24.865 66.2626 25.5133 66.4909 25.9607C66.71 26.4082 66.9566 27.0748 67.0388 27.4217C67.1392 27.8509 67.194 28.4536 67.194 29.248C67.194 30.0516 67.1392 30.636 67.0388 31.0743C66.9475 31.4213 66.7466 32.0057 66.5822 32.3527C66.4178 32.7088 66.1256 33.2385 65.9247 33.5398C65.7147 33.8411 65.3311 34.3068 65.0572 34.5808C64.7832 34.8547 64.281 35.2656 63.9248 35.4939C63.5687 35.7222 63.039 36.0144 62.7377 36.1514C62.4363 36.2883 61.9432 36.4618 61.6419 36.5349C61.3405 36.6171 60.8657 36.6993 60.5917 36.7358C60.3177 36.7632 59.9981 36.8362 59.8794 36.9001C59.7242 36.9823 59.6329 36.9823 59.4685 36.9001C59.3589 36.8454 58.9388 36.7449 58.537 36.6901C58.1352 36.6262 57.5964 36.5075 57.3499 36.4162C57.0942 36.334 56.5006 36.0601 56.0258 35.8226C55.3226 35.4574 55.003 35.22 54.3272 34.5442C53.5876 33.8137 53.4415 33.6037 52.9757 32.6723C52.6561 32.0148 52.4096 31.3665 52.3182 30.9373C52.2361 30.5629 52.163 29.9055 52.1539 29.4763C52.1447 29.0471 52.1904 28.3531 52.2634 27.924C52.3365 27.4948 52.4917 26.883 52.6105 26.5543C52.7383 26.2255 52.994 25.6959 53.1858 25.3672C53.3867 25.0384 53.7245 24.5454 53.9528 24.2714C54.1811 23.9975 54.6469 23.5592 54.9939 23.3035C55.3318 23.0387 55.8797 22.7008 56.2084 22.5364C56.5372 22.3721 56.9664 22.1803 57.1673 22.1073Z" fill="#3B6CA6"/>
<path d="M79.312 25.979C79.6407 25.8146 80.216 25.6229 80.5905 25.5498C81.0288 25.4494 81.5676 25.4128 82.0972 25.4402C82.5538 25.4585 83.1839 25.5315 83.5126 25.6046C83.8414 25.6868 84.435 25.9151 84.8368 26.1251C85.3481 26.3899 85.7682 26.7095 86.2522 27.1935C86.8092 27.7413 87.0284 28.0518 87.3663 28.7458C87.6494 29.3211 87.8411 29.8598 87.9233 30.3438C87.9964 30.7456 88.042 31.2204 88.0146 31.3939C87.9964 31.5674 88.0238 31.7683 88.0694 31.8231C88.1334 31.8961 88.1334 31.9874 88.0877 32.0514C88.0512 32.1153 87.9599 32.4532 87.8868 32.8093C87.8229 33.1654 87.6037 33.7955 87.3937 34.2246C87.1837 34.6538 86.8366 35.22 86.6266 35.4756C86.4257 35.7405 85.9965 36.1422 85.686 36.3614C85.3664 36.5897 84.8459 36.891 84.5172 37.0462C84.1884 37.2015 83.6131 37.3932 83.2387 37.4754C82.7456 37.585 82.289 37.6124 81.595 37.5759C80.9649 37.5485 80.4352 37.4572 80.0425 37.3293C79.7138 37.2197 79.1841 36.9823 78.8554 36.8088C78.5267 36.6262 77.9696 36.1879 77.6135 35.8318C77.2573 35.4756 76.819 34.9186 76.6364 34.5899C76.4629 34.2612 76.2254 33.7315 76.1158 33.4028C75.988 33.0102 75.8967 32.4805 75.8693 31.8505C75.8328 31.1656 75.8602 30.6999 75.9697 30.2068C76.0519 29.8324 76.2528 29.2298 76.4263 28.8828C76.5907 28.5266 76.9194 27.9879 77.1569 27.6683C77.3852 27.3578 77.8326 26.9104 78.1431 26.6821C78.4627 26.4538 78.9832 26.1342 79.312 25.979Z" fill="#3B6CA6"/>
<path d="M34.9586 26.0429C35.2965 25.8694 35.7896 25.6776 36.0453 25.6046H36.0544C36.3375 25.5224 36.9767 25.4676 37.6251 25.4676C38.3282 25.4585 38.9127 25.5041 39.2506 25.5955C39.5336 25.6685 40.045 25.8694 40.392 26.0429C40.7299 26.2073 41.2322 26.5177 41.5061 26.7278C41.7801 26.9378 42.2093 27.3578 42.4467 27.6774C42.6933 27.9879 43.0311 28.5266 43.1955 28.8828C43.3599 29.2298 43.5517 29.7503 43.6156 30.0242C43.6795 30.2981 43.7343 30.9739 43.7343 31.5309C43.7343 32.1883 43.6795 32.7362 43.5699 33.1289C43.4877 33.4576 43.2412 34.0511 43.0311 34.4529C42.7755 34.9552 42.4467 35.3843 42.0084 35.8226C41.5427 36.2975 41.15 36.5805 40.5473 36.891C40.0359 37.1558 39.4606 37.3658 39.0223 37.4572C38.6296 37.5393 38.0269 37.6033 37.6707 37.6033C37.3146 37.6033 36.7119 37.5393 36.3284 37.4572C35.8809 37.3658 35.3056 37.1558 34.7942 36.891C34.1915 36.5805 33.808 36.2975 33.3331 35.8226C32.9039 35.3935 32.566 34.9369 32.3104 34.4529C32.1003 34.0511 31.8538 33.4576 31.7716 33.1289C31.6803 32.7636 31.6163 32.1701 31.6163 31.5765C31.6072 31.0469 31.662 30.3712 31.7259 30.0699C31.7898 29.7685 31.9999 29.2115 32.1825 28.8371C32.3651 28.4627 32.6939 27.924 32.9222 27.6318C33.1505 27.3396 33.5614 26.9378 33.8354 26.7278C34.1093 26.5177 34.6116 26.2073 34.9586 26.0429Z" fill="#3B6CA6"/>
<path d="M48.3459 40.2879C48.629 40.2514 48.8847 40.1875 48.9212 40.1509C48.9668 40.1053 50.3275 40.0687 51.953 40.0687C54.2451 40.0687 54.9299 40.0961 54.9573 40.1783C54.9756 40.2422 56.0075 43.1095 57.2403 46.552C58.4822 49.9946 59.5415 52.8345 59.6055 52.871C59.6694 52.9075 59.7607 52.8892 59.8155 52.8253C59.8703 52.7614 60.9113 49.9398 62.1258 46.552C63.3495 43.1643 64.3814 40.3153 64.4271 40.224C64.5001 40.0779 64.7376 40.0687 67.4132 40.0687C69.0021 40.0687 70.3445 40.0961 70.381 40.1327C70.4267 40.1692 70.7372 40.2514 71.0659 40.3062C71.4038 40.3609 71.9608 40.5436 72.317 40.7171C72.6914 40.8997 73.1663 41.2376 73.4676 41.5298C73.7781 41.8311 74.1068 42.2785 74.3077 42.6712C74.4812 43.0273 74.673 43.5569 74.7278 43.8583C74.8009 44.2327 74.8283 47.2095 74.8283 53.4463C74.8283 59.5734 74.8009 62.6598 74.7278 63.0342C74.673 63.3356 74.5086 63.8378 74.3625 64.1483C74.2164 64.477 73.8694 64.9701 73.5772 65.2806C73.1845 65.6915 72.8466 65.938 71.5134 66.5955L70.1527 66.6411C69.0843 66.6777 68.7738 66.7142 68.7099 66.8238C68.6551 66.9059 68.6186 71.3256 68.6186 78.2837C68.6186 86.0819 68.5912 89.7801 68.5181 90.1545C68.4634 90.4558 68.2716 90.9855 68.0889 91.3416C67.8972 91.6886 67.5319 92.1908 67.2762 92.4556C66.9749 92.757 66.5365 93.0583 66.1347 93.2592C65.7329 93.451 65.1941 93.6244 64.7832 93.6884C64.2718 93.7614 63.9157 93.7614 63.3678 93.6884C62.8747 93.6244 62.4272 93.4875 61.998 93.2775C61.6419 93.104 61.1487 92.757 60.893 92.5195C60.6374 92.273 60.2995 91.8347 60.1442 91.5425C59.9342 91.1772 59.7972 91.022 59.6694 91.022C59.5415 91.022 59.4137 91.1681 59.2402 91.4968C59.1123 91.7616 58.7927 92.1908 58.537 92.4465C58.2722 92.7113 57.7882 93.0583 57.4138 93.2409C56.939 93.4783 56.528 93.6062 55.9984 93.6884C55.4231 93.7705 55.0761 93.7705 54.5555 93.6884C54.1081 93.6153 53.6332 93.4601 53.1858 93.2409C52.8022 93.04 52.3091 92.7022 52.0443 92.4374C51.7795 92.1634 51.4507 91.6977 51.2498 91.2959C51.058 90.9124 50.8663 90.3554 50.8206 90.0175C50.7567 89.6249 50.7202 85.5431 50.7202 78.1924C50.7202 71.2982 50.6836 66.9059 50.6288 66.8238C50.5649 66.7142 50.2544 66.6777 49.186 66.6411C47.8345 66.5955 47.8345 66.5955 47.104 66.2394C46.6382 66.0019 46.1999 65.7006 45.8712 65.3719C45.5515 65.0431 45.2411 64.6048 45.031 64.1757C44.7936 63.7008 44.6657 63.2808 44.6018 62.8059C44.5562 62.4133 44.5196 58.4411 44.5196 53.4463C44.5196 48.2596 44.5562 44.4975 44.6018 44.0866C44.6657 43.6117 44.8027 43.1917 45.0402 42.7169C45.2319 42.3242 45.5698 41.8402 45.8346 41.5754C46.1268 41.2832 46.5743 40.9728 47.0674 40.7262C47.5697 40.4797 48.0263 40.3153 48.3459 40.2879Z" fill="#3B6CA6"/>
<path d="M29.3516 40.9819C29.6804 40.8175 30.1552 40.6258 30.4018 40.5618C30.7397 40.4797 32.4108 40.4431 36.8671 40.4431C40.1637 40.434 42.8668 40.4523 42.8668 40.4797C42.8668 40.5071 42.7937 40.6349 42.6933 40.7719C42.6019 40.918 42.4193 41.2284 42.2915 41.4841C42.1728 41.7307 41.9445 42.2877 41.5427 43.493L41.5153 53.1723C41.497 61.2901 41.5153 62.952 41.6248 63.4908C41.6979 63.8378 41.8805 64.4587 42.0358 64.8605C42.191 65.2623 42.4924 65.8558 42.7024 66.1846C42.9124 66.5133 43.4238 67.116 43.8439 67.5269C44.2639 67.9469 44.6475 68.2665 44.6931 68.2391C44.7479 68.2117 44.8027 68.2574 44.8301 68.3304C44.8575 68.4035 44.8758 71.1155 44.8758 74.3572C44.8758 77.5988 44.8484 80.2652 44.8119 80.2835C44.7662 80.3017 44.7023 80.5209 44.6657 80.7583C44.6292 81.0048 44.4375 81.4888 44.2548 81.8358C44.063 82.1919 43.7617 82.5937 43.5517 82.7672C43.3508 82.9316 42.9398 83.1781 42.6385 83.3151C42.1636 83.5342 41.9719 83.5708 41.223 83.5708C40.4468 83.5799 40.2916 83.5525 39.7619 83.2968C39.4332 83.1416 39.004 82.8768 38.8031 82.6941C38.6022 82.5207 38.2917 82.1006 38.1182 81.7719C37.9447 81.434 37.7347 81.1601 37.6616 81.1601C37.5886 81.1601 37.3785 81.434 37.205 81.7719C37.0315 82.1006 36.721 82.5207 36.5201 82.6941C36.3192 82.8768 35.89 83.1416 35.5613 83.2968C35.0316 83.5525 34.8764 83.5799 34.1002 83.5708C33.3514 83.5708 33.1596 83.5342 32.6848 83.3151C32.3834 83.1781 31.9725 82.9316 31.7716 82.7672C31.5615 82.5937 31.2602 82.2011 31.0684 81.8358C30.8858 81.4888 30.7031 81.0231 30.6666 80.7948C30.6301 80.5665 30.5753 80.3382 30.5296 80.2926C30.484 80.2469 30.4383 76.3661 30.4018 63.1438L29.5617 62.7238C29.1051 62.4955 28.5572 62.1394 28.3471 61.9385C28.1371 61.7376 27.8083 61.3084 27.6166 60.9797C27.4157 60.6509 27.1965 60.1396 27.1143 59.8382C26.9956 59.3634 26.9773 58.3042 27.023 43.8583L27.4248 43.0365C27.6896 42.4794 27.9727 42.0685 28.2923 41.7489C28.548 41.4932 29.0229 41.1462 29.3516 40.9819Z" fill="#3B6CA6"/>
<path d="M76.956 41.2558C76.819 41.0275 76.6546 40.7536 76.5724 40.6349L76.4355 40.434H82.4534C86.1244 40.434 88.6813 40.4705 88.9826 40.5253C89.2566 40.571 89.7862 40.7627 90.1424 40.9362C90.5624 41.1371 90.9916 41.4385 91.3112 41.7581C91.6309 42.0777 91.9322 42.4977 92.1331 42.9177C92.3066 43.283 92.4893 43.8491 92.544 44.1779C92.5988 44.5431 92.6354 47.5017 92.6354 51.8026C92.6354 56.1035 92.5988 59.0621 92.544 59.4273C92.4893 59.7561 92.3066 60.3222 92.1331 60.6783C91.9322 61.0984 91.6309 61.5275 91.3295 61.8198C91.0647 62.0846 90.5533 62.459 90.188 62.6416C89.8319 62.8333 89.4757 62.9886 89.4118 62.9886C89.357 62.9886 89.2383 63.0342 89.1653 63.0799C89.0465 63.1529 89.0191 64.2852 88.937 81.0231L88.6447 81.6166C88.4895 81.9454 88.179 82.3837 87.9599 82.6028C87.7498 82.822 87.3572 83.1051 87.1106 83.2238C86.8549 83.3425 86.3892 83.4886 86.0604 83.5434C85.613 83.6256 85.3116 83.6256 84.8276 83.5434C84.4715 83.4795 83.9875 83.3242 83.7409 83.1872C83.4944 83.0503 83.1474 82.7946 82.9647 82.6211C82.7821 82.4476 82.5081 82.055 82.362 81.7536C82.2159 81.4523 82.0424 81.1783 81.9968 81.1418C81.9511 81.1053 81.8872 81.0962 81.8598 81.1053C81.8324 81.1236 81.6954 81.3792 81.5402 81.6714C81.3941 81.9728 81.1018 82.3837 80.8827 82.5937C80.6635 82.8129 80.216 83.1142 79.869 83.2786C79.3211 83.5434 79.175 83.5708 78.3897 83.5708C77.6135 83.5799 77.4582 83.5434 76.9286 83.2968C76.5998 83.1416 76.1706 82.8768 75.9697 82.6941C75.7688 82.5207 75.4584 82.1097 74.9652 81.2057L74.9196 68.0108L75.2118 67.8008C75.3762 67.6912 75.7688 67.2895 76.0884 66.9151C76.4355 66.5042 76.8281 65.9015 77.0656 65.4084C77.2847 64.9518 77.5587 64.2578 77.8783 63.1255L77.9148 54.0855C77.9331 47.8761 77.9148 44.7714 77.8418 44.1779C77.787 43.703 77.6226 42.936 77.4674 42.4886C77.3121 42.032 77.0838 41.4841 76.956 41.2558Z" fill="#3B6CA6"/>
</g>
</g>
<defs>
<clipPath id="clip0_2159_849">
<rect width="120" height="120" rx="60" fill="white"/>
</clipPath>
<clipPath id="clip1_2159_849">
<rect width="96" height="96" fill="white" transform="translate(24 21.75)"/>
</clipPath>
</defs>
</svg>

                  </div>
                </div>

                <h3 className="mt-6">{t('chooseUsSection.features.feature1.title')}</h3>
                <p className="my-4 text-justify mb-0 font-normal leading-relaxed tracking-wide">
                {t('chooseUsSection.features.feature1.detail')}                </p>
              </div>
    
              {/* Fast Performance */}
              <div style={{backgroundColor:"#F5F6FC", boxShadow:"0px 16px 24px 0px rgba(7, 42, 91, 0.12)"}} className="rounded-md p-8 text-center">
                <div className="button-text mx-auto flex h-28 w-28 items-center justify-center">
                  <div className="circle-vector h-full w-full">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2159_873)">
<path d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120Z" fill="#FFF7B3"/>
<g clip-path="url(#clip1_2159_873)">
<path d="M132.75 100.5L87 27L58.5 62.25V92.25L111.976 146.574L132.75 100.5Z" fill="#FFEF64"/>
</g>
<path d="M32.0488 57.5854V27H86.7805V57.5854H94.8293L59.4146 93L24 57.5854H32.0488Z" fill="#E2CF1D"/>
<path d="M45.1198 44.3484H48.0818V45.7778H43.3169V36.7889H45.1198V44.3484Z" fill="#1A1A1A"/>
<path d="M53.4002 45.868C52.5588 45.868 51.7862 45.6705 51.0822 45.2756C50.3782 44.8806 49.8201 44.3355 49.408 43.6401C48.9959 42.9361 48.7899 42.1419 48.7899 41.2576C48.7899 40.3819 48.9959 39.5964 49.408 38.9009C49.8201 38.1969 50.3782 37.6475 51.0822 37.2525C51.7862 36.8576 52.5588 36.6602 53.4002 36.6602C54.2502 36.6602 55.0228 36.8576 55.7183 37.2525C56.4223 37.6475 56.976 38.1969 57.3795 38.9009C57.7916 39.5964 57.9977 40.3819 57.9977 41.2576C57.9977 42.1419 57.7916 42.9361 57.3795 43.6401C56.976 44.3355 56.4223 44.8806 55.7183 45.2756C55.0143 45.6705 54.2416 45.868 53.4002 45.868ZM53.4002 44.2582C53.9411 44.2582 54.4176 44.138 54.8297 43.8976C55.2418 43.6486 55.5637 43.2966 55.7955 42.8416C56.0273 42.3866 56.1432 41.8586 56.1432 41.2576C56.1432 40.6566 56.0273 40.1329 55.7955 39.6865C55.5637 39.2315 55.2418 38.8838 54.8297 38.6434C54.4176 38.403 53.9411 38.2828 53.4002 38.2828C52.8593 38.2828 52.3785 38.403 51.9579 38.6434C51.5458 38.8838 51.2238 39.2315 50.992 39.6865C50.7602 40.1329 50.6443 40.6566 50.6443 41.2576C50.6443 41.8586 50.7602 42.3866 50.992 42.8416C51.2238 43.2966 51.5458 43.6486 51.9579 43.8976C52.3785 44.138 52.8593 44.2582 53.4002 44.2582Z" fill="#1A1A1A"/>
<path d="M71.3542 36.7889L68.843 45.7778H66.7181L65.0311 39.3774L63.2668 45.7778L61.1548 45.7907L58.7337 36.7889H60.6654L62.2494 43.7688L64.0781 36.7889H66.0871L67.8128 43.7302L69.4096 36.7889H71.3542Z" fill="#1A1A1A"/>
<path d="M49.8718 52.4486C49.8718 52.9294 49.7559 53.3802 49.5241 53.8008C49.3009 54.2215 48.9446 54.5606 48.4552 54.8182C47.9745 55.0758 47.3649 55.2045 46.6266 55.2045H45.1198V58.6559H43.3169V49.667H46.6266C47.322 49.667 47.9144 49.7872 48.4037 50.0276C48.8931 50.268 49.258 50.5985 49.4984 51.0192C49.7473 51.4399 49.8718 51.9164 49.8718 52.4486ZM46.5493 53.7493C47.0472 53.7493 47.4164 53.6377 47.6568 53.4145C47.8972 53.1827 48.0174 52.8607 48.0174 52.4486C48.0174 51.5729 47.528 51.1351 46.5493 51.1351H45.1198V53.7493H46.5493Z" fill="#1A1A1A"/>
<path d="M55.788 58.6559L53.8048 55.153H52.9548V58.6559H51.1519V49.667H54.5259C55.2213 49.667 55.8137 49.7915 56.3031 50.0404C56.7925 50.2808 57.1573 50.6114 57.3977 51.0321C57.6467 51.4442 57.7712 51.9078 57.7712 52.4229C57.7712 53.0153 57.5995 53.5519 57.2561 54.0326C56.9127 54.5048 56.4018 54.8311 55.7236 55.0114L57.8742 58.6559H55.788ZM52.9548 53.8008H54.4615C54.9509 53.8008 55.3158 53.6849 55.5562 53.4531C55.7966 53.2127 55.9168 52.8822 55.9168 52.4615C55.9168 52.0494 55.7966 51.7318 55.5562 51.5085C55.3158 51.2767 54.9509 51.1608 54.4615 51.1608H52.9548V53.8008Z" fill="#1A1A1A"/>
<path d="M61.2048 49.667V58.6559H59.4019V49.667H61.2048Z" fill="#1A1A1A"/>
<path d="M62.5482 54.1485C62.5482 53.2643 62.7457 52.4744 63.1406 51.779C63.5442 51.075 64.0893 50.5298 64.7762 50.1435C65.4716 49.7485 66.2485 49.5511 67.1071 49.5511C68.1116 49.5511 68.9916 49.8086 69.7471 50.3238C70.5026 50.8389 71.0306 51.5515 71.3311 52.4615H69.2577C69.0517 52.0323 68.7598 51.7103 68.382 51.4957C68.0128 51.281 67.5836 51.1737 67.0942 51.1737C66.5705 51.1737 66.1026 51.2982 65.6905 51.5472C65.287 51.7876 64.9693 52.131 64.7375 52.5774C64.5143 53.0239 64.4027 53.5476 64.4027 54.1485C64.4027 54.7409 64.5143 55.2646 64.7375 55.7197C64.9693 56.1661 65.287 56.5138 65.6905 56.7628C66.1026 57.0032 66.5705 57.1234 67.0942 57.1234C67.5836 57.1234 68.0128 57.0161 68.382 56.8014C68.7598 56.5782 69.0517 56.252 69.2577 55.8227H71.3311C71.0306 56.7413 70.5026 57.4582 69.7471 57.9733C69.0002 58.4799 68.1202 58.7331 67.1071 58.7331C66.2485 58.7331 65.4716 58.54 64.7762 58.1536C64.0893 57.7587 63.5442 57.2135 63.1406 56.5181C62.7457 55.8227 62.5482 55.0328 62.5482 54.1485Z" fill="#1A1A1A"/>
<path d="M74.6739 51.1222V53.3759H77.7003V54.8053H74.6739V57.1878H78.0866V58.6559H72.871V49.6541H78.0866V51.1222H74.6739Z" fill="#1A1A1A"/>
<path d="M55.1792 64.451C55.1792 63.7985 55.3681 63.2877 55.7458 62.9185C56.1322 62.5493 56.6258 62.3647 57.2268 62.3647C57.8278 62.3647 58.3171 62.5493 58.6949 62.9185C59.0812 63.2877 59.2744 63.7985 59.2744 64.451C59.2744 65.1121 59.0812 65.6272 58.6949 65.9964C58.3171 66.3655 57.8278 66.5501 57.2268 66.5501C56.6258 66.5501 56.1322 66.3655 55.7458 65.9964C55.3681 65.6272 55.1792 65.1121 55.1792 64.451ZM63.4469 62.5193L58.3858 71.5339H56.6344L61.6826 62.5193H63.4469ZM57.2139 63.4465C56.7417 63.4465 56.5056 63.7813 56.5056 64.451C56.5056 65.1292 56.7417 65.4684 57.2139 65.4684C57.4457 65.4684 57.626 65.3868 57.7548 65.2237C57.8836 65.052 57.948 64.7944 57.948 64.451C57.948 63.7813 57.7033 63.4465 57.2139 63.4465ZM60.8327 69.5893C60.8327 68.9283 61.0215 68.4174 61.3993 68.0568C61.7856 67.6877 62.2793 67.5031 62.8803 67.5031C63.4812 67.5031 63.9663 67.6877 64.3355 68.0568C64.7132 68.4174 64.9021 68.9283 64.9021 69.5893C64.9021 70.2504 64.7132 70.7655 64.3355 71.1347C63.9663 71.5039 63.4812 71.6884 62.8803 71.6884C62.2707 71.6884 61.777 71.5039 61.3993 71.1347C61.0215 70.7655 60.8327 70.2504 60.8327 69.5893ZM62.8674 68.5848C62.378 68.5848 62.1333 68.9197 62.1333 69.5893C62.1333 70.2676 62.378 70.6067 62.8674 70.6067C63.3482 70.6067 63.5886 70.2676 63.5886 69.5893C63.5886 68.9197 63.3482 68.5848 62.8674 68.5848Z" fill="#1A1A1A"/>
</g>
<defs>
<clipPath id="clip0_2159_873">
<rect width="120" height="120" rx="60" fill="white"/>
</clipPath>
<clipPath id="clip1_2159_873">
<rect width="96" height="96" fill="white" transform="translate(24 21.75)"/>
</clipPath>
</defs>
</svg>

                  </div>
                </div>
                <h3 className="mt-6">{t('chooseUsSection.features.feature2.title')}</h3>
                <p className="my-4 text-justify mb-0 font-normal leading-relaxed tracking-wide">
                {t('chooseUsSection.features.feature2.detail')}                </p>
              </div>
    
              {/* Fully Featured */}
              <div style={{backgroundColor:"#F5F6FC", boxShadow:"0px 16px 24px 0px rgba(7, 42, 91, 0.12)"}} className="rounded-md p-8 text-center">
              <div className="button-text mx-auto flex h-28 w-28 items-center justify-center">
                  <div className="circle-vector h-full w-full">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2159_903)">
<rect width="120" height="120" rx="60" fill="#249D64"/>
<path d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120Z" fill="#CAFFE6"/>
<path d="M132.75 100.5L96 58L80.5 82.5L59.5 89L34.5 83.5L123 159L132.75 100.5Z" fill="#96F2C7"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M59.4135 22C64.3668 22 65.6614 22.225 70.3895 23.8562C73.3164 24.8687 77.2565 26.6688 82.4912 29.9313L84.7426 27.625L86.2624 34.825C87.0504 38.7625 87.6695 42.025 87.6695 42.0813C87.6133 42.0813 84.3486 41.4625 73.2038 39.1562L74.611 37.75C75.9619 36.4 76.0182 36.2875 75.0613 35.3875C74.4984 34.8812 72.5847 33.8125 70.7835 33.025C69.0386 32.2375 65.8865 31.2812 63.7476 30.9437C60.877 30.4375 58.9633 30.4375 55.7549 30.9437C53.4471 31.3375 49.9011 32.4063 47.8747 33.3625C45.4544 34.5438 42.9215 36.4 40.5012 38.8187C38.0808 41.2375 36.2234 43.7687 35.0413 46.1875C34.0845 48.2125 33.015 51.5875 32.621 53.7812C32.1144 56.875 32.1144 58.6187 32.621 61.9375C33.015 64.2437 34.0845 67.7875 35.0413 69.8125C36.2234 72.2313 38.0808 74.7625 40.5012 77.1812C42.9215 79.6 45.4544 81.4563 47.8747 82.6375C49.9011 83.5938 53.4471 84.6625 55.7549 85.0562C59.0195 85.5625 60.877 85.5625 63.9165 85.0562C66.0554 84.6625 69.6578 83.5375 71.7967 82.4688C74.4421 81.175 76.8625 79.375 79.1702 77.0125C81.478 74.7063 83.2792 72.1187 84.5175 69.5312C85.5306 67.3938 86.6001 63.9062 87.557 58H96L95.606 61.4875C95.4371 63.4562 94.5928 66.9438 93.8048 69.25C93.0168 71.5562 91.4971 74.875 90.4839 76.5625C89.527 78.25 87.0504 81.2875 85.0241 83.3125C82.9977 85.3375 79.6768 87.925 77.7068 89.1063C75.6804 90.2875 72.0218 91.8625 69.5452 92.5938C66.0554 93.6625 63.8039 94 59.5261 94C55.0795 94 53.222 93.7187 49.3945 92.425C46.8616 91.5812 43.2592 90.0062 41.4018 88.9375C39.6006 87.8688 36.3922 85.3375 34.3659 83.3125C32.3396 81.2875 29.863 78.25 28.9061 76.5625C27.8929 74.875 26.3732 71.5562 25.5289 69.25C24.1217 65.4813 23.9528 64.3 24.0091 58C24.0091 51.8125 24.178 50.4625 25.5289 46.75C26.3732 44.4438 27.8929 41.125 28.9061 39.4375C29.863 37.75 32.3396 34.7125 34.3659 32.6875C36.3922 30.6625 39.6006 28.1312 41.4018 27.0625C43.2592 25.9938 46.8053 24.4187 49.2819 23.575C52.9406 22.3375 54.798 22.0563 59.4135 22V22ZM61.1022 39.2125C63.0722 39.3813 65.8865 40.1125 67.8003 41.0125C69.7703 41.9125 72.0218 43.5437 73.3727 45.0625C74.6673 46.4688 76.2996 49 77.0876 50.6875C78.2134 53.1063 78.4948 54.6812 78.4948 58C78.4948 61.3188 78.2134 62.8937 77.0876 65.3125C76.2996 67 74.6673 69.5312 73.3727 70.9375C71.9655 72.5125 69.714 74.0875 67.5189 75.1562C64.5357 76.5063 63.1848 76.7875 59.695 76.7875C56.3741 76.7875 54.798 76.5063 52.3777 75.3813C50.6891 74.5938 48.1562 72.9625 46.8616 71.725C45.4544 70.4875 43.6532 67.9563 42.6401 65.875C41.064 62.7812 40.8389 61.6562 40.8389 58C40.8952 54.5688 41.1766 53.1062 42.5275 50.1812C43.5407 48.0437 45.173 45.7375 46.5801 44.4438C47.931 43.2063 50.0136 41.7438 51.252 41.125C52.4903 40.5062 54.4603 39.775 55.586 39.4375C56.7681 39.1562 59.2447 39.0438 61.1022 39.2125V39.2125ZM57.7249 61.375C53.4471 57.1 52.7154 56.7062 52.04 57.1562C51.5334 57.4375 50.8017 58.1687 50.4639 58.675C49.9574 59.5187 50.4077 60.25 53.6723 63.4562L57.4435 67.2812L69.5452 55.1875L66.7308 52.375L57.7249 61.375Z" fill="#28BB76"/>
</g>
<defs>
<clipPath id="clip0_2159_903">
<rect width="120" height="120" rx="60" fill="white"/>
</clipPath>
</defs>
</svg>

                  </div>
              </div>
                <h3 className="mt-6">{t('chooseUsSection.features.feature3.title')}</h3>
                <p className="my-4 text-justify mb-0 font-normal leading-relaxed tracking-wide">
                {t('chooseUsSection.features.feature3.detail')}                </p>
              </div>
            </div>
    
            
          </section>
        </div>
      );
}
export default WhyChooseUs;


//     <div className="why-choose-us-box">
    //     <div className="container why-choose-us-container">
    //         <div className="main-circle text-start text-white text-2xl p-4 relative">
    //             <p className="w-2/3 ml-auto">{t('chooseUsSection.mainText')}</p>
    //         </div>
    //         <div className="sub-box relative text-center text-white font-semibold text-4xl " style={{right:"55%"}}>{t('chooseUsSection.subTitle')}</div>
            
    //             <div className="features">
    //                 <div className="feature-box">{t('chooseUsSection.features.feature1')}</div>
    //                 <div className="feature-box">{t('chooseUsSection.features.feature2')}</div>
    //                 <div className="feature-box">{t('chooseUsSection.features.feature3')}</div>
    //             </div>
    //         </div>
            
    // </div>