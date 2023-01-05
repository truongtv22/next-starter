import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Background from '../components/Background';
import BackgroundBlur from '../components/BackgroundBlur';

import SectionSearch from '../components/SectionSearch';
import SectionFeatures from '../components/SectionFeatures';
import SectionGridProducts from '../components/SectionGridProducts';
import SectionReasons from '../components/SectionReasons';
import SectionPartners from '../components/SectionPartners';
import SectionSubscribe from '../components/SectionSubscribe';
import SectionClientSay from '../components/SectionClientSay';

export default function HomePage() {
  return (
    <Layout>
      <Header />
      <div className="relative overflow-hidden">
        <BackgroundBlur />
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <SectionSearch className="pt-10 lg:pt-16 lg:pb-16" />
          <SectionFeatures />
          <div className="relative py-16">
            <Background />
            <SectionGridProducts />
          </div>
          <SectionReasons />
          <div className="relative py-16">
            <Background className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
            <SectionPartners />
          </div>
          <SectionSubscribe />
          <div className="relative py-16">
            <Background />
            <SectionClientSay />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
