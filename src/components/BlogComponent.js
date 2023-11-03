import Link from "next/link";
const BlogComponent = () => {
  return (
    <section id="blog">
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Media & Events</h3>
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
                <img src="img/blog/begum.svg" alt="" className="moving_img" />
                <p className="fn_date">
                  <span>Nov 15, 2023</span>
                </p>
                <h3 className="fn_title">
                  <Link href="https://open.spotify.com/user/31wrbzcd6lgrt4avl3jnxjxsynfe?si=490fba0e908049a2&nd=1">
                  From Crisis to Innovation: &apos;Which Future&apos; Podcast Shapes a Sustainable Future with Technology
                  </Link>
                </h3>
                <p className="fn_desc">
                Welcome to &apos;Which Future&apos; Dive into a compelling podcast series hosted by Begum Bitir,
                exploring the intersection of sustainability and exponential technologies. 
                Discover how industries embrace innovative solutions to combat the looming
                climate crisis and shape a brighter, more eco-conscious future.
                </p>
                <p className="fn_read">
                  <Link href="https://open.spotify.com/user/31wrbzcd6lgrt4avl3jnxjxsynfe?si=490fba0e908049a2&nd=1">
                    <a className="neoh_fn_button only_text">
                      <span className="text">lısten on spotıfy</span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/blog/aybars.svg" alt="" className="moving_img" />
                <p className="fn_date">
                  <span>May 25, 2023</span>
                </p>
                <h3 className="fn_title">
                  <Link href="https://open.spotify.com/user/31wrbzcd6lgrt4avl3jnxjxsynfe?si=490fba0e908049a2&nd=1">
                    DAOs in Action; &apos;Building Sustainable Ecosystems&apos; Podcast Series:
                  </Link>
                </h3>
                <p className="fn_desc">
                Get ready to unravel the potential of DAOs, witness their impact on decision-making,
                and discover strategies for building sustainable ecosystems. Stay tuned for thought-provoking
                insights and real-world examples that showcase how technology and collaboration are shaping an innovative future.
                </p>
                <p className="fn_read">
                  <Link href="https://open.spotify.com/user/31wrbzcd6lgrt4avl3jnxjxsynfe?si=490fba0e908049a2&nd=1">
                    <a className="neoh_fn_button only_text">
                      <span className="text">lısten on spotıfy</span>
                    </a>
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/blog/bilinmeyen.svg" alt="" className="moving_img" />
                <p className="fn_date">
                  <span>Agust 19, 2024</span>
                </p>
                <h3 className="fn_title">
                  <Link href="/https://open.spotify.com/user/31wrbzcd6lgrt4avl3jnxjxsynfe?si=490fba0e908049a2&nd=1">
                    Empowering Change: Unveiling the Principles of Social Entrepreneurship
                  </Link>
                </h3>
                <p className="fn_desc">
                Delve into the world of social entrepreneurship with our podcast as we unravel
                the core principles guiding impactful ventures.
                </p>
                <p className="fn_read">
                  <Link href="https://open.spotify.com/user/31wrbzcd6lgrt4avl3jnxjxsynfe?si=490fba0e908049a2&nd=1">
                    <a className="neoh_fn_button only_text">
                      <span className="text">lısten on spotıfy</span>
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
