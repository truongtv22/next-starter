import Heading from '../Heading';
import ProductCard from '../ProductCard';
import ButtonPrimary from '../Button/ButtonPrimary';

const products = [
  {
    id: 1,
    name: 'APAC Sim',
    image:
      'http://stage.xplori.world/media/images/products/2021/12/Apac_Sim.png',
    country: 'APAC Sim',
    price: '19.00',
  },
];

export default function SectionGridFeaturePlaces({ gridClass = '' }) {
  const renderCard = (item) => {
    return <ProductCard key={item.id} data={item} />;
  };

  return (
    <div className="nc-SectionGridFeaturePlaces relative">
      <Heading desc="Stay connected to the internet on your trip. Buy a travel eSIM and forget about paying roaming fees.">
        Where are you traveling to next?
      </Heading>
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {products.map(renderCard)}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary>Show me more</ButtonPrimary>
      </div>
    </div>
  );
}
