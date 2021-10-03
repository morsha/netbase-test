import React from 'react';
import { useSelector } from 'react-redux';
import { SUBTITLE_TAB, TERMS } from '../../constant';
import PercentageDisplay from '../PercentageDisplay';

import './index.scss';

function Content() {
  const subtitleTab = useSelector(state => state.subtitleTab);

  if (subtitleTab !== SUBTITLE_TAB.ALL) {
    return (
      <div className="content" />
    )
  }

  return (
    <div className="content">
      <h1 className="content__title">TOP TERMS</h1>
      <div className="content__table-wrapper">
        <table className="content__table">
          <thead>
            <tr className="content__thead-tr">
              <th className="content__th content__table--terms">TERMS</th>
              <th className="content__th content__table--percentage">% OF TOTAL POSTS</th>
              <th className="content__th content__table--count"># OF POSTS</th>
            </tr>
          </thead>
          <tbody className="content__tbody">
            {TERMS.map((term) => (
              <tr
                key={term.name}
                className="content__tbody__tr"
              >
                <td className="content__td content__table--terms">{term.name}</td>
                <td className="content__td content__table--percentage">
                  <PercentageDisplay count={term.count} />
                </td>
                <td className="content__td content__table--count">{term.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Content;
