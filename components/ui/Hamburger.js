let Hamburger = ({ navOpen, setNavOpen }) => {
  return (
    <div
      className="space-y-2 cursor-pointer"
      onClick={() => setNavOpen(!navOpen)}
    >
      <div
        className={`w-8 h-0.5 bg-ds-primary ${navOpen ? 'opacity-0' : ''}`}
      ></div>
      <div className={`w-8 h-0.5 relative`}>
        <div
          className={`w-8 h-0.5 bg-ds-primary top-0 absolute ${
            navOpen ? 'rotate-45' : ''
          }`}
        ></div>
        <div
          className={`w-8 h-0.5 bg-ds-primary top-0 absolute ${
            navOpen ? '-rotate-45' : ''
          }`}
        ></div>
      </div>
      <div
        className={`w-8 h-0.5 bg-ds-primary ${navOpen ? 'opacity-0' : ''}`}
      ></div>
    </div>
  );
};

export default Hamburger;
