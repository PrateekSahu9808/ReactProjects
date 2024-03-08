import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
    const[liveMessage,setLiveMessage]=useState()
  const dispatch = useDispatch();

  const chatMessage = useSelector(store => store.chat.messages);
  useEffect(() => {
    //polling in api
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(10),
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[600px] bg-slate-50 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form className="w-full ml-2 p-2" onSubmit={(e)=>{e.preventDefault()
       dispatch(addMessage({
        name:"prateek",
        message:liveMessage
       }))
       setLiveMessage("")}}>
        <input type="text" className=" p-2 border border-black w-[80%]"
        value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className="border bg-slate-200 px-2 mx-2 ">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
