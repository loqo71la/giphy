import { Pageable } from '../shared/models/Pageable';

import LeftIcon from './icons/LeftIcon';
import RightIcon from './icons/RightIcon';
import style from './Pagination.module.scss';

export default function Pagination(props: { pageable: Pageable, title: string, onSelect: (page: number) => void }) {
  const { offset, count, totalCount } = props.pageable;
  const moveLeft = () => {
    if (hasLeft()) props.onSelect(offset - count);
  };
  const moveRight = () => {
    if (hasRight()) props.onSelect(offset + count);
  };
  const hasLeft = () => count > 0 && offset - count >= 0;
  const hasRight = () => count > 0 && offset + count < totalCount;

  return (
    <section className={style.pagination}>
      <strong>{props.title}</strong>
      <span>{offset + 1} - {offset + count} of {totalCount}</span>
      <button type="button" onClick={moveLeft} disabled={!hasLeft()}>
        <LeftIcon />
      </button>
      <button type="button" onClick={moveRight} disabled={!hasRight()}>
        <RightIcon />
      </button>
    </section>
  );
}
