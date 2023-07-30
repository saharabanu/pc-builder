import { Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { addProductToBuilder } from "@/redux/features/builderSlice";
const { Meta } = Card;

const CategoryProductCard = ({ product }) => {
  const sumOfRatings = product?.Reviews.reduce(
    (total, review) => total + review.IndividualRating,
    0
  );
  const averageRating = sumOfRatings / product?.Reviews.length;

  const router = useRouter();

  const handleProductClick = () => {
    // Redirect the user to the product detail page when the card is clicked
    router.push(`/products/${product?._id}`);
  };

  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.builder.chooseSelectedCategory);

  const handleAddProduct = (product) => {
    if (product.Category === "CPU/Processor") {
      dispatch(addProductToBuilder({ key: "cpu", data: product }));
      router.push("/pc-builder");
    } else if (product?.Category === "RAM") {
      dispatch(addProductToBuilder({ key: "ram", data: product }));
      router.push("/pc-builder");
    } else if (product?.Category === "Motherboard") {
      dispatch(addProductToBuilder({ key: "motherboard", data: product }));
      router.push("/pc-builder");
    } else if (product?.Category === "Monitor") {
      dispatch(addProductToBuilder({ key: "monitor", data: product }));
      router.push("/pc-builder");
    } else if (product?.Category === "Storage Device") {
      dispatch(addProductToBuilder({ key: "storage", data: product }));
      router.push("/pc-builder");
    } else if (product?.Category === "Power Supply Unit") {
      dispatch(addProductToBuilder({ key: "powersupply", data: product }));
      router.push("/pc-builder");
    } else if (product?.Category === "Others") {
      dispatch(addProductToBuilder({ key: "others", data: product }));
      router.push("/pc-builder");
    }
  };

  return (
    <div className="container-fluid">
      <div>
        <Card 
          hoverable
          style={{
            width: 240,
          }}
          cover={<Image alt="example" src={product?.image} width={100} height={200} />}
        >
          <Meta title={product?.ProductName} />
          <div onClick={handleProductClick}>
            <p>{product?.Description} </p>
            <span>{product?.Category}</span>
            <span style={{ color: "red", paddingLeft: "10px" }}>{product?.Status}</span>
            <h5>{product?.Price}</h5>
          </div>
         {categoryState !== "" && ( <button onClick={() => handleAddProduct(product)}>Add To Build</button>)}
        </Card>
        
      </div>
    </div>
  );
};

export default CategoryProductCard;
