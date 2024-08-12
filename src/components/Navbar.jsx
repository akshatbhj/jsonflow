function Navbar() {
  return (
    <div className="flex items-center bg-[#212121] p-2 ">
      <span className="ml-2">
        <img src="/jsonflow_icon.svg" alt="logo" width={50} />
      </span>
      <h1 className="text-3xl rounded-md shadow-lg text-white font-sourceCode p-2">
        JSONFlow
      </h1>
    </div>
  );
}

export default Navbar;
