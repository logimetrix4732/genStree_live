import NavBar from "../NavBar";
import genVoiceImg from "../../assets/images/genVoiceImg.png";

const SingleBlog = () => {
  return (
    <>
      <main>
        <NavBar />

        <header
          className="page-header"
          style={{
            backgroundImage: `url(${genVoiceImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="inner">
            <div className="container">
              <h1
                style={{
                  color: "#fff",
                  fontSize: "clamp(2rem, 10vw, 6rem)",
                  lineHeight: "1.2",
                  margin: 0,
                  maxWidth: "600px",
                }}
              >
                Genstree AI bulletin
              </h1>
            </div>
          </div>
        </header>
        <section className="blog">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="post single">
                  <div className="post-content">
                    <small className="post-date">21, June 2025</small>
                    <h3 className="post-title">
                      Smart Villages: Climate insights, Technology Shifting and
                      Transforming Agriculture in India
                    </h3>
                    <div
                      style={{
                        border: "2px solid #e0e0e0",
                        borderRadius: "10px",
                        overflow: "hidden",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        marginTop: "2rem",
                      }}
                    >
                      <iframe
                        src="/Newsletter.pdf"
                        width="100%"
                        height="800px"
                        style={{ border: "none" }}
                        title="Newsletter PDF"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SingleBlog;
