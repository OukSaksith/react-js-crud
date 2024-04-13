import React from "react";
import LeftInfo from "./LeftInfo";
import RightInfo from "./RightInfo";
import { useParams } from "react-router-dom";

const MainPage = () => {
  const { payload } = useParams();

  return (
    <>
      <LeftInfo />
      <RightInfo />
    </>
  );
};

export default MainPage;
