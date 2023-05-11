/*
 *   Copyright (c) 2023
 *   All rights reserved.
 */
import { useState } from "react";
import "./App.css";
import personImg from "./assets/person.png";
import ButtonShow from "./components/ButtonShow";

function App() {
  const [list, setList] = useState([
    {
      id: "one",
      name: "محمود",
      time: "5 مساء",
      imgSrc: personImg,
    },
    { id: "two", name: "محمد", time: "5 مساء", imgSrc: personImg },
    { id: "three", name: "أحمد", time: "2 صباحا", imgSrc: personImg },
    { id: "four", name: "علي", time: "4 مساء", imgSrc: personImg },
    { id: "five", name: "حسين محمد", time: "5 مساء", imgSrc: personImg },
  ]);
  const [isShow, setIsShow] = useState(true);
  const handleShow = () => {
    setIsShow(true);
  };
  const handleHide = () => {
    setIsShow(false);
  };
  return (
    <div className="App bg-body-tertiary">
      <div className="container pt-4 min-vh-100">
        <div className="row">
          <div className="col-md-7 mx-auto">
            <p className="fw-bold my-3 text-custom">
              {isShow && Array.isArray(list)
                ? `لديك اليوم ${list.length} مواعيد`
                : isShow
                ? "فشل جلب البيانات من السيرفر"
                : "تم إخفاء المواعيد"}
            </p>
            <ul className="list-unstyled shadow rounded-2 p-3 data-list overflow-auto">
              {isShow &&
                Array.isArray(list) &&
                list.map((el) => {
                  return (
                    <>
                      <li key={el.id} className="row gap-1 mb-3">
                        <div className="img-hander col-2">
                          <img
                            src={el.imgSrc}
                            className="w-100 h-100 rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 col-8 d-flex justify-content-center align-items-start flex-column">
                          <p className="fs-5 fw-bold lh-1 mb-2">{el.name}</p>
                          <span className="fs-6 lh-1 text-muted">
                            {el.time}
                          </span>
                        </div>
                      </li>
                      <hr />
                    </>
                  );
                })}
            </ul>
            <ButtonShow onHandleShow={handleShow} onHandleHide={handleHide} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
