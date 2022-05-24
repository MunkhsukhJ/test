import Header from '../../layout/header';
import HeroSection from './_sections/Hero.section';
import CategorySection from './_sections/Category.section';
import SupplySection from './_sections/Supply.section';
import SpecialBrandsSection from './_sections/SpecialBrands.section';
import SpecialCatsSection from './_sections/SpecialCats.section';

const Home = () => (
  <div>
    <Header />
    <HeroSection />
    <CategorySection />
    <SupplySection />
    <SpecialBrandsSection />
    <SpecialCatsSection />
    <SpecialBrandsSection
      title="Шуурхай түгээлт"
      images={['https://ebazaar.mn/ad/20220502/1.jpg', 'https://ebazaar.mn/ad/20220502/2.jpg', 'https://ebazaar.mn/ad/20220502/3.jpg']}
    />
  </div>
);

export default Home;
