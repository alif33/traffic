export default function Form({ trafficInfos, setTrafficInfos }) {

    return (
        <div className="results-section">
            <div className="results w-50 m-auto">
                {
                    trafficInfos &&(
                        <h3 className="text-center mb-5">{trafficInfos.length} ongoing traffic disruptions</h3>
                    )
                }
                
                {
                    trafficInfos && trafficInfos.map((info, index)=>(
                        <div key={index} className="card p-3 mb-3">
                            <h3 className="card-title">{info.title}</h3>
                            <h4>{info.startTime} {info.endTime}Updated: 2023-02-10 14:43</h4>
                            <p>
                                {info.description}
                            </p>
                        </div>
                    ))
                }
        
            </div>
        </div>
    );
}

