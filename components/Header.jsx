import { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import Nav from "./Nav";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  const { dir, asPath, targetLng, push } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  return (
    <header className="flex items-center justify-between w-full px-8 py-4 bg-gray-100 dark:bg-gray-700 dark:text-white">
      <Nav />
      <div className="flex items-center justify-center">
        <ToggleTheme />

        <button
          onClick={() => push(asPath, {}, { locale: targetLng })}
          className="px-4 py-3 mx-4 border"
        >
          {targetLng}
        </button>
      </div>
    </header>
  );
};

export default Header;
