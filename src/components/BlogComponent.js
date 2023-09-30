import Link from "next/link";
const BlogComponent = () => {
  return (
    <section id="blog">
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Media</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Moving Blog List Shortcode */}
        <div className="neoh_fn_moving_blog">
          <ul>
            <li>
              <div className="item">
                <img src="img/blog/1.jpg" alt="" className="moving_img" />
                <p className="fn_date">
                  <span>October 15, 2023</span>
                </p>
                <h3 className="fn_title">
                  <Link href="/#">
                      Which Future?
                  </Link>
                </h3>
                <p className="fn_desc">
                Welcome to 'Which Future,' a compelling podcast series hosted by Begum Bitir from TerminalDAO. 

                </p>
                <p className="fn_read">
                  <Link href="#">
                    <a className="neoh_fn_button only_text">
                      <span className="text">Listen on Spotify</span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/blog/2.jpg" alt="" className="moving_img" />
                <p className="fn_date">
                  <span>October 25, 2023</span>
                </p>
                <h3 className="fn_title">
                  <Link href="#">
                    Which Tech?
                  </Link>
                </h3>
                <p className="fn_desc">
                Disruptive and new technologies podcast series will be hosted by Aybars Dorman
                </p>
                <p className="fn_read">
                  <Link href="#">
                    <a className="neoh_fn_button only_text">
                      <span className="text">Listen on Spotify</span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* !Moving Blog List Shortcode */}
      </div>
    </section>
  );
};
export default BlogComponent;
