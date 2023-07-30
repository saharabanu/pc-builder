import RootLayout from "@/components/Layout/RootLayout";
import CategoryProductCard from "@/components/UI/CategoryProductCard";
import Heading from "@/components/UI/Heading";
import { Row ,Col} from "antd";


const Others = ({ products }) => {
  return (
    <div className="container-fluid">
      <Heading title={"Others"} />

      <h2 className="text-2xl font-bold [68px]">Others</h2>
      <Row gutter={[16, 16]}>
    {products?.map((product,i) => (<>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{span:6}} key={i}><CategoryProductCard product={product}/></Col>
    </>))}
      
      </Row>
    </div>
  );
};

Others.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(`https://pc-builder-sage.vercel.app/api/products?category=Others`);
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
};

export default Others;
