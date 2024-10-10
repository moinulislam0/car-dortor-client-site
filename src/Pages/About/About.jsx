import hero from'../../assets/hero1.jpg'
import hero2 from'../../assets/hero2.jpg'
const About = (props) => {
  return (
    <div className="hero bg-base-200  h-[600px]">
      <div className="hero-content flex-col lg:flex-row">
       <div className="lg:w-1/2 relative">
       <img
          src={hero}
          className="w-3/4 rounded-lg shadow-2xl"
        />
        <img src={hero2} className="w-1/2 absolute right-12 top-2/4 rounded-lg border-8 border-white shadow-2xl" />
       </div>
        <div className="lg:w-1/2 space-y-4 h-full items-center top-0 left-0">
           <h3 className='text-3xl text-orange-700 font-bold'>About us</h3>
          <h1 className="text-5xl font-bold">We are qualified and of experience in this field</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
