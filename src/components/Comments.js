import React, { useState } from "react";

const apiRest = "https://juliandigital.brucesbakery.com/api";

const Comments = props => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target[0].value);
  };
  const [comments, setComments] = useState(0);
  // const componentDidMount = () => {
  //   renderPosts();
  // };

  const renderPosts = async () => {
    fetch(`${apiRest}/get?id=${props.id}`, { mode: "no-cors" })
      .then(data => {
        data = JSON.parse(data);
        data.map((content, index) => {
          console.log(data);
          setComments(<p key={index}>{content.comment}</p>);
        });
      })
      .catch(() =>
        console.log(
          "Can’t access " + apiRest + " response. Blocked by browser?"
        )
      );
  };
  renderPosts();
  return (
    <div className="row">
      <div className="col-sm-12">
        <h5 className="text-center">Rating</h5>
      </div>

      <div className="starrating risingstar col-sm-12 flex-row-reverse">
        <input type="radio" id="star5" name="rating" value="5" />
        <label htmlFor="star5" title="5 star">
          {/* 5 */}
        </label>
        <input type="radio" id="star4" name="rating" value="4" />
        <label htmlFor="star4" title="4 star">
          {/* 4 */}
        </label>
        <input type="radio" id="star3" name="rating" value="3" />
        <label htmlFor="star3" title="3 star">
          {/* 3 */}
        </label>
        <input type="radio" id="star2" name="rating" value="2" />
        <label htmlFor="star2" title="2 star">
          {/* 2 */}
        </label>
        <input type="radio" id="star1" name="rating" value="1" />
        <label htmlFor="star1" title="1 star">
          {/* 1 */}
        </label>
      </div>

      <div className="col-sm-12">
        <h5>Comments</h5>
        {comments}
      </div>
      <div className="col-sm-12">
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1" />
            <textarea
              className="form-control"
              placeholder="Write a comment"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Comment
          </button>
        </form>
      </div>
    </div>
  );
};
export default Comments;
