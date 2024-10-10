import banner from '../../../assets/banner.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import banner4 from '../../../assets/banner4.jpg'
const Banner = (props) => {

  return (
    <div className=' '>
      <div className="carousel w-full h-[600px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img 
            src={banner}
            className="w-full brightness-50 rounded-xl"
          />
          <div className="absolute flex items-center h-full left-0 top-0 ">
             <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                <p>There are many variations of passages of avialable ,but the majority have suffered alteration in some form</p>
                 <div>
                    <button className='btn btn-primary mr-5'> Discover</button>
                    <button className='btn btn-outline btn-secondary'>Test project</button>
                 </div>
             </div>
             
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={banner2}
            className="w-full"
          />
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={banner3}
            className="w-full"
          />
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={banner4}
            className="w-full"
          />
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
