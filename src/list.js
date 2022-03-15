

const List = (props) => {
    let currentTotal =  (props.coins.currentPrice * props.coins.coin).toFixed(2);
    let per = ((currentTotal / props.coins.investment) * 100).toFixed(2);
    let totaloss = (currentTotal - props.coins.investment).toFixed(2);
    return (
            <>
                    <div className={"box"} >
                        <div className={"box-content"}>
                            <div className={"coinName"}>
                                <img src={`https://media.wazirx.com/media/${props.coins.name}/84.png`} alt={props.coins.name} />
                                <span>{props.coins.name}</span>
                                <span className={`per ${totaloss < 0 ? "l" : "p" }`}  title={`₹${per}`}> {per}% </span>
                            </div>
                            <div className={"coin-details"}>
                                <div className={"investmentDetails"}>
                                    <div className={"totalCurrentCoinValue"} title={`₹${currentTotal}`}><strong>₹{currentTotal}</strong></div>
                                    <div className={"totalInversedValue"} title={`₹${props.coins.investment}`}><strong>₹{props.coins.investment}</strong></div>
                                    <div className={`gainLoss ${totaloss < 0 ? "l" : "p" }`} title={`₹${totaloss}`}>₹{totaloss}</div>
                                 </div>
                                <div className="coinDetails">
                                    <div className="currentCoinValue" title={`₹${props.coins.currentPrice}`}>₹{props.coins.currentPrice}</div>
                                    <div className="TotalCoinPurchased"  title={`₹${props.coins.coin}`}>{props.coins.coin}</div>
                                    <div className="averagePurchasePrice" title={`₹${props.coins.pp}`}>₹{props.coins.pp}</div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
)
};

export default List;