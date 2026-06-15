import Link from "next/link";
export default function ResumePage() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 70 },
    { name: "Git", level: 85 },
    { name: "GitHub", level: 93 },
    { name: "Next.js", level: 50 },
    { name: "MySQL", level: 85 },
    { name: "DBMS", level: 75 },
    { name: "Python", level: 70 },
    { name: "AI & Machine Learning", level: 60 },
    { name: "Adaptability", level: 85 },
    { name: "Leadership", level: 90 },
    { name: "Time Management", level: 95 },
    { name: "Decision-Making", level: 85 },
    { name: "Creative Thinking", level: 80 },
    { name: "Problem Solving", level: 85 },
    { name: "Communication", level: 89 },
  ];
  return (
    <div className="min-h-screen bg-blueviolet-50 animate-fade-in">
      <div><div><div><div><div><Link
        href="/"
        className="mt-10 px-10 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition hover:scale-105 active:scale-95"
      >
       Back
      </Link></div></div></div></div></div>
      <div className="max-w-6xl mx-auto p-6 md:p-10">
        {/* Header */}
        <div className="bg-black rounded-3xl shadow-lg p-8 mb-8 ">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            
            <div>
              <h1 className="text-4xl text-white font-bold hover:text-blue-600 transition">
                Mokin S B
              </h1>
              <h2 className="text-xl text-blue-600 mt-2">
               Full Stack Developer
              </h2>
              <div className="space-x-4 mt-4">
                <p className="text-white 600 mt-4 max-w-xl align-justify">
                A highly motivated Computer Science graduate seeking an opportunity to work in a 
                challenging environment where I can utilize my programming skills and logical thinking
                and looking forward to gaining hands-on experience and growing professionally while 
                contributing to innovative projects. 
              </p></div>

              <div className="text-gray-600 space-y-2 py-3 hover:text-black-600 transition cursor-pointer">
              <h2 className="text-white 600">📍 Karur, Tamil Nadu</h2>
              <h2 className="text-white 600 hover:text-pink-600 transition"><a href="mailto:mokinsb1@gmail.com">📧 mokinsb1@gmail.com</a></h2>
              <h2 className="text-white 600 hover:text-red-500 transition"><a href="tel:+91 8248469181">📞 +91 82484 69181</a></h2>
              <h2 className="text-white hover:text-blue-500 transition"><a href="https://www.linkedin.com/in/mokin-s-b-012969376/" target="_blank">🌐 www.linkedin.com/in/mokin-s-b-012969376</a></h2>
            </div>
            <div className="flex gap-2 py-3 transition cursor-pointer">
              <a href="https://github.com/Mokin-1726">
              <img src="/icons/github.png" alt="Github Image" className="w-6 h-6 rounded-full object-cover transition duration-300 hover:scale-125" />
              </a>
              <a href="https://www.instagram.com/mokin.1726/">
              <img src="/icons/instagram.png" alt="Instagram Image" className="w-6 h-6 rounded-full object cover transition duration-300 hover:scale-125" />
              </a>
              <a href="https://wa.me/8248469181?text=Hello%2C%20I'm%20interested%20in%20your%20services">
              <img src="/icons/whatsapp.png" alt="Whatsapp Img" className="w-6 h-6 rounded-full object-cover transition duration-300 hover:scale-125" />
              </a>
              <a href="/mokin.pdf" target="_blank">
              <img src="/icons/resume.png" alt="Resume img" className="w-6 h-6 rounded-full object cover transition duration-300 hover:scale-125" />
              </a>
            </div>
            <div className="px-4 py-2 bg-gold-600 text-white 600 font-bold rounded-2xl w-30 h-20 transition duration-300 hover:rotate-360">
              <a href="/mokin.pdf" download target="_blank">Resume
              <img src="/icons/resume.png" alt="Resume img" className="w-6 h-6 rounded-full object cover transition duration-300 hover:scale-125" />
              </a>
            </div>
            </div>
              <div>
                <img src="/mokin-image.jpg" alt="Mokin's Image" className="w-90 h-100 rounded-full object-cover border-6 border-blue-600 transition duration-300 hover:scale-105 hover:rotate-10" />
              </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Sidebar */}
          <div className="space-y-8 hover:shadow-lg transition">

            {/* Skills */}
            <div className="bg-black rounded-3xl shadow-lg p-6 hover:shadow-lg transition">
              <h3 className="text-white xl font-bold mb-4">
                Technical and Non-technical Skills
              </h3>

              <div className="text-white space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>

                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-1000 slide-bar"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                  </div>
                ))}              
                </div>
            </div>
            

            {/* Education ✅ FIXED */}
            <div className="bg-black rounded-3xl shadow-lg p-6 hover:shadow-lg transition">
              <h3 className="text-white xl font-bold mb-5">
                Education
              </h3>

              <div className="text-white space-y-4">
                <div>
                  <h4 className="text-white-500 font-bold">
                  (B.E.) - Computer Science and Engineering
                  </h4>
                  <p className="text-blue-600">
                    M.Kumarasamy College of Engineering, Karur
                  </p>
                  <p className="text-white-600">
                    2024-2028
                  </p>
                  </div>
                  <div>
                  <h4 className="text-white-500 font-bold">
                    HSC (+2)
                  </h4>
                  <p className="text-blue-600">
                    U.R.C Palaniammal Matriculation Higher Secondary School, Erode
                  </p>
                  <p className="text-white-600">
                    2023-2024
                  </p>
                  </div>
                  <div>
                  <h4 className="text-white-500 font-bold">
                    SSLC
                  </h4>
                  <p className="text-blue-600">
                    U.R.C Palaniammal Matriculation Higher Secondary School, Erode
                  </p>
                  <p className="text-white-600">
                    2021-2022
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-lg transition duration-300 hover:rotate-360">
              <h3 className="text-xl font-bold mb-4">
                Languages
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li>English</li>
                <li>Tamil</li>
                <li>Hindi</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 hover:shadow-lg transition">

            {/* Experience */}
            <div className="bg-white rounded-3xl shadow-lg p-8  ">
              <h3 className="text-2xl font-bold mb-6">
                Work Experience
              </h3>

              <div className="space-y-8 border-l-2 border-blue-500 pl-6">

                <div className="relative">
                  <div className="absolute -left-[34px] w-4 h-4 bg-blue-600 rounded-full move-down"></div>

                  <h4 className="font-bold text-lg">
                    Internship - Web Development (Next.js)
                  </h4>

                  <p className="text-blue-600 font-medium">
                    SBS Technologies
                  </p>

                  <p className="text-gray-500 text-sm">
                    05 th June 2026 - 25 th June 2026
                  </p>

                  <p className="mt-2 text-gray-700">
                    Learning Next.js to build dynamic web applications and enhance frontend development skills.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[34px] w-4 h-4 bg-blue-600 rounded-full move-down"></div>

                  <h4 className="font-bold text-lg">
                    Student Ambassador
                  </h4>

                  <p className="text-blue-600 font-medium">
                    Girlscript Summer of Code
                  </p>

                  <p className="text-gray-500 text-sm">
                    May 2026 - August 2026
                  </p>

                  <p className="mt-2 text-gray-700">
                    Promoted and supported the Girlscript Summer of Code program,
                    engaging with the community and providing technical assistance.
                  </p>
                </div>

              </div>
            </div>

            {/* Projects */}
            <div className="bg-black rounded-3xl shadow-lg p-8 ">
              <h3 className="text-white 2xl font-bold mb-6">
                Featured Projects
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-white border rounded-2xl p-5 hover:shadow-lg transition">
                  <h4 className="text-black 600 font-bold">Personal Portfolio</h4>
                  <p className="text-blue-600 font-medium">
                    HTML, CSS
                  </p>
                  <p className="text-black-600 mt-2">
                    A Personal portfolio helps to showcase my skills, projects and education and Experiences to others through in the format of website in basic manner using HTML and CSS.
                  </p>
                  <div className="py-5">
                  <a href="https://github.com/Mokin-1726/Profile-Portfolio">
                  <img src="/icons/github 2.png" alt="Github Image" className="w-6 h-6 rounded-full object-cover transition duration-300 hover:scale-125" />
                  </a>
                  </div>
                </div>

                <div className="bg-white border rounded-2xl p-5 hover:shadow-lg transition">
                  <h4 className="text-black 500 font-bold">Gym Membership Management</h4>
                  <p className="text-blue-600 font-medium">
                  MySQL,Python(Flask)
                  </p>
                  <p className="text-black-600 mt-2">
                    This Project mainly focuses on managing the gym membership and also helps to manage the payments and also helps to manage the members and also helps to manage the trainers and also helps to manage the schedules and also helps to manage the feedbacks.
                  </p>
                  <div className="py-5">
                  <a href="https://github.com/Mokin-1726/gym_membership-management-system">
                  <img src="/icons/github 2.png" alt="Github Image" className="w-6 h-6 rounded-full object-cover transition duration-300 hover:scale-125" />
                  </a>
                  </div>
                </div>

              <div className="bg-white border rounded-2xl p-5 hover:shadow-lg transition">
                  <h4 className="text-black 500 font-bold">Quiz App Generator</h4>
                  <p className="text-blue-600 font-medium">
                    Java
                  </p>
                  <p className="text-black-600 mt-2">
                    This project mainly focuses on creating, deleting, updating and also managing the quiz and the users can able to create the quiz and attend the quiz in a particular time. This project is created using Java Programing Language.
                  </p>
                  <div className="py-5">
                  <a href="https://github.com/Mokin-1726/Quiz-Application-Generator-App">
                  <img src="/icons/github 2.png" alt="Github Image" className="w-6 h-6 rounded-full object-cover transition duration-300 hover:scale-125" />
                  </a>
                  </div>

              </div>
              
              <div className="bg-white border rounded-2xl p-5 hover:shadow-lg transition">
                  <h4 className="text-black 500 font-bold">Letter Frequency Counter in a Given Sentence</h4>
                  <p className="text-blue-600 font-medium"> Python </p>
                  <p className="text-black-600 mt-2">
                    This project focuses on counting the frequency of each letter in a given sentence. It is created using Python programming language.
                  </p>
                  <div className="py-5">
                  <a href="https://github.com/Mokin-1726/Letter-Frequency-Counter-in-a-sentence">
                  <img src="/icons/github 2.png" alt="Github Image" className="w-6 h-6 rounded-full object-cover transition duration-300 hover:scale-125" />
                  </a>
                  </div>
                
              </div>   

              </div>
            </div>
            <div className="bg-white rounded-3xl p-8">
                  <h3 className="text-black 2xl font-bold mb-6">
                 Projects
                  </h3>
                <div className="flex gap-4">
                  <div className="bg-black text-white 600 border rounded-2xl p-5 hover:shadow-lg transition">
                    <a href="/resume/counter" target="_blank">Counter App</a>
                  </div>
                  <div className="bg-black text-white 600 border rounded-2xl p-5 hover:shadow-lg transition" >
                    <a href="/resume/search" target="_blank">Search App</a>
                  </div>
                  <div className="bg-black text-white 600 border rounded-2xl p-5 hover:shadow-lg transition">
                    <a href="/resume/to-do" target="_blank">To Do App</a>
                  </div>
                </div>
                <div>
                  
                </div>
                  
                </div>
                <div className="bg-black rounded-3xl shadow-lg p-6 hover:shadow-lg transition">
                  <h3 className="text-white xl font-bold mb-5">
                Courses
                  </h3>
                  <div>
                  <h4 className="text-white 500 font-bold">
                  NPTEL - Introduction to Internet of Things
                  </h4>
                  <p className="text-blue-600">
                    IIT Kharagpur
                  </p>
                  <p className="text-white 600">
                    71%
                  </p>
                  <p className="text-blue-600">
                    Elite
                  </p>
                  <p className="text-white 600">
                    2025
                  </p>
                  <a href="/certificates/nptel iot.pdf" target="_blank">
                  <img src="/icons/resume.png" alt="Resume img" className="w-6 h-6 rounded-full object cover transition duration-300 hover:scale-125" />
                  </a>
                  </div>
                  <div className="py-3">
                  <h4 className="text-white 500 font-bold">
                  NPTEL - Human Computer Interaction
                  </h4>
                  <p className="text-blue-600">
                    IIT Delhi
                  </p>
                  <p className="text-white 600">
                    95%
                  </p>
                  <p className="text-blue-600">
                    Elite + Gold
                  </p>
                  <p className="text-white 600">
                    2026
                  </p>
                  <a href="/certificates/nptel hci.pdf" target="_blank">
                  <img src="/icons/resume.png" alt="Resume img" className="w-6 h-6 rounded-full object cover transition duration-300 hover:scale-125" />
                  </a>
                  </div>
                </div>
                <div className="bg-black rounded-3xl shadow-lg p-6 hover:shadow-lg transition">
                <h3 className="text-white 600 font-bold">
                  Achievements
                </h3>
                <div className="py-3">
                  <h4 className="text-white 500 font-bold">
                  Git and GitHub Workshop
                  </h4>
                  <p className="text-blue-600">
                    PrisolTech
                  </p>
                  <p className="text-red-600">
                    Participation
                  </p>
                  <p className="text-white 600">
                    2025
                  </p>
                  <a href="/certificates/git and github workshop certificate.jpg" target="_blank">
                  <img src="/icons/resume.png" alt="Resume img" className="w-6 h-6 rounded-full object cover transition duration-300 hover:scale-125" />
                  </a>
                </div>
                <div className="py-3">
                  <h4 className="text-white 500 font-bold">
                  AI Tools Workshop
                  </h4>
                  <p className="text-blue-600">
                    FewInfos
                  </p>
                  <p className="text-red-600">
                    Participation
                  </p>
                  <p className="text-white 600">
                    2025
                  </p>
                  <a href="/certificates/ai tools certificate.jpg" target="_blank">
                  <img src="/icons/resume.png" alt="Resume img" className="w-6 h-6 rounded-full object cover transition duration-300 hover:scale-125" />
                  </a>
                </div>
                <div className="py-3">
                  <h4 className="text-white 500 font-bold">
                  Sitespark - Website Creation
                  </h4>
                  <p className="text-blue-600">
                    MKCE - CSE DEPT
                  </p>
                  <p className="text-red-600">
                    Participation
                  </p>
                  <p className="text-white 600">
                    2025
                  </p>
                  <a href="/certificates/sitespark certificate.jpg" target="_blank">
                  <img src="/icons/resume.png" alt="Resume img" className="w-6 h-6 rounded-full object cover transition duration-300 hover:scale-125" />
                  </a>
                </div>
                <div className="py-3">
                  <h4 className="text-white 500 font-bold">
                  StartIQ - Startup Pitching Event
                  </h4>
                  <p className="text-blue-600">
                    MKCE - Mobile App Development (ISTE)
                  </p>
                  <p className="text-red-600">
                    Participation
                  </p>
                  <p className="text-white 600">
                    2026
                  </p>
                  <a href="/certificates/startiq certificate.jpeg" target="_blank">
                  <img src="/icons/resume.png" alt="Resume img" className="w-6 h-6 rounded-full object cover transition duration-300 hover:scale-125" />
                  </a>
                </div>
                <div className="py-3">
                  <h4 className="text-white 500 font-bold">
                  HackSprint'26
                  </h4>
                  <p className="text-blue-600">
                    K Ramakrishnan College Of Technology
                  </p>
                  <p className="text-red-600">
                    Participation
                  </p>
                  <p className="text-white 600">
                    2026
                  </p>
                  <a href="/certificates/hacksprint certificate.jpeg" target="_blank">
                  <img src="/icons/resume.png" alt="Resume img" className="w-6 h-6 rounded-full object cover transition duration-300 hover:scale-125" />
                  </a>
                </div>
                </div>

                <div className="bg-black rounded-2xl py-5 w-full max-w-4xl mx-auto transition duration-500 hover:scale-105 hover:rotate-1 ">
                  <h3 className="bg-black text-white font-bold py-3">Gallery</h3>
                  <div> 
                    <video width="100%" controls autoPlay={false} muted className="w-full rounded-lg" > 
                      <source src="/videos/demo.mp4" type="video/mp4" /> 
                      Your browser does not support the video tag. 
                      </video> 
                      </div> 
                </div>

                
          </div>
          
        </div>
      
      </div>
      <div className="text-white 600">
      <footer><center><small>&copy; 2026 Mokin S B. All rights reserved.</small></center></footer>
    </div>
    </div>
    
  );
}