import React from "react";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
        }
        this.handleWidthChange = this.handleWidthChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    
    handleWidthChange(e) {
        this.setState({
            width: +e.target.value
        })
    }
    handleHeightChange(e) {
        this.setState({
            height: +e.target.value
        })
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const { width, height } = this.state;

        const styles = {
            width: width,
            height: height,
            backgroundColor: 'lightgray',
        }

        this.props.onSubmit(styles);
    }
    render() {
        const { width, height } = this.state;
        return (
            <>
                <form onSubmit={this.handleFormSubmit} style={{ marginBottom: "20px" }}>
                    <div>
                        <label> Width : </label>
                        <input
                            type="number"
                            placeholder="Width px"
                            min="0"
                            max="1000"
                            value={width}
                            onChange={this.handleWidthChange} />
                    </div>
                    <div>
                        <label> Height : </label>
                        <input
                            type="number"
                            placeholder="Height px"
                            min="0"
                            max="1000"
                            value={height}
                            onChange={this.handleHeightChange} />
                    </div>

                    <button style={{ marginTop: "5px" }}>Generator</button>
                </form>
            </>
        );
    }
}


export default Form;