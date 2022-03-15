import React from 'react';
import List from './list';
import Head from './head';
import "./App.css"

class Timer extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        timer: 0,
        ajax: "init",
        coins: {},
        currentValue: [],
    }

    this.initAjax = this.initAjax.bind(this);
}

componentDidMount() {
    // setInterval(this.countUp,1000)
    let a = this.initAjax();
}


    countUp = () => {
        let e = this.state.timer + 1
        this.setState({
            timer: e
        })
    }
    initAjax = () => {

        fetch("{your data json URL}")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        coins: result,
                    });
                     this.currentCoinValue();
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        error
                    });
                }
            )

    }
    currentCoinValue = () => {



                fetch("https://api.wazirx.com/uapi/v1/tickers/24hr")
                    .then(res => res.json())
                    .then(
                        (result) => {
let d = this.state.coins;
                            // d.ADA.currentPrice = 'jaipur';
                            // this.setState({ ...d });

                            // console.log(d.ADA.currentPrice);


                            Object.entries(result).map(([key, value]) =>{

                                let g = value.baseAsset.toUpperCase();
                                Object.entries(this.state.coins).map(([key, valuee]) => {
                                    if(key === g && value.quoteAsset === "inr"){
                                            d[g].currentPrice = value.lastPrice;
                                            this.setState({ ...d });
                                    }
                                    else if((g === "ICP")&&(key === "INTERNET COMPUTER")&&(value.quoteAsset === "inr")){
                                        d["INTERNET COMPUTER"].currentPrice = value.lastPrice;
                                        this.setState({ ...d });
                                    }
                                })
                            })
                            this.setState({
                                currentValue: result,
                            });
                             setTimeout(this.currentCoinValue,5000);

                        },
                        // Note: it's important to handle errors here
                        // instead of a catch() block so that we don't swallow
                        // exceptions from actual bugs in components.
                        (error) => {
                            this.setState({
                                error
                            });
                        }
                    )


    }
    render() {
    return(
            <>
                <div style={{padding: 30}}>
                    <Head calc={this.state.coins} />
                    <div className={"flexBox"}>
                        {Object.entries(this.state.coins).map(([key, value])=>{
                            return <List key={key} coins={value} />
                        })}
                    </div>
                </div>

            </>
    )
}
}

export default Timer;