import { useNavigate } from 'react-router-dom';
import style from './SavedNavbar.module.scss';

export default function SavedNavbar() {
  const navigate = useNavigate();

  return (
    <nav className={style.savedNavbar}>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h2>My Saved GIFS</h2>
      <span />
    </nav>
  )
}
