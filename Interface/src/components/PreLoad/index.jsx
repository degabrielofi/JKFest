import React from "react";
import { Loading } from "./style";

const PreLoad = () => {
  return (
    <Loading>
      <>
        <section className="screen">
          <span class="loader"></span>
        </section>
      </>
    </Loading>
  );
};

export default PreLoad;
