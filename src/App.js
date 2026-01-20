import React, { useState, useEffect, useRef, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useParams, useLocation } from 'react-router-dom';
import { NavigationProvider } from './Preload/navigationProvider';
import { useTranslation } from 'react-i18next';
import './App.css';
import Header from './Components/HeaderComponent/Header';
import Footer from './Components/FooterComponent/Footer';
import PreloadLinkHandler from './Components/preLoadLinkHandler';
import Preloader from './Components/preLoader';
import CustomCursor from './Components/NoiseEffect/customCursor';

const LanguageWrapper = React.memo(() => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { i18n, t } = useTranslation();
 
  useEffect(() => {
    const supported = ['de', 'en', 'fr', 'es', 'pl'];
    i18n.changeLanguage(supported.includes(lang) ? lang : 'de');
  }, [lang, i18n]);

  return (
    <>
      <Header />

      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="hotelsresorts" element={<HotelPage />} />
        <Route path="campgrounds" element={<CampGrounds/>}/>
        <Route path="schools-universities" element={<Schools/>}/>
        <Route path="factories" element={<FactoryPage/>}/>
        <Route path="clinics" element={<ClinicsPage/>}/>
        <Route path="municipalities" element={<CitiesPage/>}/>
        <Route path="senior-homes" element={<SeniorHomes/>}/>
        <Route path="transportation" element={<Transpotationpage/>}/>
        <Route path='events-festivals' element={<EventsPage/>}/>
        <Route path='offices' element={<OfficesPage/>}/>


        <Route path="software" element={<NafCloud/>}/>
        <Route path="nafai" element={<NafAi/>}/>
        <Route path="telemetry-monitoring" element={<Telemetry />}/>
        <Route path="payment" element={<Payment />}/>
        <Route path="reuse-return" element={<ReuseReturn/>}/>
        <Route path="cloudKitchenPayments" element={<CloudKitchen/>}/>
        <Route path='software-integration' element={<SoftwareIntegrationPage/>}/>

        <Route path="machine" element={<MachinesPage />}/>
        <Route path="maintaince" element={<MantaincePage />} />
        <Route path="products/gourmet-machine" element={<GourmetVendingMachine />} />
        <Route path="products/ice-cream-machine" element={<SoftIceVendingMachine />} />
        <Route path="products/pizza-machine" element={<PizzaVendingMachine />} />
        <Route path="software" element={<SoftwarePage />} />
        <Route path="company/about" element={<AboutPage />} />
        <Route path="company/menu" element={<Menu />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="membership" element={<Membership />} />
         <Route path="support" element={<Support/>} /> 
        <Route path="/login" element={<Membership />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/payment/:machineNumber/:amount" element={<PaymentPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-use" element={<TermsOfUsePage />} />
        <Route path="imprint" element={<ImprintsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes> */}

      <Footer />
    
    
    </>

  );
});



function App() {
  return (
     <NavigationProvider>
      <BrowserRouter>
        <CustomCursor />
        <PreloadLinkHandler>
          {/* Single Suspense boundary wrapping everything */}
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/de" />} />
              <Route path="/:lang/*" element={<LanguageWrapper />} />
            </Routes>
          </Suspense>
        </PreloadLinkHandler>
      </BrowserRouter>
    </NavigationProvider>
  );
}

export default App;
