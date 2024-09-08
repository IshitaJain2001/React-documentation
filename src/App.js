import Reactdrop from "./Dropdowns/Reactdrop";
import Reduxdrop from "./Dropdowns/Reduxdrop";
import Toolkitdrop from "./Dropdowns/Toolkitdrop";
import Navbar from "./topics/Navbar";
import Introduction from "./topics/Introduction";
import data from './Content'
import Why from "./topics/Why";
import Components from "./topics/Components";
import GettingStarted from "./topics/GettingStarted";
import Structure from "./topics/Structure";
import Lifecycle from "./topics/Lifecycle";
import reactsym from './images/reactsym-removebg-preview.png'
import Props from "./topics/Props";
import Hooks from "./topics/Hooks";
import Reffile from "./topics/Reffile";
import Progressbar from "./topics/Progressbar";
import States from "./topics/States";
import Effects from "./topics/Effects";
import Contextfile from "./topics/Contextfile";
import Reducer from "./topics/Reducer";
import Router from "./topics/Router";

function App() {
 
  return (


 
    <div className="h-[7000px] " >
 
    < div className="flex bg-navy justify-between fixed h-[100px] top-0 w-full">
    <div className="flex mt-[20px] ml-[30px] gap-[15px]">
    <img src={reactsym} className='h-[50px]  rotation z-[-1] shadow-none' alt="react" />
    <p className=" text-[37px]  font-roboto text-white  ">React-Tutorial</p>

    </div>

        <div className="flex  justify-end " >
   <div className="grp relative">
   <Navbar subject={"React"}  />
   <div className="grp1 absolute mt-[1px] left-[-17px] ">
   <Reactdrop />
   </div>
    </div>  

    <div className="relative grp">
    <Navbar subject={"React-redux"}/>
    <div className="grp1 absolute mt-[1px] left-[-5px]">
   <Reduxdrop />
   </div>
    </div>
    
    <div className="relative grp">
    <Navbar subject={"Redux-toolkit"}/>
    <div className="grp1 absolute mt-[1px] left-[4px]">

  <Toolkitdrop  />
  </div>
    </div>
    
    </div>
    </div>

 <Introduction title={data[0].title} definition={data[0].definition}/>
   <Why title={data[0].title} why={ data[0].why}/> 
   <GettingStarted gettingStarted={data[0].gettingStarted}/>
   <Structure structure={data[0].structure}/>
   <Components components={data[0].components}/>
   <Lifecycle/>
   <Props/>
   <Hooks/>
 <States/>
 <Effects/>
 <Contextfile/>
 <Reffile/>
 <Reducer/>
 <Router/>
   <Progressbar/>

    </div>
  
  );
}

export default App;
