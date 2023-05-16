import React from "react";
const Medical = (props) => {
  const { data } = props;
  return (
    <div>
      <h1 className="heading3-class">{"Losing weight is hard, we make it a little bit easier with science."}</h1>
      <div className="card-section">
        {data.map((item,index) => {
          return (
            <div className="col-lg-4 col-md-6 col-12  " >
              <img
                src={item.image}
                className="card-img"
                alt="..."
                // height={"200"}
                // width={"100"}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  {item.description}
                </p>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Medical;
