import React from 'react'
import { Reveal } from '../Animation/Reveal.tsx'
import Navbar from '../Template/Navbar.jsx'
import Footer from '../Template/Footer.jsx'
import aa2 from '../Assests/img/aa2.jpg'
import ArticleCard from '../Template/ArticleCard.jsx'
import Pagination from '../Template/Pagination.jsx'

const blogsItems = [
    {
        image : 'https://via.placeholder.com/150',
        title : 'Montu is Going to Breakup with Tuntuni',
        date : '18, March, 2017',
        comments : '33',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    },
    {
        image : 'https://via.placeholder.com/150',
        title : 'Montu is Going to Breakup with Tuntuni',
        date : '18, March, 2017',
        comments : '33',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    },
    {
        image : 'https://via.placeholder.com/150',
        title : 'Montu is Going to Breakup with Tuntuni',
        date : '18, March, 2017',
        comments : '33',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    },
    {
        image : 'https://via.placeholder.com/150',
        title : 'Montu is Going to Breakup with Tuntuni',
        date : '18, March, 2017',
        comments : '33',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    }
]

export const Blogs = () => {
  return (
    <section>
        <Navbar />
        <div className='bg-secondary-30'>
            <div className="relative h-[50vh] bg-cover bg-center px-20 py-36" style={{ backgroundImage: `url(${aa2})` }}>
                <div className='absolute inset-0 w-full h-full bg-secondary-30 bg-opacity-75 '></div>
                <div className='absolute p-10 z-10'>
                    <Reveal>
                        <h1 className='text-6xl font-extrabold text-white '>Blogs</h1>
                    </Reveal>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        {/* Search Bar */}
                        {/* Category */}
                    </div>
                    <div className='p-10 md:p-20'>
                    
                        <div className="grid grid-cols-1 gap-8 p-4">
                            {blogsItems.map((item, index) => (
                                <Reveal >
                                    <ArticleCard
                                        image={item.image}
                                        title={item.title}
                                        date={item.date}
                                        comments={item.comments}
                                        description={item.description}
                                    />
                                </Reveal>
                            ))}
                        </div>
                        {/* Add more ArticleCard components as needed */}
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </section>
  )
}
export default Blogs;