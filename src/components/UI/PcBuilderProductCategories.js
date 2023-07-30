import { Button, Col, Row } from "antd";
import Image from "next/image";

const categories = [
  {
    title: "CPU",
    image: "/images/cpu.png",
    href: "/category/cpu",
  },
  {
    title: "Motherboard",
    image: "/images/motherboard.png",
    href: "/category/motherboard",
  },
  {
    title: "RAM",
    image: "/images/ram.png",
    href: "/category/ram",
  },
  {
    title: "Power Supply Unit",
    image: "/images/power.png",
    href: "/category/powersupply",
  },
  {
    title: "Storage Device",
    image: "/images/storage.png",
    href: "/category/storagedevice",
  },
  {
    title: "Monitor",
    image: "/images/monitor.png",
    href: "/category/monitor",
  },
  {
    title: "Others",
    image: "/images/others.png",
    href: "/category/others",
  },
];
const PcBuilderProductCategories = () => {
  return (
    <div>
      <Row gutter={[8, 8]}>
        {categories?.map((category) => (
          <Col
            key={category?.title}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            xl={{ span: 24 }}
          >
            <div
              style={{
                background: "#fff",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: "10px  ",
                borderRadius: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" , justifyContent:"space-between"}}>
                <div style={{ display: "flex", alignItems: "center" , justifyContent:"space-between"}}>
                  <Image width={50} height={50} src={category?.image} alt="category-img"></Image>
                  <p style={{ marginLeft: "10px" }}> {category?.title}</p>
                </div>
                <div>
                    <Button>Choose</Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PcBuilderProductCategories;
