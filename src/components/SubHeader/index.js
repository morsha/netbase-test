import React, {
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SUBTITLE_TABS } from '../../constant';
import { setTab } from '../../redux/actions';
import './index.scss';

function SubHeader() {
  const [showSubHeader, setShowSubHeader] = useState(true);
  const dispatch = useDispatch();

  const subtitleTab = useSelector(state => state.subtitleTab);

  const hideFn = () => setShowSubHeader(false);

  if (!showSubHeader) return null;

  return (
    <div className="subheader">
      <div className="subheader__tab-list">
        {SUBTITLE_TABS.map(tab => {
          const isActive = subtitleTab === tab.value;

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => dispatch(setTab(tab.value))}
              className={isActive ? 'subheader__tab subheader__tab--active' : 'subheader__tab'}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        onClick={hideFn}
        className="subheader__hide-btn"
      >
        HIDE
      </button>
    </div>
  );
}

export default SubHeader;
