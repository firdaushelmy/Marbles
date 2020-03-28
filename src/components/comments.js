import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./comments.css"
import CommentLikes from "./commentlikes"

function Comments( threads, threadId, userID) {
    const [text, setText] = useState("")
    const [allComments, setAllComments] = useState([])
    const [comID, setComID] = useState("")
    const [totalLikes, setTotalLikes] = useState("")

    

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

                setTotalLikes(response.length)
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
        

        // let one = `https://marbles-backend.herokuapp.com/api/v1/comment_like/${comID}`
        // let two = `https://marbles-backend.herokuapp.com/api/v1/comments/${threads.threadId}`
        

        // const requestOne = axios.get(one);
        // const requestTwo = axios.get(two);
        

        // axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        //     const responseOne = responses[0]
        //     const responseTwo = responses[1]
        //     let com = responseTwo.data.comments;
        //     let comm = com.sort(function (a, b) { return b.id - a.id })
        //     console.log(comm)
        //     console.log(responseOne);
        //     setAllComments(comm);
        //     // use/access the results 
        // })).catch(errors => {
        //     console.log(errors)
        //     // react on errors.
        // })
        
        
        
        
        
        
        
        
        

        
        
        axios
        .get(
            `https://marbles-backend.herokuapp.com/api/v1/comments/${threads.threadId}`
          )
          .then(response => {
              let com = response.data.comments;
              let comm = com.sort(function(a, b) {return b.id - a.id})
              console.log(comm)
            setAllComments(comm);
            
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
            console.log(response.data);
           
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
                                <CommentLikes comID={comID}/>
                            </div>
                        </div>
                        <div id={comment.id} 
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
