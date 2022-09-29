import { useTranslation } from "../hooks/useTranslation";

const Nav = () => {
  const { translation: t } = useTranslation();
  return (
    <nav>
      <ul className="flex items-center justify-center gap-4">
        <li className="">
          <a href="#">{t.navigation.link1}</a>
        </li>
        <li>
          <a href="#">{t.navigation.link2}</a>
        </li>
        <li>
          <a href="#">{t.navigation.link3}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
