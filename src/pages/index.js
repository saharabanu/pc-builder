import RootLayout from '@/components/Layout/RootLayout';
import Banner from '@/components/UI/Banner';
import FeaturedCategories from '@/components/UI/FeaturedCategories';
import FeaturedProduct from '@/components/UI/FeaturedProduct';


const HomePage = () => {
  return (
    <> 
    <Banner/>
    <FeaturedProduct/>
    <FeaturedCategories/>
    
    </>
  )
}

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
   <RootLayout>
    {page}
   </RootLayout>
  )
}