import { ThumbnailDiv } from "./styleComponents/divStyles";

export default function Thumbnail(props) {
  return (
    <ThumbnailDiv>
      <ul>
        {/* <li>{props.category}</li>
        <li>{props.description}</li> */}

        <li>
          <img src={props.image} />
        </li>
        <li>{props.title}</li>
        <li>{props.price}</li>
        {/* <li>{props.rating.count}</li>
        <li>{props.rating.rate}</li>
        <li>{props.title}</li> */}
      </ul>
    </ThumbnailDiv>
  );
}
