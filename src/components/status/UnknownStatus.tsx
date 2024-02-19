import React from "react";
import { BsQuestion } from "react-icons/bs";
import "@/styles/status.scss";
const UnknownStatus = () => {
  return (
    <>
      <div className='wrap'>
        <BsQuestion className='text-gray-500 text-2xl' />

        <div className='text-gray-500'>Unknown</div>
      </div>
    </>
  );
};

export default UnknownStatus;
