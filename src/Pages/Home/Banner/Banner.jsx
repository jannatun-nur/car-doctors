import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-lg" />
        <div className="absolute h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to to-[RGBA(21, 21, 21 ,)]">
          <div className="text-white space-y-7 w-1/3">
            <h2 className="text-6xl font-bold">
              Affordable price for car servicing
            </h2>
          </div>
          <div className="text-white mt-6">
            <p>there are many variations of passage of available</p>
          </div>
          <div className="flex mt-4">
            <button className="btn btn-warning mr-4">Discover More</button>
            <button className="btn btn-outline btn-warning">
              Latest Update
            </button>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4 ">
          <a
            href="#slide4"
            className="btn btn-circle bg-orange-500 text-white border-none"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-orange-500 text-white border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to to-[RGBA(21, 21, 21 ,)]">
          <div className="text-white space-y-7 w-1/3">
            <h2 className="text-6xl font-bold">
              Affordable price for car servicing
            </h2>
          </div>
          <div className="text-white mt-6">
            <p>there are many variations of passage of available</p>
          </div>
          <div className="flex mt-4">
            <button className="btn btn-warning mr-4">Discover More</button>
            <button className="btn btn-outline btn-warning">
              Latest Update
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
          <a
            href="#slide1"
            className="btn btn-circle bg-orange-500 text-white border-none"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-orange-500 text-white border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to to-[RGBA(21, 21, 21 ,)]">
          <div className="text-white space-y-7 w-1/3">
            <h2 className="text-6xl font-bold">
              Affordable price for car servicing
            </h2>
          </div>
          <div className="text-white mt-6">
            <p>there are many variations of passage of available</p>
          </div>
          <div className="flex mt-4">
            <button className="btn btn-warning mr-4">Discover More</button>
            <button className="btn btn-outline btn-warning">
              Latest Update
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
          <a
            href="#slide2"
            className="btn btn-circle bg-orange-500 text-white border-none"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-orange-500 text-white border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute h-full left-0 bottom-0 bg-gradient-to-r from-[#151515] to to-[RGBA(21, 21, 21 ,)]">
          <div className="text-white space-y-7 w-1/3">
            <h2 className="text-6xl font-bold">
              Affordable price for car servicing
            </h2>
          </div>
          <div className="text-white mt-6">
            <p>there are many variations of passage of available</p>
          </div>
          <div className="flex mt-4">
            <button className="btn btn-warning mr-4">Discover More</button>
            <button className="btn btn-outline btn-warning">
              Latest Update
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
          <a
            href="#slide3"
            className="btn btn-circle bg-orange-500 text-white border-none"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-orange-500 text-white border-none"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
