import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const reviewCarosule = [
  {
    image: "http://surl.li/jmllc",
    name: "Maha dev",
    description:
      "As a digital marketing agency. we strive to understand our client's bussiness goals first then all decisions made with those",

  },
  {
    image: "http://surl.li/jmllc",
    name: "punith",
    description:
      "As a digital marketing agency. we strive to understand our client's bussiness goals first then all decisions made with those",

  },
  {
    image: "http://surl.li/jmllc",
    name: "jai shankar",
    description:
      "As a digital marketing agency. we strive to understand our client's bussiness goals first then all decisions made with those"

  },
  {
    image: "http://surl.li/jmllc",
    name: "Naredra Modi",
    description:
      "As a digital marketing agency. we strive to understand our client's bussiness goals first then all decisions made with those",

  },
  {
    image: "http://surl.li/jmllc",
    name: "Rishi shetty",
    description:
      "As a digital marketing agency. we strive to understand our client's bussiness goals first then all decisions made with those"


  },
]

const clients = [
  { image: "https://arabianinfotech.com/cache/banner/clients/clients-1.jpeg" },
  { image: "https://arabianinfotech.com/cache/banner/clients/clients-2-1.jpeg" },
  { image: "https://arabianinfotech.com/cache/banner/clients/clients-3.jpeg" },
  { image: "https://arabianinfotech.com/cache/banner/clients/clients-4.jpeg" },
  { image: "https://arabianinfotech.com/cache/banner/clients/clients-5.jpeg" },
  { image: "https://arabianinfotech.com/cache/banner/clients/clients-6.jpeg" },
]
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


const Review = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center', padding: '50px 0 0 ' }}>What Our Students Say About Our Professional Training Course Dubai?</h2>
      <Carousel
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        customTransition="transform 2.5s ease-in-out"
        transitionDuration={500}
        arrows={false}
      >
        {reviewCarosule.map((item) => {
          return (
            <div className="testimonial-container" key={item.id} style={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', padding: '50px 30px' }}>
              <Card sx={{ maxWidth: '650px', height: '30vh', position: 'relative', borderRadius: '10px' }}>
                <CardMedia
                  component="img"
                  style={{ height: '80px', borderRadius: '50%', objectFit: 'contain', position: 'absolute', bottom: '10px', left: '-40%' }}
                  image={item.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{ textTransform: 'uppercase' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ fontSize: '20px' }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </Carousel >
      <div className="clien-container" style={{ margin: '40px' }} >
        <h1 style={{ textAlign: 'center' }}>Our Major Clients</h1>
        <p style={{ textAlign: 'center' }}>With our accredited ELV course and HVAC training courses in Dubai, we have helped various reputed organizations improve their employee skills and make them more productive.</p>
        <div className="clients-images" style={{ display: 'flex', justifyContent:'center' , gap: '3rem'}}>
          {clients.map(client => (
            <img className="client-image" src={client.image} alt="" />
          ))}

        </div>
      </div>
    </>
  )
}

export default Review