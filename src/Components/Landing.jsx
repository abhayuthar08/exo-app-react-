import React from 'react'

function Landing() {
  return (
    <div className='relative w-full h-[150vh] sm:h-[250vh]'>
        <div className='picture'>
            <img className='w-full h-[150vh] sm:h-[250vh] object-cover' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="" />
        </div>

       <div className='top-0 absolute sm:left-16'>
       <div className='text text-white max-w-screen-2xl mx-auto px-5 sm:px-10'>
           <div className='para text-md mt-72 sm:mt-[35rem] sm:text-4xl sm:mb-20'>
           <p>Global degital design studio partnering</p>
            <p>with rands and business that create</p>
            <p>exceptional experience where people</p>
            <p>live , work and unwild.</p>

            <div className='sm:text-[14rem] headings text-6xl tracking-tighter leading-none mt-5 sm:mt-16'>
                <h1>Digital</h1>
                <h1>Design</h1>
                <h1>Experience</h1>
            </div>

            <div className='para2 sm:w-1/3 sm:text-xl mt-20 mb-10 '>
                <p>We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.</p>
            </div>
            <a className='sm:text-xl border-b-[.3px] sm:border-b-[1px] border-zinc-100 mt-10 pb-1' href="#">The Studio</a>
           </div>
        </div>
       </div>
    </div>
  )
}

export default Landing