import Blogs from "./Components/Blogs"
import Blog from "./Components/Blog"
import Bookmark from "./Components/Bookmark"

import { useState } from "react"
function App() {

  const[bookmarks,setBookmarks] = useState([])
  const [mrkRead,setMrkRead]= useState(0)

function btnRead(time){
  const newTime = [...mrkRead,time]
  setMrkRead(newTime+mrkRead)
}

  function bookmarkBtn(mark){
    console.log(mark)
    const addBkmarks = [...bookmarks,mark]
    setBookmarks(addBkmarks)

  }
  return (
    <>
          <div className="flex">
     <Blogs bookmarkBtn={bookmarkBtn} btnRead={btnRead}></Blogs>
     
      <Bookmark bookmarks={bookmarks} btnRead={btnRead}></Bookmark>
     </div>
    </>
  )
}

export default App
