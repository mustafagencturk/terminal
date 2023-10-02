import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="neoh_fn_footer">
        {/* Footer Top */}
        <div className="footer_top">
          <div className="container">
            <div className="ft_in">
              <div className="desc">
                <div className="img">
                  <img src="img/footer-log.jpg" alt="" />
                </div>
                <h3 className="fn_title">Join Now For Early Access</h3>
                <p className="fn_desc">
                </p>
              </div>
              <div className="subscribe_form">
                <div className="subscribe_in">
                  <input type="text" placeholder="Email..." />
                  <a href="#" className="neoh_fn_button only_text">
                    <span className="text">Subscribe</span>
                  </a>
                </div>
                <div
                  className="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                  data-message="You have subscribed to our updates. Thank you"
                  data-invalid-email="Please enter valid email!"
                />
                <div className="empty_notice">
                  <span>Please enter your Email</span>
                </div>
              </div>
              <div className="neoh_fn_social_list">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fn-icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fn-icon-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Top */}
        {/* Footer Bottom */}
        <div className="footer_bottom">
          <div className="container">
            <div className="fb_in">
              <div className="fb_left">
                <p>
                  Copyright {new Date().getFullYear()} - Designed &amp;
                  Developed by{" TerminalDAO "}
                  <a
                    // eslint-disable-next-line react/no-unknown-property
                    Termiverce
                  >
                    
                  </a>
                </p>
              </div>
              <div className="fb_right">
                <ul>
                  <li>
                    <Link href="/roadmap">RoadMap</Link>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Bottom */}
      </div>
    </footer>
  );
};
export default Footer;
