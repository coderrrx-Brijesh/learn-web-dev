import React from "react";
import { Input } from "./ui/input";
import { Auth } from "@auth/core";
import AuthHeader from "./auth-header";
const HeaderSec = async () => {

  return (
    <div className="grid grid-cols-3 h-14 items-center">
      <div className="flex justify-start">
        <h1 className="text-2xl font-bold">Discuss</h1>
      </div>
      <div className="flex justify-center">
        <Input
          type="text"
          placeholder="Search Posts..."
          className="w-full max-w-md"
        />
      </div>
      <div className="flex justify-end space-x-2 cursor-pointer">
        <AuthHeader/>
      </div>
    </div>
  );
};

export default HeaderSec;
