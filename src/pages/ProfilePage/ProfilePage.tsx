import avatar from '../../assets/img/avatar.png';
import wallet from '../../assets/img/wallet.svg';
import settings from '../../assets/img/settings.svg';
import exportIco from '../../assets/img/export.svg';
import logout from '../../assets/img/logout.svg';

import './style.scss';

export default function ProfilePage() {
  return (
    <section className="profile block">
      <div className="container">
        <div className="profile__info user">
          <img className="user__avatar" src={avatar} alt="User avatar" />
          <div className="user__info">
            <span className="user__info--label">Username</span>
            <h2 className="user__info--name">Iriana Saliha</h2>
          </div>
          <button className="user__edit-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M20.19 8.46047L8.18996 20.4605C7.91385 20.7307 7.56733 20.9178 7.18996 21.0005L3.64996 21.7105C3.32767 21.7742 2.99465 21.7576 2.68033 21.662C2.366 21.5665 2.08005 21.395 1.84775 21.1627C1.61545 20.9304 1.44395 20.6444 1.34841 20.3301C1.25287 20.0158 1.23623 19.6828 1.29996 19.3605L1.99996 15.8505C2.08263 15.4731 2.26975 15.1266 2.53996 14.8505L14.38 3.00047C14.7665 2.60436 15.2285 2.28958 15.7385 2.07466C16.2486 1.85974 16.7965 1.74902 17.35 1.74902C17.9034 1.74902 18.4513 1.85974 18.9614 2.07466C19.4715 2.28958 19.9334 2.60436 20.32 3.00047C21.0089 3.76041 21.3796 4.75598 21.3554 5.78144C21.3312 6.80689 20.914 7.78387 20.19 8.51047V8.46047Z"
                stroke="#212325"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <ul className="profile__settings">
          <li className="profile__settings-item">
            <img src={wallet} alt="wallet icon" />
            My Wallet
          </li>
          <li className="profile__settings-item">
            <img src={settings} alt="wallet icon" />
            Settings
          </li>
          <li className="profile__settings-item">
            <img src={exportIco} alt="wallet icon" />
            Export Data
          </li>
          <li className="profile__settings-item">
            <img src={logout} alt="wallet icon" />
            Logout
          </li>
        </ul>
      </div>
    </section>
  );
}
