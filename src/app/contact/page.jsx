"use client";
import "./contact.css";
import Button from "@/components/Button/Button";
import Copy from "@/components/Copy/Copy";

const Page = () => {
  return (
    <section className="contact">
      <div className="contact-copy">
        <div className="contact-col">
          <Copy delay={0.8}>
            <h2>Things in motion stay interesting</h2>
          </Copy>
        </div>

        <div className="contact-col">
          <div className="contact-group">
            <Copy delay={0.8}>
              <p className="sm">Focus</p>
              <p>Hyba Services</p>
              <p>Deeper Transport</p>
              <p>Regional Logistics</p>
            </Copy>
          </div>

          <div className="contact-group">
            <Copy delay={1.2}>
              <p className="sm">Base</p>
              <p>Odisha, India</p>
            </Copy>
          </div>

          <div className="contact-mail">
            <Button delay={1.3} href="mailto:info@siddharthtransport.com" target="_blank">
              info@siddharthtransport.com
            </Button>
          </div>

          <div className="contact-group">
            <Copy delay={1.4}>
              <p className="sm">Credits</p>
              <p>Siddharth Transport</p>
              <p>Edition 2026</p>
            </Copy>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <div className="container">
          <Copy delay={1.6} animateOnScroll={false}>
            <p className="sm">Code & Logic</p>
          </Copy>

          <div className="contact-socials">
            <Copy delay={1.7} animateOnScroll={false}>
              <a
                className="sm"
                href="https://github.com/SOURAVJENA2003"
                target="_blank"
              >
                GitHub
              </a>
            </Copy>

            <Copy delay={1.8} animateOnScroll={false}>
              <a
                className="sm"
                href="https://www.linkedin.com/in/sourav-jena-44b368373/"
                target="_blank"
              >
                LinkedIn
              </a>
            </Copy>

            <Copy delay={1.9} animateOnScroll={false}>
              <a
                className="sm"
                href="https://codolio.com/profile/SOURAV_JENA"
                target="_blank"
              >
                Codolio
              </a>
            </Copy>
          </div>
          <Copy delay={2} animateOnScroll={false}>
            <p className="sm">&copy; Sourav Jena</p>
          </Copy>
        </div>
      </div>
    </section>
  );
};

export default Page;
