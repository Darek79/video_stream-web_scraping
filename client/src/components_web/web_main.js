import React, {useState, useEffect, lazy, Suspense} from "react";
import "./web_main.scss";
import Btn from "./../components_main/title";
import {fetchData, changeText} from "../utils/utils";

const WebItem = lazy(() => import("./web_item"));
export const WebMain = ({fnShow}) => {
  const [link, setLink] = useState("");
  const [articles, setArticle] = useState([]);
  const getUrl = (e) => {
    setLink(() => e.target.getAttribute("data-index"));
  };
  useEffect(() => {
    if (link) {
      fetchData("site", link, setArticle);
      setLink("");
    }
  }, [link]);
  return (
    <section className="web_main">
      {console.log(link)}
      <div className="web_content">
        {articles &&
          articles.map((el) => {
            return (
              <Suspense
                key={el.link}
                fallback={<div className="txt_cont">loading</div>}
              >
                <WebItem link={el.link} text={el.text} clName="txt_cont" />
              </Suspense>
            );
          })}
        {/* <WebItem /> */}
      </div>
      <div className="btn_wrapper">
        <Btn
          module="Raptastisch"
          clName="btn_web"
          data={"raptastisch.net"}
          fn={getUrl}
        />
        <Btn
          module="HipHopdx"
          clName="btn_web"
          data={"hiphopdx.com"}
          fn={getUrl}
        />
        <Btn module="Back to Title" clName="btn_web" fn={fnShow} />
      </div>
    </section>
  );
};
