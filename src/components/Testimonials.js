import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet-async';

const Testimonials = ({ testimonials, currentTestimonial, prevTestimonial, nextTestimonial }) => {
  return (
    <div className="bg-white p-8 border-b-2 border-black relative">
      <Helmet>
        <title>Home - IT AIO Solutions</title>
        <meta name="description" content="Read what our clients have to say about IT AIO Solutions. Our testimonials highlight the quality of service and customer satisfaction we consistently deliver." />
      </Helmet>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Testimonials</h2>
        <div className="relative bg-white p-8 rounded-lg max-w-3xl h-80 mx-auto shadow-lg mt-12">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <LazyLoadImage
              src={`${process.env.PUBLIC_URL}/images/quotes.svg`}
              alt="Quote Icon"
              className="w-16 h-16"
              effect="blur"
            />
          </div>
          <button onClick={prevTestimonial} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <img src={`${process.env.PUBLIC_URL}/images/leftArrow.png`} alt="Previous" className="w-8 h-8"/>
          </button>
          <div className="text-center text-xl flex items-center justify-center h-full">
            <div className="et_pb_slide_description">
              <div className="et_pb_slide_content">
                <p>{testimonials[currentTestimonial].content}</p>
                <h4 className="text-left mt-4"><span style={{ color: '#000000' }}><strong>{testimonials[currentTestimonial].author}</strong></span></h4>
              </div>
            </div>
          </div>
          <button onClick={nextTestimonial} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
            <img src={`${process.env.PUBLIC_URL}/images/rightArrow.png`} alt="Next" className="w-8 h-8"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
