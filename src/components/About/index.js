import React, { Component, useEffect } from "react";
import Nav from "../Nav";
import About from "../About"
import { capitalizeFirstLetter } from "../../utils/helpers";

export default class Info extends Component {
    render() {

        const [currentPage, handlePageChange] = useState('About');

        useEffect(() => {
            document.title = capitalizeFirstLetter(currentPage);
        }, [currentPage]);

        const renderPage = () => {
            switch(currentPage) {
                case "About Me":
                    return<About  />
                // case "Contact":
                //     return<Contact />
                // case "Resume":
                //     return<Resume />
                default:
                    return<About />
            }
        };

        return (
            <div className="section"> 
            <header className="App-header">
                <h1>Xavyr Rodriguez</h1>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
                <div>
                    {/* image to go here */}
                </div>
                <h1>About Me</h1>
               
                <p>
                    Hello my name is Xavyr Rodriguez, I am a Web Developer living in Austin Tx. I am a recent graduate of the University of Texas Coding Bootcamp.
                </p>
            </div>
        )
    }
}