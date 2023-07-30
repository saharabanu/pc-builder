import RootLayout from "@/components/Layout/RootLayout";
import Heading from "@/components/UI/Heading";
import ProductCard from "@/components/UI/ProductCard";
import { Col, Row } from "antd";


const Others = ({ products }) => {
  return (
    <div className="container-fluid">
    <Heading title={"Others"} />

    <div style={{display:"flex", justifyContent:'center', alignItems:"center", padding:'10px 0px', fontWeight:'bold'}}>
    <h2>Others</h2>
    </div>


    <Row gutter={[16, 16]}>
    {products?.map((product,i) => (<>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{span:6}} key={i}><ProductCard product={product}/></Col>
    </>))}
    </Row>
</div>
  );
};

Others.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/products?category=Others`);
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
    revalidate: 10,
  };
};

export default Others;
