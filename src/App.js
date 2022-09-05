import './App.scss';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Registration from "./components/Registration/Registration";
import MyBtn from "./components/UI/Button/MyBtn";
import {useRef} from "react";

function App() {

    const postRef = useRef(null);
    const listRef = useRef(null)

    const handleClick = () => {
        postRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="App">
            <Header postRef={postRef} listRef={listRef}/>
            <div className={"imgContainer"}>
                <div className="textOnImage">
                    <h1>Test assignment for front-end developer</h1>
                    <a>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a
                        vast understanding of User design thinking as they'll be building web interfaces with accessibility
                        in mind. They should also be excited to learn, as the world of Front-End Development keeps
                        evolving.</a>
                    <div></div>
                    <MyBtn text='Sign Up' active={false} func={handleClick}></MyBtn>
                </div>
            </div>
            <List ref={listRef}/>
            <Registration ref={postRef}/>
        </div>
    );
}

export default App;
