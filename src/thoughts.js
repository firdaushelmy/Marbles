import React, { useState, useEffect } from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./thoughts.css";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';



function Thoughts() {
    const [contents, setContents] = useState([]);
    const current_user = JSON.parse(localStorage.getItem('user'))



    useEffect(() => {
        axios.get(`https://marbles-backend.herokuapp.com/api/v1/diaries/${current_user.id}`)
            .then((result) => {
                console.log(result.data)
                setContents(result.data)
            })
            .catch(err => console.log(err.response));
    }, [])

    console.log(contents.length)

    // If the user has not added any thoughts, return plain text. otherwise, show the previously made thoughts

    const ThoughtsDisplayDiv = styled.div`
    background-color: ${props => props.theme.thoughtsDisplayDivBg}
    `;

    ThoughtsDisplayDiv.defaultProps = {
        theme: {
            thoughtsDisplayDivBg: "#FBD6C8"
        }
    }

    return (
        <>
            {contents.length === 0 ? <h3>You have not made any entries yet</h3> :
                contents.map(entry => {
                    return (
                        <div className="container" id="thoughtsDisplayContainer">
                            <ThoughtsDisplayDiv className="thoughtsDisplayDiv">
                                <h3>{entry.content}</h3>
                            </ThoughtsDisplayDiv>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Thoughts;