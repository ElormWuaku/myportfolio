const Cursor = () => {
  return (
    <div className="fixed top-0 pointer-events-none z-50">
      <div id="custom-cursor"
      className="fixed w-8 h-8 bg-white rounded-full border border-black transform -translate-x-1/2 translate-y-1/2 transition-all duration-100 ease-out pointer-events-none"></div>
    </div>
  );
}

export default Cursor;