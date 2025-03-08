import React, { useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { useTranslation } from "react-i18next";
// import { VerifyTokenFrontend } from "./components/Authentication-components/verifyToken";
import Loading from "./components/Loading/Loading";
import MaidDetail from "./Pages/Maid-Detail";
import BlogDetailsPage from "./Pages/BlogDetails";
import { SnackbarProvider } from "notistack";

const Home = lazy(() => import("./Pages/Home"));
const AllMaidsProfilePage = lazy(() => import("./Pages/All-Maids"));
const AboutUs = lazy(() => import("./Pages/About-Us"));
const ServicesPage = lazy(() => import("./Pages/Services-page"));
const LoginPage = lazy(() => import("./Pages/Login"));
const SignUpPage = lazy(() => import("./Pages/sign-up"));
// const ContactUs = lazy(() => import("./Pages/Contact-Us"));
const BlogPage = lazy(() => import("./Pages/Blog"));
const TermsAndConditionsPage = lazy(() => import("./Pages/T&C-page"));
const PrivacyPolicyPage = lazy(() => import("./Pages/PrivacyPolicyPage"));
const OnDemandPage = lazy(() => import("./Pages/OnDemandPage"));

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require("./locales/en.json"),
      },
      ar: {
        translation: require("./locales/ar.json"),
      },
    },
    fallbackLng: "ar",
    detection: {
      order: [
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const detectedLanguage = i18n.language;

    if (detectedLanguage === "ar") {
      document.body.setAttribute("dir", "rtl");
      const link = document.createElement("link");
      link.href = "rtl.css";
      link.rel = "stylesheet";
      link.type = "text/css";

      document.head.appendChild(link);
    } else {
      document.body.setAttribute("dir", "ltr");
      const existingLink = document.querySelector('link[href="rtl.css"]');
      if (existingLink) {
        existingLink.remove();
      }
    }
  }, [i18n.language]);

  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loading />
                  </div>
                }
              >
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/nepali-srilankan-housemaids"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loading />
                  </div>
                }
              >
                <AllMaidsProfilePage />
              </Suspense>
            }
          />
          <Route path="/maid-detail/:maidID" element={<MaidDetail />} />
          <Route
            path="/oman-nepali-housemaid"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loading />
                  </div>
                }
              >
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="/house-maid-services"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loading />
                  </div>
                }
              >
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path="/maids-login"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loading />
                  </div>
                }
              >
                <LoginPage />
              </Suspense>
            }
          />
          <Route
            path="/nepali-housekeeper"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loading />
                  </div>
                }
              >
                <SignUpPage />
              </Suspense>
            }
          />
          {/* <Route
            path="/contact"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loading />
                  </div>
                }
              >
                <ContactUs />
              </Suspense>
            }
          /> */}
          <Route
            path="/nepali-maids-muscat"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loading />
                  </div>
                }
              >
                <BlogPage />
              </Suspense>
            }
          />
          <Route
            path="/blogDetails"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loading />
                  </div>
                }
              >
                <BlogDetailsPage />
              </Suspense>
            }
          />
          <Route
            path="/on-demand"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loading />
                  </div>
                }
              >
                <OnDemandPage />
              </Suspense>
            }
          />
          <Route
            path="/terms-conditions"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loading />
                  </div>
                }
              >
                <TermsAndConditionsPage />
              </Suspense>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loading />
                  </div>
                }
              >
                <PrivacyPolicyPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loading />
                  </div>
                }
              >
                <Navigate to="/" />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
