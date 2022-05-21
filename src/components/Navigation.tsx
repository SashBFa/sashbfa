interface navProps {
  setToggleDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation = (props: navProps) => {
  return (
    <div>
      <h2>Navigation</h2>
    </div>
  );
};

export default Navigation;
