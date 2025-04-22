import React from 'react'
import img1 from '../assets/Images/Scott.webp';
import img2 from '../assets/Images/Melissa.webp';
import img3 from '../assets/Images/Shallamar.webp';
import img4 from '../assets/Images/Shelby.webp';
import img5 from '../assets/Images/Yvette.webp';
import img6 from '../assets/Images/Lisa.webp';


const testimonials = [
  {
    name: "Yvette Switzer",
    title: "4th Grade Teacher",
    image: img1,
    text: "I use Quizizz to reinforce and check understanding after we've covered a concept pretty thoroughly. I use it in stations. I use it for tutoring. I also use it to review and prepare my students for benchmark and state tests. They love it every time.",
    color: "red",
    border: "red",
  },
  {
    name: "Melissa James",
    title: "Math Instructor",
    image: img2,
    text: "Quizizz motivates [students], increases confidence, and can help to establish a culture of learning and growing from mistakes.",
    color: "blue",
    border: "blue",
  },
  {
    name: "Shallamar Dean",
    title: "Science Teacher",
    image: img3,
    text: "I have students with IEPs, I am able to find lessons catering to their abilities and accommodation while being able to assign the other students with more rigorous assessments.",
    color: "green",
    border: "green",
  },
  // {
  //   name: "Shelby Lane",
  //   title: "5th Grade Teacher",
  //   image: img4,
  //   text: "Students are motivated by the power-ups, points, and sense of competition with their classmates. Students cheer when a classmate uses a power-up that helps everyone, and it encourages the community some students desperately need.",
  //   color: "orange",
  //   border: "orange",
  // },
  // {
  //   name: "Scott Morgan",
  //   title: "History Educator",
  //   image: img5,
  //   text: "One of my students who has an IEP in the area of behavior often refuses to practice or participate in class. However, anytime we play Quizizz ... he engages 100% and is reaching proficiency on those math standards.",
  //   color: "purple",
  //   border: "purple",
  // },
  // {
  //   name: "Lisa Cooper",
  //   title: "English Faculty",
  //   image: img6,
  //   text: "Quizizz was the obvious choice ... because teachers asked for it. [It] was fully aligned with district initiatives around student engagement and formative assessment",
  //   color: "teal",
  //   border: "teal",
  // },
];
const Testimonials = () => {
  return (
    <div className='w-full mt-25'>
      <div className='max-w-screen-xl mx-auto py-20 flex justify-center items-center gap-10 '>
         { testimonials.map((item,index)=>{
            return <div key={index} style={{ boxShadow: `-10px 10px 0px ${item.color}` }} className='w-[20rem] flex min-h-[400px] flex-col border-red-800 border-2 gap-5 rounded-[1rem] px-7 py-7  '>
            <div className='flex gap-6'>
              <img className='w-25 rounded-md' src={item.image} alt="" />
              <div className='flex flex-col justify-center '>
                <p>{item.name}</p>
                <p>{item.title}</p>
              </div>
            </div>
            <div>
              <p>{item.text}</p>
            </div>
          </div>
         })}
      </div>
    </div>
  )
}

export default Testimonials