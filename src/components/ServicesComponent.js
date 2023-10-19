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
                  TerminalDAO is a digital hub that fosters community among artists and creators.
Explore the collective efforts made by TerminalDAO members to drive
social impact, awareness of pressing issues like the climate crisis,
and advocate for positive change through artistic expression and collaboration.
Proudly, we collaborate with 'Culture Declares,'a collective initiative
uniting individuals, organizations, and communities in the cultural
sector to declare a climate and ecological emergency.
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
                  <h3 className="fn_title">Advancing Sustainable Innovation and Exponential Technologies</h3>
                  <p className="fn_desc fn_animated_text">
                    Through curated programs, workshops, and knowledge-sharing initiatives, 
  TerminalDAO empowers professionals with the latest insights and skills, 
  driving forward sustainable innovation within their respective domains.
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
                  <h3 className="fn_title">Revolutionizes Conventional Work Methods</h3>
                  <p className="fn_desc fn_animated_text">
                  We are revolutionizing conventional business methods, fostering industry advancement
through our community-driven agency, Termiverse. We provide implementation strategies
for exponential technologies, enabling digital transformation and community growth.
Our Dao members offer expert consultancy services, propelling innovation and change in various sectors.
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
