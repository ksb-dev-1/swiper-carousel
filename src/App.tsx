import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { SiAccenture } from "react-icons/si";
import { SiInfosys } from "react-icons/si";
import { SiWipro } from "react-icons/si";
import { SiSwiggy } from "react-icons/si";
import { FaAtlassian } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiNetflix } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaUber } from "react-icons/fa";
//import { SiPaytm } from "react-icons/si";
//import { SiAdidas } from "react-icons/si";
//import { FaAmazon } from "react-icons/fa";
//import { SiFlipkart } from "react-icons/si";
//import { SiZomato } from "react-icons/si";
import { FaStar } from "react-icons/fa";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Company = ({
  icon,
  name,
  ratings,
  reviews,
}: //path,
{
  icon: React.ReactNode;
  name: string;
  ratings: number;
  reviews: string;
  path: string;
}) => {
  return (
    <div className="company-container">
      {icon}
      <div className="name-rating-review">
        <p className="name">{name}</p>
        <div className="rating-review">
          <p className="rating">
            <FaStar className="rating-icon" /> {ratings}
          </p>
          <span style={{ color: "#999" }}> | </span>
          <p className="review">
            {reviews} <span style={{ fontSize: "0.7rem" }}>reviews</span>
          </p>
        </div>
      </div>
      <p className="description">Description</p>
      {/* <NavLink to="#">View Jobs</NavLink> */}
      <button className="nav-link">View Jobs</button>
    </div>
  );
};

export default function App() {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={5}
      slidesPerGroup={1}
      navigation // Handle slide change event
      pagination={{ clickable: true }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
      }}
      className="carousel-container"
    >
      <SwiperSlide>
        <Company
          icon={<SiAccenture className="company-icon accenture-icon" />}
          name="Accenture"
          ratings={4.5}
          reviews={"8.9k+"}
          path="accenture"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Company
          icon={<SiInfosys className="company-icon infosys-icon" />}
          name="Infosys"
          ratings={3.9}
          reviews={"2.1k+"}
          path="infosys"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Company
          icon={<SiSwiggy className="company-icon swiggy-icon" />}
          name="Swiggy"
          ratings={4.0}
          reviews={"3.4k+"}
          path="swiggy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Company
          icon={<SiWipro className="company-icon wipro-icon" />}
          name="Wipro"
          ratings={4.1}
          reviews={"8.1k+"}
          path="wipro"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Company
          icon={<FaAtlassian className="company-icon atlassian-icon " />}
          name="Atlassian"
          ratings={4.3}
          reviews={"4.7k+"}
          path="atlassian"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Company
          icon={<FcGoogle className="company-icon" />}
          name="Google"
          ratings={4.2}
          reviews={"12.8k+"}
          path="google"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Company
          icon={<SiNetflix className="company-icon netflix-icon" />}
          name="Netflix"
          ratings={4.1}
          reviews={"1.3k+"}
          path="netflix"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Company
          icon={<FaMicrosoft className="company-icon microsoft-icon" />}
          name="Microsoft"
          ratings={4.5}
          reviews={"14.7k+"}
          path="microsoft"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Company
          icon={<FaSpotify className="company-icon spotify-icon" />}
          name="Spotify"
          ratings={4.2}
          reviews={"7.6k+"}
          path="spotify"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Company
          icon={<FaUber className="company-icon" />}
          name="Uber"
          ratings={3.8}
          reviews={"5.7k+"}
          path="uber"
        />
      </SwiperSlide>
    </Swiper>
  );
}
