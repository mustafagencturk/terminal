const ServicesComponent = () => {
  return (
    <section id="services">
      {/* Dividers */}
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">What Bring Us Together</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_services">
          <ul>
            <li>
              <div className="item">
                <div className="item_num">
                  <span> &gt;_ </span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">All checks have failed</h3>
                  <p className="fn_desc fn_animated_text">
                    TerminalDAO encourages innovation through interdisciplinary 
  collaboration among artists, designers, architects, and software developers. 
  Bringing industry professionals
  together to shape a sustainable future.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span> &gt;_ </span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Community Building and Social Impact</h3>
                  <p className="fn_desc fn_animated_text">
                    TerminalDAO is a digital hub that fosters community among artists 
                    and creators.
                    Explore the collective efforts made by TerminalDAO 
                    members to drive social impact.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>03</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Top Resource</h3>
                  <p className="fn_desc fn_animated_text">
                    Tasty design resources made with care for each pixel.
                    Tokens, NFTs, metaverse and game resources. Access
                    additional drops.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>04</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Big Community</h3>
                  <p className="fn_desc fn_animated_text">
                    Be part of a community of neoh owners and create user
                    generated items. Rent, advertise, lounch stores, create
                    items.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
