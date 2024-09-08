import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Hooks() {

  return (
    <div className="w-[1000px]">
      <div className="text-[40px] font-bold  text-black400 mt-[40px] ml-[40px]">
        Hooks
      </div>
      <p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line">
        React hooks allow to use react features without writing class. Hooks are
        special functions that make state and side effects management easier in
        functional components. They are called inside function components to add
        state , lifecycle methods.
      </p>
      <p className="text-[30px] font-bold  text-black400 mt-[40px] ml-[40px]">
        Key Features
      </p>
      <p className=" ml-[50px]  mt-[10px] leading-10 text-blue-800 text-[26px]  font-extralight whitespace-pre-line">
        <p>1. Called at the top of react function. </p>
        <p>
          2. Custom hooks can also be created with a logic thats required to be
          reused.{" "}
        </p>
        <p>3. Some of the coomon hooks are -: useState,useEffect,useRef,etc.</p>
        <p>
          4. Term 'use' is used before hook name, to mark a function that it is
          a hook
        </p>
      </p>
     



    
    </div>
  );
}
