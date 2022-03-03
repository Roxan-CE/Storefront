import { ThumbnailDiv } from "../styleComponents/divStyles";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ButtonImg, ThumbnailImage } from "../styleComponents/Imagestyles";
import Price from "./Price";
import { BreakDiv10 } from "../styleComponents/BreakDivs";
import { FlexSpacedT20, FlexDiv } from "../styleComponents/FlexDivs";
import { Title1 } from "../styleComponents/TextStyles";
import add from "../../assets/Icons/add.svg";
import ToastOptions from "./ToastOptions";
import toast from "react-hot-toast";

export default function Thumbnail(props) {
  const { addItem } = useCart();
  const navigate = useNavigate();

  function handleClick() {
    navigate(props.name);
  }

  return (
    <ThumbnailDiv>
      <ThumbnailImage onClick={handleClick} src={props.image} />
      <FlexDiv>
        <FlexSpacedT20>
          <Title1>{props.name}</Title1>
          <BreakDiv10></BreakDiv10>
        </FlexSpacedT20>
        <FlexDiv>
          <Price sale={props.sale} price={props.price}></Price>
          <ButtonImg
            onClick={() => {
              addItem(props);
              toast(props.name + " has been added to your cart.", ToastOptions);
            }}
            src={add}
          />
        </FlexDiv>
      </FlexDiv>
    </ThumbnailDiv>
  );
}
