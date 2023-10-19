const WhyChooseUsComponent = () => {
  return (
    <section id="investor">
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
          <h3 className="fn_title">Trusted Allies</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Investor List Shortcode */}
        <div className="neoh_fn_investor">
          <ul>
            <li>
              <div className="item">
                <img src="img/investors/1.jpg" alt="" />
                <a href="https://www.su.org/" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/investors/2.jpg" alt="" />
                <a href="https://www.culturedeclares.org" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/investors/3.jpg" alt="" />
                <a href="https://www.cryptofemale.org" className="full_link" />
              </div>
            </li>
          </ul>
        </div>
        {/* !Investor List Shortcode */}
      </div>
    </section>
  );
};
export default WhyChooseUsComponent;
