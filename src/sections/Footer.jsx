import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
           <a href={socialImg.link} target="_blank"> <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div></a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Zayed Alam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
