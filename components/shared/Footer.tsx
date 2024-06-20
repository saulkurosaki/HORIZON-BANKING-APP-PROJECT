const Footer = ({ user, type = "desktop" }: FooterProps) => {
  return (
    <footer className="footer">
      <div
        className={`${
          type === "mobile" ? "footer_name-mobile" : "footer_name"
        }`}
      >
        <p className="text-xl font-bold text-gray-700">{user.firstName[0]}</p>
      </div>
    </footer>
  );
};

export default Footer;
