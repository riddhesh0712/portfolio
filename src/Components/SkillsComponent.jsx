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
    <div className="py-16 bg-gray-900 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-20 w-full">
            
            {skills.map((skill, index) => (
                
                <SkillBar key={index} skill={skill} />
            ))}
        </div>
    </div>
  )
}
export default SkillsComponent
