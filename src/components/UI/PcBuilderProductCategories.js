import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

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
const dispatch = useDispatch();
const router = useRouter();
  const builderState = useSelector((state) => state.builder.selectedProducts);
  const handleChooseClick = (redirectUri, title) => {
    router.push(redirectUri);
    dispatch(chooseSelectCategory(title));
  };


  const showChoosedProduct = (category) => {
    if (category === "CPU") {
      return builderState["cpu"];
    } else if (category === "RAM") {
      return builderState["ram"];
    } else if (category === "Monitor") {
      return builderState["monitor"];
    } else if (category === "Motherboard") {
      return builderState["motherboard"];
    } else if (category === "Storage Device") {
      return builderState["storage"];
    } else if (category === "Power Supply Unit") {
      return builderState["powersupply"];
    } else if (category === "Others") {
      return builderState["others"];
    }
  };
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
                    <Button onClick={()=> handleChooseClick(category?.href, category?.title)}>Choose</Button>
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
