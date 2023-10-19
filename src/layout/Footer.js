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
                  <img src="img/footer-logo.png" alt="" />
                </div>
                <h3 className="fn_title">Terminal Monthly Newsletter</h3>
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
                    <a href="https://twitter.com/terminaldao/">
                      <i className="fn-icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/terminaldao/">
                      <i className="fn-icon-github" />
                    </a>
                  </li>
                  <li>
                    <a href="https://whatsapp.com/channel/0029Va6XwO08qJ00lhnk5K2z">
                      <i className="fn-icon-whatsapp" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/terminaldao/">
                      <i className="fn-icon-instagram" />
                    </a>
                  </li>
                   <li>
                    <a href="https://t.me/terminal_dao">
                      <i className="fn-icon-telegram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/qfQ6dfmQv">
                            <span className="icon">
                          <img src="svg/discord-logo.svg" alt="" />
                        </span>
                        <span className="text"></span>
                    </a>
                  </li>
              
                  <li>
                    <a href="https://www.linkedin.com/company/termiverse/">
                      <i className="fn-icon-linkedin" />
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
                    Termiverse
                  >
                    
                  </a>
                </p>
              </div>
              <div className="fb_right">
                <ul>
                  <li>
                    <Link href="#">Termiverse</Link>
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
