/*
 *   Copyright (c) 2023
 *   All rights reserved.
 */
import React from "react";

export default function ButtonShow({ onHandleShow, onHandleHide }) {
  return (
    <div className="row justify-content-center justify-content-sm-between mx-3 text-center ">
      <button className="btn btn-primary data-btn m-2" onClick={onHandleShow}>
        عرض المواعيد
      </button>
      <button className="btn btn-primary data-btn m-2" onClick={onHandleHide}>
        إخفاء الكل
      </button>
    </div>
  );
}
