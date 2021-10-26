import React from "react";
import Card  from "./card";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            chatText: [],
            user: ""
        };
    }

    handleMessageChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleUser(e) {
        this.setState({
            user: e.target.value
        });
    }

    handleClickSubmit(e) {
        e.preventDefault();
        let chatText = this.state.chatText;
        let chirp = this.state.text;
        let user = this.state.user;
        chatText.push({ user, chirp, date: new Date().toString() });
        this.setState({ chatText, text: "", user: "" });
    }

    componentDidMount() {
        let chatText = [
            {
                user: "Cam",
                chirp: "My mother always used to say: The older you get, the better you get, unless you’re a banana.",
                date: new Date().toString()
            },
            {
                user: "KJ",
                chirp: "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.",
                date: new Date().toString()
            },
            {
                user: "Davion",
                chirp: "I want my children to have all the things I couldn’t afford. Then I want to move in with them",
                date: new Date().toString()
            }
        ];

        this.setState({ chatText });
    }

    render() {
        return (
            <div className="container">
                <div className="row my-2">
                    <div className="col-md-12">
                        <form className="form-group p-3 border border-warning rounded">
                            <label>Username: </label>
                            <input
                                value={this.state.user}
                                onChange={(e) => this.handleUser(e)}
                                className="p-1 form-control"
                                placeholder="Your username ..." />
                            <label>Chat Message: </label>
                            <input
                                value={this.state.text}
                                onChange={(e) => this.handleMessageChange(e)}
                                className="p-1 form-control"
                                placeholder="Type here ..." />
                            <button onClick={(e) => this.handleClickSubmit(e)} className="btn btn-lg btn-outline-warning mt-2">Chat!</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    {this.state.chatText.map((chat, index) => {
                        return <Card key={index} chat={chat} />
                    })}
                </div>
            </div>
        );
    }

};

export default App;