import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/hero/terminal-veri.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
            <h3 className="fn_title">Welcome to TerminalDAO</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Community; 
                A Place Where People Can Unite;
                Earthly. 
              </p>
              <p>
                
              </p>
			  
            </div>
            <div className="buttons">
              <a
                href="https://discord.gg/qfQ6dfmQv"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Discord</span>
              </a>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/hero/terminal-veri-2.jpg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
            <h3 className="fn_title">Terminal Artists Space</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
              TerminalDAO (Terminal Artists Space) was established in 2021 as a 
              decentralized autonomous organization, uniting traditional and XR artists in web3. 
              </p>
              <p>
              Presently, it serves as a digital hub for artists, designers, architects, and software developers, 
              harnessing exponential technologies to drive sustainable and regenerative production across industries, 
              all while promoting awareness of the urgent climate crisis.
              </p>
            </div>
            <div className="buttons">
              <Link href="https://twitter.com/terminaldao/">
                <a className="neoh_fn_button only_text">
                  <span className="text">More About US</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;
