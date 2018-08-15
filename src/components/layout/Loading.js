import React from "react";


export default class Loading extends React.Component {
  render() {
    const marginStyles = {
        marginTop: "300px",
    };
    return (
      <div className="content-wrapper">
          <section className="content">
            <div className="row">
              <div className="col-xs-12">
              <div className="box box-warning">
                <div className="box-header">
                    <i className="fa fa-spin fa-refresh"></i>
                  <h3 className="box-title">Loading...</h3>
                </div>
              </div>
              </div>
            </div>
          </section>

          <div className="row" style={marginStyles}/>
      </div>
    );
  }
}
