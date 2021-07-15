const roomStyle = {
    height: "95vh",
    width: "100vw",
    paddingTop: "5vh",
    margin: 0,
    border: 0
}

const titleStyle = {
    // fontFamily: "Neue Plak W01 Light,sans-serif",
    // fontSize: "20px",
    backgroundColor: "black",
    color: "#39FF14",
    textAlign: "center",
    marginBottom: "20px",
    // position: "fixed"
}

const roomUserStyle = { 
    backgroundColor: "black",
    color: "#39FF14",
    overflowY: "auto",
    maxHeight: "75vh",
    position: "relative",
    borderRadius: "10px 0 0 10px"
}

const groupChatStyle = {
    overflowY: "auto",
    height: "75vh",
    position: "relative",
    color: "#fff",
    borderRadius: "0 10px 10px 0"
}

const userListStyle = {
    listStyleType:"none"
}

const inputStyle = {
    position: "sticky"
}

const chatWindow = {
    border: "solid",
	borderRadius: "10px",
    borderWidth: "medium",
    borderColor: "white"
}

const emojiStyle = {
    float: "top",
    top: 100
}

module.exports =  { roomStyle, chatWindow, titleStyle , roomUserStyle, userListStyle, groupChatStyle, inputStyle, emojiStyle}