import img9 from "@assets/about/relaiable_abs1.webp";
import img10 from "@assets/about/relaiable_abs2.webp";
import img7 from "@assets/about/relaiable_abs3.webp";
import img8 from "@assets/about/relaiable_abs4.webp";
import img5 from "@assets/home/best_quality.webp";
import img6 from "@assets/home/low_cost.webp";
import img3 from "@assets/home/story-card1.webp";
import img2 from "@assets/home/story-card2.webp";
import img1 from "@assets/home/story-card3.webp";
import img4 from "@assets/home/top_related.webp";
import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const Gallary = () => {
  const itemData = [
    {
      img: img1,
      title: "Bed",
    },
    {
      img: img2,
      title: "Books",
    },
    {
      img: img3,
      title: "Sink",
    },
    {
      img: img4,
      title: "Kitchen",
    },
    {
      img: img5,
      title: "Blinds",
    },
    {
      img: img6,
      title: "Chairs",
    },
    {
      img: img7,
      title: "Storage",
    },
    {
      img: img8,
      title: "Candle",
    },
    {
      img: img9,
      title: "Laptop",
    },
    {
      img: img10,
      title: "Doors",
    },
    {
      img: img8,
      title: "Coffee",
    },
    {
      img: img1,
      title: "Storage",
    },
    {
      img: img2,
      title: "Candle",
    },
    {
      img: img9,
      title: "Coffee table",
    },
    {
      img: img3,
      title: "Chairs",
    },
  ];
  return (
    <Box>
      <ImageList variant="masonry" cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Gallary;
