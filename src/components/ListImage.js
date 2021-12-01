import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import ImageCard from "./ImageCard";
import Gift_Fetcher from "./services/Gift_Fetcher";
import { useParams } from "react-router";

export default function ListImage({ props }) {
  const [gift, setGift] = useState([]);
  const { keyword } = useParams();
  useEffect(() => {
    Gift_Fetcher(keyword).then((gift_data) => setGift(gift_data));
  }, [keyword]);
  console.log(gift);
  const breakpointColumnsObj = {
    default: 3,
    1400: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="container px-4 mx-auto max-w-7xl">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {gift.map(({ urls, description, id, user, links }) => (
          <ImageCard
            key={id}
            url={urls.small}
            title={description}
            user={user}
            links={links}
          />
        ))}
      </Masonry>
    </div>
  );
}
