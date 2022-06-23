import Head from 'next/head'
import Typewriter from 'typewriter-effect'
import { SnakeGame } from '../Components/SnakeGame/SnakeGame';


const Home = () => {
  return (
    <>
      <Head>
        <title>Joseph Enoch | Home</title>
      </Head>
      <div className="flex justify-center items-center h-full">  
        <div className="lg:space-y-2 px-10 md:px-0">
          <h1 className="text-[10px] lg:text-xs pl-1">Hello world, I am </h1>
          <h1 className="font-extralight tracking-tighter text-6xl ">Joseph <br className="lg:hidden"/>Enoch</h1>
          <h1 className="text-md lg:text-2xl font-thin text-secondary-purple flex align-baseline">
             {"> "}{<Typewriter
                options={{
                  strings: ['Front-end Developer', 'UX Designer', 'Data Science Enthusiast'],
                  autoStart: true,
                  loop: true,
                }}
             />}
          </h1>
          <div>
              <h1 className="mt-20 sm:mt-10 text-xs font-thin text-secondary">  {"//complete the game to continue"}</h1>
              <h1 className="text-xs font-thin text-secondary"> {"//you can also see it on my Github page"}</h1>
              <a href="https://github.com/josephenoch/josephenoch" target="_blank" rel="noreferrer" className="mt-1 text-xs font-thin"> 
                <span className="text-secondary-purple">const   </span>
                <span className="text-accent-green">githubLink </span> 
                =
                <span className="text-accent-orange"> {"“https://github.com/josephenoch/josephenoch”"}</span>
              </a >
          </div>
        </div>
        <div 
          style={{
              background:"linear-gradient(135deg, rgba(67, 217, 173,0.7), rgba(23, 85, 83,0.2))"
          }}
          className=" ml-20 hidden lg:flex w-[30%] h-[80%] opacity-50 shadow-[_116px_85px_66px_-54px_rgba(77,91,206,0.3),_-59px_-99px_81px_-41px_rgba(67,217,173,0.64);] justify-center items-center rounded-md"
        >
          <SnakeGame/>
        </div>
        
      </div>
    </>
    
  )

}

export default Home