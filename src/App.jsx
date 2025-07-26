import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import HeroSection from './components/sections/HeroSection'
import AllInOneSection from './components/sections/AllInOneSection'
import WhatIsSkilline from './components/sections/WhatIsSkilline'
import FeaturesSection from './components/sections/FeaturesSection'

import AssessmentsSection from './components/sections/AssessmentsSection'
import ClassManagementSection from './components/sections/ClassManagementSection'
import DiscussionsSection from './components/sections/DiscussionsSection'
import IntegrationsSection from './components/sections/IntegrationsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import NewsSection from './components/sections/NewsSection'
import Footer from './components/layout/Footer'
import ErrorReporter from './components/ErrorReporter'
import TrustedCompanies from './components/sections/TrustedCompanies'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ErrorReporter />
        <Navigation />
        <main className="flex-grow">
          <HeroSection />
          <TrustedCompanies/>
          <AllInOneSection />
          <WhatIsSkilline />
          <FeaturesSection />
          {/* <ToolsSection /> */}
          <AssessmentsSection />
          <ClassManagementSection />
          <DiscussionsSection />
          <IntegrationsSection />
          <TestimonialsSection />
          <NewsSection />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
