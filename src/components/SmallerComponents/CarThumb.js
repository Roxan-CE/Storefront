import { ThumbnailDiv } from "../styleComponents/divStyles";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import {
  ButtonImg,
  CarThumbImg,
  ThumbnailImage,
} from "../styleComponents/Imagestyles";
import Price from "./Price";
import { BreakDiv10 } from "../styleComponents/BreakDivs";
import {
  FlexSpacedT20,
  FlexDiv,
  LeftFlex,
  FlexSpaced20,
  RightFlex,
} from "../styleComponents/FlexDivs";
import { Title1 } from "../styleComponents/TextStyles";
import add from "../../assets/Icons/add.svg";

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
          <ButtonImg onClick={() => addItem(props)} src={add} />
        </div>
      </div>
    </div>
  );
}
