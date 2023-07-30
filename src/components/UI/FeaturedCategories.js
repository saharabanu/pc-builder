import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "CPU",
    image: '/images/cpu.png',
    href: "/categories/cpu",
  },
  {
    title: "Motherboard",
    image: '/images/motherboard.png',
    href: "/categories/motherboard",
  },
  {
    title: "RAM",
    image: '/images/ram.png',
    href: "/categories/ram",
  },
  {
    title: "Power Supply Unit",
    image: '/images/power.png',
    href: "/categories/powersupply",
  },
  {
    title: "Storage Device",
    image: '/images/storage.png',
    href: "/categories/storagedevice",
  },
  {
    title: "Monitor",
    image: '/images/monitor.png',
    href: "/categories/monitor",
  },
  {
    title: "Others",
    image: '/images/others.png',
    href: "/categories/others",
  },
];


const FeaturedCategories = () => {
  return (
    <div className="container-fluid">

<div style={{textAlign:"center",padding:"40px 10px"}}>
<h2>Featured Categories</h2>
    </div>


    <Row gutter={[8, 8]}>

    {categories?.map((category) => (<Col key={category?.title} xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{span:4}} >
          <Link href={category?.href}>
          <div style={{background:"#fff",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding:'30px  ', borderRadius: "10px"}}>
          <Image width={50}  height={50} src={category?.image} alt="category-img"></Image>
          <p> {category?.title}</p>
          </div>
          </Link>
  
  
  </Col>
    ))}
  
  
  
</Row>

    </div>
  )
}

export default FeaturedCategories