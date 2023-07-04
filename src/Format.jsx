
const Format = (props) => {
    return (
        <div className="format">
            <h2>Please enter your Details for {props.name}</h2>
            <input type="text" id="name" placeholder="Enter your Name" />
            <input type="text" placeholder="Enter your Email-Id" />
            <input type="text" placeholder="Enter your Mobile num" />
            <input type="text" placeholder="Enter your age" />
            <button id="btn">Submit</button>
        </div>
    )
}

export default Format;
