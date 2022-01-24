import { ThumbnailDiv } from "./styleComponents/divStyles";
import { useNavigate } from "react-router-dom";

export default function Thumbnail(props) {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate(props.name);
  }
  return (
    <ThumbnailDiv onClick={handleClick}>
      <img src={props.image} />
      <ul>
        <li>{props.name}</li>
        <li>{props.price}</li>
        <li>{props.description}</li>

        {/* <li>{props.category}</li>
        <li>{props.description}</li>
        <li>{props.rating.count}</li>
        <li>{props.rating.rate}</li>
        <li>{props.title}</li> */}
      </ul>
    </ThumbnailDiv>
  );
}
