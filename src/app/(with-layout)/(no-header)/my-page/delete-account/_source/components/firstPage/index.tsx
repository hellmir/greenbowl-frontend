import React from "react";
import Header from "./Header";
import Thanks from "./Thanks";
import RadiosAndNextButton from "./RadiosAndNextButton";
import action from "../../actions/test";

const FirstPageContainer = () => {
  return (
    <div>
      <Header />
      <Thanks />
      <form action={action}>
        <RadiosAndNextButton />
      </form>
    </div>
  );
};

export default FirstPageContainer;
