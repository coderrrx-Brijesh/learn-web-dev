import React, { Suspense } from "react";
import { Input } from "./ui/input";
import { Auth } from "@auth/core";
import AuthHeader from "./auth-header";
import SearchInput from "./search-input";
const HeaderSec = async () => {

  return (
    <div className="grid grid-cols-3 h-14 items-center">
      <div className="flex justify-start">
        <h1 className="text-2xl font-bold">Discuss</h1>
      </div>
      <div className="flex justify-center">
        <Suspense>
          <SearchInput/>
        </Suspense>
      </div>
      <div className="flex justify-end space-x-2 cursor-pointer">
        <AuthHeader/>
      </div>
    </div>
  );
};

export default HeaderSec;
