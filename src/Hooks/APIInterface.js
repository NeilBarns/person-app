import React, { useEffect, useState } from "react";

const APIInterface = () => { 

  const GetPersonList = async () => {
    
    try 
    {
        const response = await fetch("http://my-json-server.typicode.com/m4ur1c1o86/codetest/persons");
        const json = await response.json();
        return json;
    }
    catch (error)
    {
        console.error(error);
    }
  }

  return {
    GetPersonList
  }
}
export default APIInterface;