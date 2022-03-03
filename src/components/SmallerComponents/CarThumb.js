import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ButtonImg, CarThumbImg } from "../styleComponents/Imagestyles";
import Price from "./Price";
import { Title1 } from "../styleComponents/TextStyles";
import add from "../../assets/Icons/add.svg";
import toast from "react-hot-toast";
import ToastOptions from "./ToastOptions";

export default function CarThumb(props) {
  const { addItem } = useCart();

  return (
    <div className="carThumb" style={{ width: "270px", height: "340px" }}>
      <Link to={"/all-products/" + props.name}>
        <CarThumbImg src={props.image} />
      </Link>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "60px",
          paddingTop: "10px",
        }}
      >
        <div style={{ width: "80%" }}>
          <Title1>{props.name}</Title1>
          <div>
            <Price sale={props.sale} price={props.price}></Price>
          </div>
        </div>
        <div style={{ width: "10%" }}>
          <ButtonImg
            onClick={() => {
              addItem(props);
              toast(props.name + " has been added to your cart.", ToastOptions);
            }}
            src={add}
          />
        </div>
      </div>
    </div>
  );
}
