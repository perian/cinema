import TabsNav from '../../types/nav';

type NavProps = {
  tabsNav: TabsNav,
  isActiveTab: string,
  onTabClick: (tabName: string) => void;
};

function Nav({ tabsNav, isActiveTab, onTabClick }: NavProps) {
  const tabNames = Object.values(tabsNav);

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {tabNames.map((tabName) => (
          <li
            key={tabName}
            className={`film-nav__item ${isActiveTab === tabName ? 'film-nav__item--active' : ''}`}
          >
            <a href="#"
              className="film-nav__link"
              onClick={(evt) => {
                evt.preventDefault();
                onTabClick(tabName);
              }}
            >
              {tabName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
