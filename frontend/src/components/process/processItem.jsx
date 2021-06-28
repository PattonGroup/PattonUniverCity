import React from 'react';

const ProcessItem = (props) => {
    console.log(props.item)
    return (
        <>
            <div key={props.item.key} id={props.item.id} className="tab-pane active">
                <div className="col-md-5 process-img">
                    <img src={props.item.img} className="img-responsive" />
                </div>

                <div className="col-md-7 process-content">
                    <h6>{props.item.name}</h6>
                    <p>{props.item.title}</p>
                    <a href={props.item.link}>Read More</a> </div>
            </div>
        </>

    )
}
export default ProcessItem;

