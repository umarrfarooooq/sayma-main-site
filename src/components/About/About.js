import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

const AboutUsMain = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container py-8 sm:py-12 md:py-16 lg:py-20">
        <section className="relative md:py-12 py-4" id="about">
          <div className="container">
            <div className="flex justify-between flex-col lg:flex-row gap-2 md:gap-5 lg:gap-10 items-start lg:items-center">
              <div className="w-full">
                <div className="relative">
                  <div className="relative text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-[#031D92]">
                    {t("aboutUs.sectionTitle")}
                  </div>
                </div>
              </div>
              <div className="hidden lg:inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="32"
                  viewBox="0 0 72 32"
                  fill="none"
                >
                  <path
                    d="M62.5543 1.25422C60.8667 1.92925 56.0009 3.7012 51.7819 5.16377C43.991 7.8639 43.0065 8.25766 42.669 8.76394C42.3315 9.32646 43.3441 10.339 44.7222 10.789C46.3536 11.3516 47.563 11.2391 52.0913 10.1703C53.7789 9.77649 55.1852 9.52335 55.2415 9.5796C55.4384 9.74836 51.3319 12.7297 46.3817 16.0486C37.4938 21.9552 28.4652 25.8366 22.4181 26.3147C20.5055 26.4554 20.2242 26.4273 20.2242 26.0054C20.2242 25.7522 20.1117 25.5553 19.943 25.5553C19.3523 25.5553 19.6898 25.0772 20.7868 24.3459L21.9399 23.6146L21.3212 24.4584C21.0118 24.9366 20.7868 25.3866 20.8711 25.4428C20.9555 25.5272 21.3774 25.0772 21.7712 24.4584C22.2212 23.8115 22.6712 23.3896 22.8681 23.5021C23.0369 23.5865 23.0931 23.5865 22.9806 23.4459C22.8681 23.3334 22.9525 23.0521 23.1775 22.8271C23.7963 22.2083 23.7119 19.7613 23.0087 18.3269C22.0243 16.3018 19.2961 14.4736 16.7366 14.1361C15.8365 13.9954 15.2459 14.1079 14.4021 14.5298C12.0114 15.7674 10.7175 18.1581 11.0832 20.802C11.2801 22.1802 12.6301 25.3303 13.1645 25.6678C13.8114 26.0897 13.4177 26.4554 11.3926 27.3835C9.1706 28.4242 6.24546 29.2961 3.2922 29.8024C-0.27984 30.3931 0.0858017 31.7431 3.88285 31.9681C6.80799 32.1369 10.1831 31.6306 13.0239 30.5618C17.0741 29.0711 17.1866 29.043 19.0148 29.5774C21.8274 30.3931 24.19 30.6743 26.412 30.4774C33.8092 29.8024 44.7785 24.9366 55.0727 17.7644C56.0571 17.0893 56.9009 16.5549 56.9291 16.6112C56.9853 16.6674 56.5353 18.13 55.9165 19.902C54.8477 23.0521 54.5383 24.7115 55.1008 24.7115C55.2696 24.7115 55.3821 24.9084 55.3821 25.1334C55.3821 25.3585 55.5509 25.5835 55.7477 25.6116C55.9165 25.6116 56.2259 25.6678 56.3665 25.696C57.0697 25.8647 57.2384 25.8929 57.4916 25.9491C57.6603 25.9772 57.9979 26.1179 58.2791 26.2304C59.4042 26.7648 60.7824 24.5709 66.6326 12.9829L71.1891 3.92621L70.5984 2.96992C69.7546 1.61986 68.1796 0.438553 67.4764 0.663563C67.0826 0.804195 66.9139 0.719816 66.9139 0.410427C66.9139 -0.320858 65.8732 -0.0958481 62.5543 1.25422ZM13.3614 17.3425C12.8551 17.7925 12.8551 17.7925 13.1927 17.1737C13.3614 16.8081 13.5864 16.583 13.6989 16.6674C13.7833 16.7799 13.6427 17.0612 13.3614 17.3425ZM18.8179 19.7894C18.8179 20.7457 17.7491 23.0802 17.2147 23.249C16.7928 23.3615 16.4553 21.6177 16.6522 20.2957C16.7647 19.7332 17.1022 18.9738 17.4679 18.6081C18.0585 17.9894 18.1148 17.9612 18.4523 18.4113C18.6492 18.6925 18.8179 19.3113 18.8179 19.7894ZM18.9023 23.4177C18.621 23.8115 18.2835 24.149 18.171 24.149C18.0304 24.149 18.1991 23.7553 18.5367 23.2771C18.8742 22.8271 19.2117 22.4896 19.2961 22.574C19.3804 22.6302 19.2117 23.024 18.9023 23.4177Z"
                    fill="#031D92"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-4 lg:w-full">
                <div className="border-l-2 border-[#031D92]">
                  <div className="mx-8">
                    <p className="text-[#434146] text-sm sm:text-base md:text-xl lg:text-2xl my-0">
                      {t("aboutUs.paragraph")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative md:py-12 py-4" id="about">
          <div className="container">
            <div className="flex justify-between flex-col lg:flex-row gap-2 md:gap-10 items-start lg:items-center">
              <div className="w-full">
                <div className="relative">
                  {/* <img src={about} className="rounded-lg shadow-lg relative" alt="" /> */}
                  <div className="relative text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-[#031D92]">
                    {t("aboutUs.sectionTitle2")}
                  </div>
                  <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center"></div>
                </div>
              </div>
              <div className="hidden lg:inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="32"
                  viewBox="0 0 72 32"
                  fill="none"
                >
                  <path
                    d="M62.5543 1.25422C60.8667 1.92925 56.0009 3.7012 51.7819 5.16377C43.991 7.8639 43.0065 8.25766 42.669 8.76394C42.3315 9.32646 43.3441 10.339 44.7222 10.789C46.3536 11.3516 47.563 11.2391 52.0913 10.1703C53.7789 9.77649 55.1852 9.52335 55.2415 9.5796C55.4384 9.74836 51.3319 12.7297 46.3817 16.0486C37.4938 21.9552 28.4652 25.8366 22.4181 26.3147C20.5055 26.4554 20.2242 26.4273 20.2242 26.0054C20.2242 25.7522 20.1117 25.5553 19.943 25.5553C19.3523 25.5553 19.6898 25.0772 20.7868 24.3459L21.9399 23.6146L21.3212 24.4584C21.0118 24.9366 20.7868 25.3866 20.8711 25.4428C20.9555 25.5272 21.3774 25.0772 21.7712 24.4584C22.2212 23.8115 22.6712 23.3896 22.8681 23.5021C23.0369 23.5865 23.0931 23.5865 22.9806 23.4459C22.8681 23.3334 22.9525 23.0521 23.1775 22.8271C23.7963 22.2083 23.7119 19.7613 23.0087 18.3269C22.0243 16.3018 19.2961 14.4736 16.7366 14.1361C15.8365 13.9954 15.2459 14.1079 14.4021 14.5298C12.0114 15.7674 10.7175 18.1581 11.0832 20.802C11.2801 22.1802 12.6301 25.3303 13.1645 25.6678C13.8114 26.0897 13.4177 26.4554 11.3926 27.3835C9.1706 28.4242 6.24546 29.2961 3.2922 29.8024C-0.27984 30.3931 0.0858017 31.7431 3.88285 31.9681C6.80799 32.1369 10.1831 31.6306 13.0239 30.5618C17.0741 29.0711 17.1866 29.043 19.0148 29.5774C21.8274 30.3931 24.19 30.6743 26.412 30.4774C33.8092 29.8024 44.7785 24.9366 55.0727 17.7644C56.0571 17.0893 56.9009 16.5549 56.9291 16.6112C56.9853 16.6674 56.5353 18.13 55.9165 19.902C54.8477 23.0521 54.5383 24.7115 55.1008 24.7115C55.2696 24.7115 55.3821 24.9084 55.3821 25.1334C55.3821 25.3585 55.5509 25.5835 55.7477 25.6116C55.9165 25.6116 56.2259 25.6678 56.3665 25.696C57.0697 25.8647 57.2384 25.8929 57.4916 25.9491C57.6603 25.9772 57.9979 26.1179 58.2791 26.2304C59.4042 26.7648 60.7824 24.5709 66.6326 12.9829L71.1891 3.92621L70.5984 2.96992C69.7546 1.61986 68.1796 0.438553 67.4764 0.663563C67.0826 0.804195 66.9139 0.719816 66.9139 0.410427C66.9139 -0.320858 65.8732 -0.0958481 62.5543 1.25422ZM13.3614 17.3425C12.8551 17.7925 12.8551 17.7925 13.1927 17.1737C13.3614 16.8081 13.5864 16.583 13.6989 16.6674C13.7833 16.7799 13.6427 17.0612 13.3614 17.3425ZM18.8179 19.7894C18.8179 20.7457 17.7491 23.0802 17.2147 23.249C16.7928 23.3615 16.4553 21.6177 16.6522 20.2957C16.7647 19.7332 17.1022 18.9738 17.4679 18.6081C18.0585 17.9894 18.1148 17.9612 18.4523 18.4113C18.6492 18.6925 18.8179 19.3113 18.8179 19.7894ZM18.9023 23.4177C18.621 23.8115 18.2835 24.149 18.171 24.149C18.0304 24.149 18.1991 23.7553 18.5367 23.2771C18.8742 22.8271 19.2117 22.4896 19.2961 22.574C19.3804 22.6302 19.2117 23.024 18.9023 23.4177Z"
                    fill="#031D92"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-4 lg:w-full">
                <div className="border-l-2 border-[#031D92]">
                  <div className="mx-8">
                    <p className="text-[#434146] text-sm sm:text-base md:text-xl lg:text-2xl my-0">
                      {t("aboutUs.paragraph2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#F2F2F2] py-8 sm:py-12 md:py-16 lg:py-20">
        <section className="container">
          <div className="flex items-start justify-between flex-col lg:flex-row rounded-3xl py-10 lg:gap-6  container">
            <div className="mainCont flex flex-col gap-4 h-full w-full">
              <h1
                style={{ color: "#262F32", lineHeight: "1.3" }}
                className="max-w-2xl mb-2 md:mb-3 lg:mb-4 text-xl md:text-3xl lg:text-5xl font-extrabold tracking-tight leading-none dark:text-white"
              >
                {t("aboutUsMission.title")}
              </h1>

              <p
                style={{ color: "var(--neutral-700, #434146)" }}
                className="max-w-2xl text-justify font-normal text-sm md:text-lg"
              >
                <div>
                  <div>
                    <h4 className="text-sm font-semibold md:text-base">
                      {t("aboutUsMission.connectingSkills.subtitle")}
                    </h4>
                    <p className="text-sm">
                      {t("aboutUsMission.connectingSkills.content")}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold md:text-base">
                      {t("aboutUsMission.exceedingExpectations.subtitle")}
                    </h4>
                    <p className="text-sm">
                      {t("aboutUsMission.exceedingExpectations.content")}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold md:text-base">
                      {t("aboutUsMission.buildingPartnerships.subtitle")}
                    </h4>
                    <p className="text-sm">
                      {t("aboutUsMission.buildingPartnerships.content")}
                    </p>
                  </div>
                </div>
              </p>
            </div>
            <div
              className={`lg:mt-0 lg:flex justify-end items-center w-full h-full`}
            >
              {/* <div className="elipse absolute shadow-2xl" style={elipseStyle}>
                        </div> */}

              <img
                loading="lazy"
                className="w-full h-[22rem] object-cover object-center rounded-3xl"
                src="https://t4.ftcdn.net/jpg/00/96/54/53/360_F_96545306_cX6N4Fv2TTVRMKahA3aoCvxlUOGm2KkV.jpg"
                alt="A cheerful Nepali domestic worker in a white shirt holding a cleaning kit in one hand and wearing yellow gloves in the other, smiling."
              />
            </div>
          </div>
        </section>
      </div>
      <div className="py-8 sm:py-12 md:py-16 lg:py-20">
        <section className="container">
          <div className="w-full md:text-center mb-4 md:mb-8 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
            {t("officeSection.title")}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <div className="text-base md:text-2xl text-[#262F32] font-bold">
                {t("officeSection.name")}
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21.9994 16.9201V19.9201C22.0006 20.1986 21.9435 20.4743 21.832 20.7294C21.7204 20.9846 21.5567 21.2137 21.3515 21.402C21.1463 21.5902 20.904 21.7336 20.6402 21.8228C20.3764 21.912 20.0968 21.9452 19.8194 21.9201C16.7423 21.5857 13.7864 20.5342 11.1894 18.8501C8.77327 17.3148 6.72478 15.2663 5.18945 12.8501C3.49942 10.2413 2.44769 7.27109 2.11944 4.1801C2.09446 3.90356 2.12732 3.62486 2.21595 3.36172C2.30457 3.09859 2.44702 2.85679 2.63421 2.65172C2.82141 2.44665 3.04925 2.28281 3.30324 2.17062C3.55722 2.05843 3.83179 2.00036 4.10945 2.0001H7.10945C7.59475 1.99532 8.06524 2.16718 8.43321 2.48363C8.80118 2.80008 9.04152 3.23954 9.10944 3.7201C9.23607 4.68016 9.47089 5.62282 9.80945 6.5301C9.94399 6.88802 9.97311 7.27701 9.89335 7.65098C9.8136 8.02494 9.62831 8.36821 9.35944 8.6401L8.08945 9.9101C9.513 12.4136 11.5859 14.4865 14.0894 15.9101L15.3594 14.6401C15.6313 14.3712 15.9746 14.1859 16.3486 14.1062C16.7225 14.0264 17.1115 14.0556 17.4694 14.1901C18.3767 14.5286 19.3194 14.7635 20.2794 14.8901C20.7652 14.9586 21.2088 15.2033 21.526 15.5776C21.8431 15.9519 22.0116 16.4297 21.9994 16.9201Z"
                        stroke="#434146"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    dir="ltr"
                    className="text-sm md:text-base text-[#434146]"
                  >
                    +968 9620 1040
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="#434146"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 6L12 13L2 6"
                        stroke="#434146"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm md:text-base text-[#434146]">
                    info@saymamanpower.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUsMain;
