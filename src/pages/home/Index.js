import React from "react";
import {Link} from 'react-router-dom';

export default class Index extends React.Component {
  render() {
    return (<div className="content-wrapper">
      <section className="content-header">
        <ol className="breadcrumb">
          <li>
            <Link to="/">
              <i className="fa fa-home"></i>Home</Link>
          </li>
          <li className="active">Dashboard</li>
        </ol>
      </section>
      <section className="content">
        <div className="row">
          <div className="col-md-6">
            <div className="box box-widget">
              <div className="box-header with-border">
                <div className="user-block">
                  <img className="img-circle" src="../dist/img/user1-128x128.jpg" alt="User Placeholder"/>
                  <span className="username">
                    <a href="/">Jonathan Burke Jr.</a>
                  </span>
                  <span className="description">Shared publicly - 7:30 PM Today</span>
                </div>
                <div className="box-tools">
                  <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Mark as read">
                    <i className="fa fa-circle-o"></i>
                  </button>
                  <button type="button" className="btn btn-box-tool" data-widget="collapse">
                    <i className="fa fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-box-tool" data-widget="remove">
                    <i className="fa fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="box-body">
                <img className="img-responsive pad" src="../dist/img/photo2.png" alt="Placeholder"/>

                <p>I took this photo this morning. What do you guys think?</p>
                <button type="button" className="btn btn-default btn-xs">
                  <i className="fa fa-share"></i>
                  Share</button>
                <button type="button" className="btn btn-default btn-xs">
                  <i className="fa fa-thumbs-o-up"></i>
                  Like</button>
                <span className="pull-right text-muted">127 likes - 3 comments</span>
              </div>
              <div className="box-footer box-comments">
                <div className="box-comment">
                  <img className="img-circle img-sm" src="../dist/img/user3-128x128.jpg" alt="User Placeholder"/>

                  <div className="comment-text">
                    <span className="username">
                      Maria Gonzales
                      <span className="text-muted pull-right">8:03 PM Today</span>
                    </span>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </div>
                </div>
                <div className="box-comment">
                  <img className="img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="User Placeholder"/>

                  <div className="comment-text">
                    <span className="username">
                      Luna Stark
                      <span className="text-muted pull-right">8:03 PM Today</span>
                    </span>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </div>
                </div>
              </div>
              <div className="box-footer">
                <form action="/" method="post">
                  <img className="img-responsive img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="Alt Text"/>
                  <div className="img-push">
                    <input type="text" className="form-control input-sm" placeholder="Press enter to post comment"/>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6">

            <div className="box box-widget">
              <div className="box-header with-border">
                <div className="user-block">
                  <img className="img-circle" src="../dist/img/user1-128x128.jpg" alt="User Placeholder"/>
                  <span className="username">
                    <a href="/">Jonathan Burke Jr.</a>
                  </span>
                  <span className="description">Shared publicly - 7:30 PM Today</span>
                </div>

                <div className="box-tools">
                  <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Mark as read">
                    <i className="fa fa-circle-o"></i>
                  </button>
                  <button type="button" className="btn btn-box-tool" data-widget="collapse">
                    <i className="fa fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-box-tool" data-widget="remove">
                    <i className="fa fa-times"></i>
                  </button>
                </div>

              </div>

              <div className="box-body">

                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at</p>

                <p>the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                <div className="attachment-block clearfix">
                  <img className="attachment-img" src="../dist/img/photo1.png" alt="Attachment"/>

                  <div className="attachment-pushed">
                    <h4 className="attachment-heading">
                      <a href="http://www.lipsum.com/">Lorem ipsum text generator</a>
                    </h4>

                    <div className="attachment-text">
                      Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                      <a href="/">more</a>
                    </div>

                  </div>

                </div>

                <button type="button" className="btn btn-default btn-xs">
                  <i className="fa fa-share"></i>
                  Share</button>
                <button type="button" className="btn btn-default btn-xs">
                  <i className="fa fa-thumbs-o-up"></i>
                  Like</button>
                <span className="pull-right text-muted">45 likes - 2 comments</span>
              </div>

              <div className="box-footer box-comments">
                <div className="box-comment">

                  <img className="img-circle img-sm" src="../dist/img/user3-128x128.jpg" alt="User Placeholder"/>

                  <div className="comment-text">
                    <span className="username">
                      Maria Gonzales
                      <span className="text-muted pull-right">8:03 PM Today</span>
                    </span>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </div>

                </div>

                <div className="box-comment">

                  <img className="img-circle img-sm" src="../dist/img/user5-128x128.jpg" alt="User Placeholder"/>

                  <div className="comment-text">
                    <span className="username">
                      Nora Havisham
                      <span className="text-muted pull-right">8:03 PM Today</span>
                    </span>
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                  </div>

                </div>

              </div>

              <div className="box-footer">
                <form action="#" method="post">
                  <img className="img-responsive img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="Alt Text"/>

                  <div className="img-push">
                    <input type="text" className="form-control input-sm" placeholder="Press enter to post comment"/>
                  </div>
                </form>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>);
  }
}
