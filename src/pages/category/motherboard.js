import RootLayout from "@/components/Layout/RootLayout";
import CategoryProductCard from "@/components/UI/CategoryProductCard";
import Heading from "@/components/UI/Heading";
import { Col, Row } from "antd";


const Motherboard = ({ products }) => {
  return (
    <div className="container-fluid">
      <Heading title={"Motherboard"} />

      <h2 className="text-2xl font-bold mb-[68px]">Motherboard</h2>
      <Row gutter={[16, 16]}>
    {products?.map((product,i) => (<>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{span:6}} key={i}><CategoryProductCard product={product}/></Col>
    </>))}
      
      </Row>
    </div>
  );
};

Motherboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://pc-builder-sage.vercel.app/api/products?category=Motherboard`
  );
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
};

export default Motherboard;
