import React from 'react'

export const Skills = () => {
  return (
    <section className='bg-secondary-30'>
        <div className='flex justify-center items-center text-center py-20'>
            <h1 className='text-6xl font-extrabold text-white '>Skills</h1>
        </div>
        
        
        <div className="py-12 bg-primary-60 text-thirtary-10">
                <div className="mx-auto px-10">
                    <div>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2">
                                <div className="space-y-8 p-10">
                                    {/* Single Skill Start */}
                                    <div data-percent="95%">
                                        <div className="text-lg font-semibold mb-2">HTML 5</div>
                                        <div className="bg-thirtary-10 rounded h-6">
                                            <div className=" bg-white h-6 rounded" style={{ width: '95%' }}></div>
                                        </div>
                                    </div>
                                    {/* Single Skill End */}

                                    {/* Single Skill Start */}
                                    <div data-percent="75%">
                                        <div className="text-lg font-semibold mb-2">JavaScript</div>
                                        <div className="bg-thirtary-10 rounded h-6">
                                            <div className=" bg-white h-6 rounded" style={{ width: '75%' }}></div>
                                        </div>
                                    </div>
                                    {/* Single Skill End */}

                                    {/* Single Skill Start */}
                                    <div data-percent="85%">
                                        <div className="text-lg font-semibold mb-2">PHP</div>
                                        <div className="bg-thirtary-10 rounded h-6">
                                            <div className=" bg-white h-6 rounded" style={{ width: '85%' }}></div>
                                        </div>
                                    </div>
                                    {/* Single Skill End */}
                                </div>
                            </div>

                            <div className="w-full md:w-1/2">
                                <div className="space-y-8 p-10">
                                    {/* Single Skill Start */}
                                    <div data-percent="70%">
                                        <div className="text-lg font-semibold mb-2">Illustrator</div>
                                        <div className="bg-thirtary-10 rounded h-6">
                                            <div className="bg-white h-6 rounded" style={{ width: '70%' }}></div>
                                        </div>
                                    </div>
                                    {/* Single Skill End */}

                                    {/* Single Skill Start */}
                                    <div data-percent="95%">
                                        <div className="text-lg font-semibold mb-2">Photoshop</div>
                                        <div className=" bg-thirtary-10 rounded h-6">
                                            <div className=" bg-white h-6 rounded" style={{ width: '95%' }}></div>
                                        </div>
                                    </div>
                                    {/* Single Skill End */}

                                    {/* Single Skill Start */}
                                    <div data-percent="90%">
                                        <div className="text-lg font-semibold mb-2">Sony Vegas</div>
                                        <div className=" bg-thirtary-10 rounded h-6">
                                            <div className="bg-white h-6 rounded" style={{ width: '90%' }}></div>
                                        </div>
                                    </div>
                                    {/* Single Skill End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 bg-secondary-30 text-thirtary-10">
                <div className="mx-auto px-20">
                    <div>
                        <div className="w-full">
                            <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-8">
                                <div className="text-center p-6 bg-primary-60 rounded shadow-lg">
                                    <h2 className="text-4xl font-bold mb-2">02.</h2>
                                    <h3 className="text-2xl font-semibold mb-4">Web Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.</p>
                                </div>

                                <div className="text-center p-10 bg-primary-60 rounded shadow-lg">
                                    <h2 className="text-4xl font-bold mb-2">01.</h2>
                                    <h3 className="text-2xl font-semibold mb-4">UX/UI Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.</p>
                                </div>

                                <div className="text-center p-6 bg-primary-60 rounded shadow-lg">
                                    <h2 className="text-4xl font-bold mb-2">03.</h2>
                                    <h3 className="text-2xl font-semibold mb-4">App Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}
