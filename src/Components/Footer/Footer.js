import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-title">
          <h5>Be-Pin Finance </h5>
          <p>Don't © All Rights Deserverd.</p>
        </div>
        <div className="footer-social-icon">
          <a href="https://www.linkedin.com/in/bekir-akok/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Bekir-Akok" target="_blank">
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
