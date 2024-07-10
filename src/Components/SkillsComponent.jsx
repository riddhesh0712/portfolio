import React from 'react'

const skills = [
    { name: 'HTML 5', percentage: 95 },
    { name: 'JAVASCRIPT', percentage: 75 },
    { name: 'PHP', percentage: 85 },
    { name: 'ILLUSTRATOR', percentage: 70 },
    { name: 'PHOTOSHOP', percentage: 95 },
    { name: 'SONY VEGAS', percentage: 90 },
  ];

  const SkillBar = ({ skill }) => {
    return (
      <div className="mb-4">
        <div className="relative flex text-white mb-1 ">
            <div>
                {skill.name}
            </div> 
            <div className='absolute' style={{marginLeft: `${skill.percentage}%`}}>
                {skill.percentage}%
            </div>
        </div>
        <div className="relative h-1 rounded-full overflow-hidden bg-gray-700">
          <div
            style={{ width: `${skill.percentage}%` }}
            className="h-full bg-teal-400 relative flex items-center justify-end"
          >
          </div>
        </div>
      </div>
    );
  };
export const SkillsComponent = () => {
  return (
    <div id='skills-area' className="min-h-screen py-16 bg-gray-900 flex flex-col md:flex-row items-center justify-center">
      <div className='text-center py-10 px-20 text-primary-60'>
        <h1 className='text-5xl font-bold'>Skills</h1>
      </div>
      <div className="grid grid-cols-1  gap-8 px-20 w-full">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  )
}
export default SkillsComponent
