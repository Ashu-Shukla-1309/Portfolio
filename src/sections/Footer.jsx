import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          {/* You can leave this as Terms & Conditions, or change it to something like "Visit my GitHub" */}
          <p>Visit my Github and project repositories</p>
        </div>
        
        <div className="socials">
          {socialImgs.map((socialImg) => (
            <a
              key={socialImg.name}
              href={socialImg.url}
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </a>
          ))}
        </div>
        
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ashutosh Shukla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;