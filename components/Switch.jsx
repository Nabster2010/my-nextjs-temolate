const Switch = ({ isActive, toggle }) => {
  return (
    <label
      htmlFor="switch"
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        value={isActive}
        id="switch"
        onChange={toggle}
        className="sr-only peer"
        type="checkbox"
      />
      <div className="flex items-center justify-between w-12 h-6 px-0.5 bg-gray-500 rounded-full ">
        <span className="inline-block w-5 ">🌜</span>
        <span className="inline-block w-5 ">🌞</span>
      </div>
      <span className="absolute top-0 left-0 w-6 h-6 transition transform bg-white border border-gray-500 rounded-full ring-2 ring-blue-600 peer-checked:translate-x-6"></span>
    </label>
  );
};

export default Switch;
