import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Mainform/imageslider.css";
const BlogCarosule = [
  {
    id: 1,
    coverImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    imagetitle: "public training",
    imagesubheader: "Job Oreinted Program for better Productivity",
    imagedescription:
      "Arabian Info-tech is a Training Institute specializing in academic and vocational training and certification. Students can choose from multiple Professional and Certification courses",
  },
  {
    id: 2,
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    coverImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    coverImage:
      "https://media.istockphoto.com/id/925320070/photo/young-girl-dreams-about-her-future.webp?b=1&s=170667a&w=0&k=20&c=gGo8zUNj2O7uuZMuigx2yaH2CWK-ekqAu2ZclMvw2Bs=",
  },
  {
    id: 5,
    coverImage:
      "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    coverImage:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ImageSlider = () => {
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        customTransition="transform 2.5s ease-in-out"
        transitionDuration={500}
      >
        {BlogCarosule.map((item) => {
          return (
            <div className="imageslider-container" key={item.id}>
              <div class="custom-shape-divider-bottom-1690392427">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                    class="shape-fill"
                  ></path>
                </svg>
              </div>
              <img
                className="images"
                src={item.coverImage}
                alt={item.id}
                style={{ width: "100%", height: "100vh", objectFit: "cover" }}
              />
              <div className="slider-content">
                <h4 style={{color: 'red'}}>{item.imagetitle}</h4>
              </div>
              
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default ImageSlider;
