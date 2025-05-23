import { Component } from "react";

type State = {
    count: number;
}

class ClassComponentWithState extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    decresentCount = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }));
    };

    resetCount = () => {
        this.setState(() => ({
            count: 0,
        }));
    };

    render() {
        return (
            <>
                <div className="space-y-4 pt-12">
                    <h1 className="text-center font-bold">Count is {this.state.count}</h1>
                    <div className="text-center">
                        <button onClick={this.incrementCount} className="btn bg-green-400 text-white py-2 px-4">Increase</button>
                        <button onClick={this.decresentCount} className="btn bg-red-400 text-white py-2 px-4">Decrease</button>
                    </div>
                    <div className="text-center">
                        <button onClick={this.resetCount} className="btn bg-black text-white py-2 px-4">Reset</button>
                    </div>
                </div>
            
            </>
        );
    }

}

export default ClassComponentWithState;