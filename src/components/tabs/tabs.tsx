import { useState } from 'react';
import { commentGet } from '../../mocks/comments';
import { Film } from '../../types/film';
import { TabsNav } from '../../utils/nav';
import Details from './details';
import Nav from './nav';
import Overview from './overview';
import Reviews from './reviews';

type TabsProps = {
  film: Film
};

function Tabs(props: TabsProps) {
  const { film } = props;
  const [isActiveTab, setActiveTab] = useState<string>(TabsNav.OVERVIEW);

  const onTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const renderSelectedTabInfo = () => {
    switch (isActiveTab) {
      case TabsNav.OVERVIEW:
        return <Overview film={film} />;
      case TabsNav.DETAILS:
        return <Details film={film} />;
      case TabsNav.REVIEWS:
        return <Reviews comments={commentGet} />;

      default:
        return <Overview film={film} />;
    }
  };

  return (
    <div className="film-card__desc">
      <Nav tabsNav={TabsNav} isActiveTab={isActiveTab} onTabClick={onTabClick} />

      {renderSelectedTabInfo()}
    </div>
  );
}

export default Tabs;
