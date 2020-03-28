import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./comments.css"
import CommentLikes from "./commentlikes"

function Comments( threads, threadId, userID) {
    const [text, setText] = useState("")
    const [allComments, setAllComments] = useState([])
    const [comID, setComID] = useState("")
    const [totalLikes, setTotalLikes] = useState("0")

    

    const addLikes = (e) => {
        e.preventDefault()
        axios.post(`https://marbles-backend.herokuapp.com/api/v1/comment_like/c_like/${comID}`, {
            user: localStorage.getItem("user"),
            comment: comID


        }

        ).then(response => {
            console.log(response.data)
        })
    }



    
    console.log(threads.threadId)
    console.log(comID)
    console.log(allComments)
    // const [btnDisabled,setBtnDisabled] = useState(true)
    
    // const btnState = () => {
        
    //     const button = (document.getElementById("cmtBtn"));
    //     button.disabled = btnDisabled
    //     if (text != "") {
    //         button.disabled = false
    //         setBtnDisabled(false)
    //     } 
        
    // }
    
    
    useEffect(() => {
        axios
            .get(
                `https://marbles-backend.herokuapp.com/api/v1/comment_like/${comID}`
            )
            .then(response => {
                console.log(response)

                setTotalLikes(response.data.length)
            });

    }, [])




    const handleTextChange = (e) => {
        
        let tt = e.target.value
        console.log(tt)
        
        setText(tt)
        setTempText(tt)
    }
    console.log(text);
    
    useEffect(() => {
        
        
     
        
        axios
        .get(
            `https://marbles-backend.herokuapp.com/api/v1/comments/${threads.threadId}`
          )
          .then(response => {
              let com = response.data.comments;
              let comm = com.sort(function(a, b) {return b.id - a.id})
              console.log(comm)
            setAllComments(comm)
            setComID(response.data.comments.id);
            
          });

        
          
    }, [])
console.log(localStorage.getItem("user"));
    const handleTextSubmit = (e) => {
        e.preventDefault()
        


        axios
          .post(
            `https://marbles-backend.herokuapp.com/api/v1/comments/new/${threads.threadId}`,
            {
              text: text,
              user: localStorage.getItem("user"),
              thread: threads.threadId
            }
          )
          .then(response => {
            console.log(response.data.data.text);
              let newComments = [response.data.data, ...allComments]
              let com = newComments;
              let comm = com.sort(function (a, b) { return b.id - a.id }) // This will depend on what your backend returns
            let newestComments = [...comm]
              setAllComments(newestComments)
           
        });
        setTempText("")



    }

    const [tempText, setTempText] = useState("")




    return (
        <div className="container-fluid">
            
            

            <div>
                <form onSubmit={handleTextSubmit} >
                    <div>
                        <input id="commentText" value={tempText} onChange={handleTextChange} type="text" placeholder="Write some encouragement here">

                        </  input>
                    </div>
                    <button id="cmtBtn" className="btn btn-outline-warning border-0" type="submit button" >
                        Encourage
                </button>

                </form>


            </div>
             
                

            {allComments.map(comment =>{
                return(
                    <div>
                        <div>
                            <form onSubmit={addLikes}>

                            <button 
                        onClick={() => setComID(comment.id)}
                            >
                                +
                </button>
                            </form>
                            <div>
                                <CommentLikes comID={comment.id}/>
                            </div>
                        </div>
                        <div  
                         >

                            {comment.text}
                        </div>
                      <div>
                          
                          

                      </div>
                        </div>


                )
            })
            }
            


        </div>
    )
}

export default Comments;
