import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../carosule/carosule.css'

const Carosule = () => {
  const BlogCarosule = [
    {
      id: 1,
      coverImage:
        "https://arabianinfotech.com/cache/banner/certifications/sertification-2.jpeg",
    },
    {
      id: 2,
      coverImage:
        "https://arabianinfotech.com/cache/banner/certifications/sertification-3.jpeg",
    },
    {
      id: 3,
      coverImage:
        "https://arabianinfotech.com/cache/banner/certifications/sertification-4.jpeg",
    },
    {
      id: 4,
      coverImage:
        "https://arabianinfotech.com/cache/banner/certifications/sertification-5.jpeg",
    },
    {
      id: 5,
      coverImage:
        "https://arabianinfotech.com/cache/banner/certifications/sertification-1-1.jpeg",
    },
    {
      id: 6,
      coverImage:
        "https://arabianinfotech.com/cache/banner/certifications/sertification-1.jpeg",
    },
  ];

  const responsive = {
  
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
  
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },

      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
     
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}  
        infinite={true}
        style={{ width: "100%", height: "30px", display: "flex", gap: 60 }}
      >
        {BlogCarosule.map((item) => {
          return (
            <div className="container" key={item.id}>
              <img
                className="images"
                src={item.coverImage}
                alt={item.id}
                style={{ width: 300 }}
              />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Carosule;
