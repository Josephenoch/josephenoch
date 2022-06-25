import Head from 'next/head'
import Typewriter from 'typewriter-effect'
import SnakeGameComponent from '../Components/SnakeGame/SnakeGameComponent';
import ColoredText from "../Components/GeneralComponents/ColoredText"

const Home = () => {
  return (
    <>
      <Head>
        <title>Joseph Enoch | Home</title>
      </Head>
      <div className="flex justify-center items-center h-full">  
        <div className="space-y-4 lg:space-y-2 w-full lg:w-fit px-10 md:px-0">
          <h1 className="text-[10px] lg:text-xs text-2xl pl-1">Hello world, I am </h1>
          <h1 className="font-extralight tracking-tighter text-6xl ">Joseph <br className="lg:hidden"/> Enoch</h1>
          <h1 className="text-md text-lg lg:text-2xl font-thin text-secondary-purple flex align-baseline">
             {<Typewriter
                options={{
                  strings: ['Front-end Developer', 'UX Designer', 'Data Science Enthusiast'],
                  autoStart: true,
                  loop: true,
                }}
             />}
          </h1>
          <div>
              <div className="hidden lg:block">
                <h1 className="mt-20 sm:mt-10 text-xs font-thin text-secondary">  {"//complete the game to continue"}</h1>
                <h1 className="text-xs font-thin text-secondary"> {"//you can also see it on my Github page"}</h1>
                <a href="https://github.com/josephenoch/josephenoch" target="_blank" rel="noreferrer" className="mt-1 text-xs font-thin"> 
                  <ColoredText color="secondary-purple">const   </ColoredText>
                  <ColoredText color="accent-green">githubLink </ColoredText> 
                  =
                  <ColoredText color="accent-orange"> {"“github.com/josephenoch/josephenoch”"}</ColoredText>
                </a >
              </div>
          </div>
        </div>
        <SnakeGameComponent/>        
      </div>
    </>
    
  )

}

export default Home