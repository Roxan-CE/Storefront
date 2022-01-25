import { ThumbnailDiv } from "./styleComponents/divStyles";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

export default function Thumbnail(props) {
  const navigate = useNavigate();
  const { addItem } = useCart();

  function handleClick(event) {
    navigate(props.name);
  }
  return (
    <ThumbnailDiv>
      <img src={props.image} onClick={handleClick} />
      <div>
        <ul>
          <li>{props.name}</li>
          <li>{props.price}</li>
          <li>
            <button onClick={() => addItem(props)}>Add to Cart</button>
          </li>

          {/* <li>{props.category}</li>
        <li>{props.description}</li>
        <li>{props.rating.count}</li>
        <li>{props.rating.rate}</li>
        <li>{props.title}</li> */}
        </ul>
      </div>
    </ThumbnailDiv>
  );
}
