import React from "react";
import axios from "axios";
import Thumbnail from "./Thumbnail";
import { ContainerDiv } from "./styleComponents/divStyles";

function Store() {
  const api = "https://fakestoreapi.com/products";

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(api).then((response) => {
      setPost(response.data);
    });
  }, []);

  console.log(post);

  if (!post) return null;

  return (
    <ContainerDiv>
      {post.map((product) => {
        return (
          <Thumbnail
            image={product.image}
            title={product.title}
            price={product.price}
          ></Thumbnail>
        );
      })}
    </ContainerDiv>
  );
}

export default Store;

{
  /* <div>
<ul>
  <li>{product.category}</li>
  <li>{product.description}</li>
  <li>{product.id}</li>
  <li>
    <img src={} />
  </li>
  <li>{product.price}</li>
  <li>{product.rating.count}</li>
  <li>{product.rating.rate}</li>
  <li>{product.title}</li>
</ul>
</div> */
}
