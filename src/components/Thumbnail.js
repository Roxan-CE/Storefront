import { BreakDiv, FlexDiv, ThumbnailDiv } from "./styleComponents/divStyles";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import formatter from "./formatter";
import { ButtonImg, ThumbnailImage } from "./styleComponents/Imagestyles";
import { RedText, Striked } from "./styleComponents/TextStyles";
import sale from "./Sale";

export default function Thumbnail(props) {
  const navigate = useNavigate();
  const { addItem } = useCart();

  return (
    <ThumbnailDiv>
      <Link to={props.name}>
        <ThumbnailImage src={props.image} />
      </Link>

      <FlexDiv className="thisDiv">
        <FlexDiv margin="20px 0 0">
          <h4>{props.name}</h4>
          <BreakDiv margin="10px 0"></BreakDiv>
        </FlexDiv>
        <FlexDiv>
          {props.sale ? (
            <h4>
              <Striked>{formatter.format(props.price)}</Striked>
              <RedText>{formatter.format(props.price * sale)}</RedText>
            </h4>
          ) : (
            <h4>{formatter.format(props.price)}</h4>
          )}

          <ButtonImg onClick={() => addItem(props)} src="/assets/add.svg" />

          {/* <li>{props.category}</li>
        <li>{props.description}</li>
        <li>{props.rating.count}</li>
        <li>{props.rating.rate}</li>
        <li>{props.title}</li> */}
        </FlexDiv>
      </FlexDiv>
    </ThumbnailDiv>
  );
}
