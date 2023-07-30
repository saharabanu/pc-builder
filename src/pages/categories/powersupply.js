import RootLayout from "@/components/Layout/RootLayout";
import Heading from "@/components/UI/Heading";
import ProductCard from "@/components/UI/ProductCard";
import { Col, Row } from "antd";


const PowerSupply = ({ products }) => {
  return (
    <div className="container-fluid">
    <Heading title={"ower Supply Unit"} />

    <div style={{display:"flex", justifyContent:'center', alignItems:"center", padding:'10px 0px', fontWeight:'bold'}}>
    <h2>Power Supply Unit</h2>
    </div>


    <Row gutter={[16, 16]}>
    {products?.map((product,i) => (<>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{span:6}} key={i}><ProductCard product={product}/></Col>
    </>))}
    </Row>
</div>
  );
};

PowerSupply.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://pc-builder-sage.vercel.app/api/products?category=Power Supply Unit`
  );
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
    revalidate: 10,
  };
};

export default PowerSupply;
