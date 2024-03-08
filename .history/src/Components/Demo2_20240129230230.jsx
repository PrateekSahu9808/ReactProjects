import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  //value is reset in every update on state variable
  var x = 10;
  // not like => ref=>0,ref={current:0}
  const ref = useRef(0);
  //  console.log(ref);
  const timer = useRef(null);
  // const timer = {current:null};
  useEffect(() => {
    timer.current = setInterval(() => {
      console.log("prateek sahu");
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="m-4 p-2 bg-slate-50 w-96 h-96">
      <div>
        <button
          onClick={() => {
            x = x + 1;
            console.log("x=>" + x);
          }}
          className="p-4 border bg-slate-500"
        >
          Increase normal variable
        </button>
        <span className="text-3xl font-bold">x:{x}</span>

        <div>**********************************************</div>
        <button
          onClick={() => {
            setY(y + 1);
          }}
          className="p-4 border bg-slate-500"
        >
          Increase State Variable
        </button>
        <span className="text-3xl font-bold">Y:{y}</span>

        <div>**********************************************</div>
        <button
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref=" + ref.current);
          }}
          className="p-4 border bg-slate-500"
        >
          Increase REf
        </button>
        <span className="text-3xl font-bold">Ref:{ref.current}</span>
      </div>
      <div>**********************************************</div>
      <button
        className="bg-red-800 p-4 text-white font-mono rounded-lg"
        onClick={() => {
          clearInterval(timer.current);
        }}
      >
        stop
      </button>
    </div>
  );
};

export default Demo2;
