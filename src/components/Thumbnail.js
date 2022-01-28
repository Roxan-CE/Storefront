import { ThumbnailDiv } from "./styleComponents/divStyles";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ButtonImg, ThumbnailImage } from "./styleComponents/Imagestyles";
import Price from "./Price";
import { BreakDiv10 } from "./styleComponents/BreakDivs";
import { FlexSpacedT20, FlexDiv } from "./styleComponents/FlexDivs";

export default function Thumbnail(props) {
  const { addItem } = useCart();

  return (
    <ThumbnailDiv>
      <Link to={props.name}>
        <ThumbnailImage src={props.image} />
      </Link>

      <FlexDiv>
        <FlexSpacedT20>
          <h4>{props.name}</h4>
          <BreakDiv10></BreakDiv10>
        </FlexSpacedT20>
        <FlexDiv>
          <Price sale={props.sale} price={props.price}></Price>
          <ButtonImg onClick={() => addItem(props)} src="/assets/add.svg" />
        </FlexDiv>
      </FlexDiv>
    </ThumbnailDiv>
  );
}
