import Layout from '../components/Layout';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Background from '../components/Background';

export default function HomePage() {
  return (
    <Layout>
      <Header />
      <div className="relative overflow-hidden">
        <Background />
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <Banner className="pt-10 lg:pt-16 lg:pb-16" />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
