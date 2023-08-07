import './style.scss';

export default function SucessPopup({ text }: { text: string }) {
  return (
    <div className={`popup`}>
      <div className="popup__window">
        <svg
          className="popup__ico"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M24 0C19.2533 0 14.6131 1.40758 10.6663 4.04473C6.71955 6.68188 3.64341 10.4302 1.8269 14.8156C0.0103989 19.201 -0.464881 24.0266 0.461164 28.6822C1.38721 33.3377 3.67299 37.6141 7.02945 40.9706C10.3859 44.327 14.6623 46.6128 19.3178 47.5388C23.9734 48.4649 28.799 47.9896 33.1844 46.1731C37.5698 44.3566 41.3181 41.2805 43.9553 37.3337C46.5924 33.3869 48 28.7468 48 24C48 17.6348 45.4715 11.5303 40.9706 7.02944C36.4697 2.52856 30.3652 0 24 0ZM35.32 19.18L24 30.48C22.875 31.6036 21.35 32.2347 19.76 32.2347C18.17 32.2347 16.645 31.6036 15.52 30.48L12.68 27.66C12.4935 27.4735 12.3456 27.2521 12.2447 27.0085C12.1438 26.7649 12.0918 26.5037 12.0918 26.24C12.0918 25.9763 12.1438 25.7151 12.2447 25.4715C12.3456 25.2279 12.4935 25.0065 12.68 24.82C12.8665 24.6335 13.0879 24.4856 13.3315 24.3847C13.5752 24.2838 13.8363 24.2318 14.1 24.2318C14.3637 24.2318 14.6249 24.2838 14.8685 24.3847C15.1122 24.4856 15.3335 24.6335 15.52 24.82L18.34 27.66C18.5259 27.8475 18.7471 27.9962 18.9909 28.0978C19.2346 28.1993 19.496 28.2516 19.76 28.2516C20.024 28.2516 20.2854 28.1993 20.5292 28.0978C20.7729 27.9962 20.9941 27.8475 21.18 27.66L32.48 16.34C32.6665 16.1535 32.8879 16.0056 33.1315 15.9047C33.3752 15.8038 33.6363 15.7518 33.9 15.7518C34.1637 15.7518 34.4249 15.8038 34.6685 15.9047C34.9122 16.0056 35.1335 16.1535 35.32 16.34C35.5065 16.5265 35.6544 16.7479 35.7553 16.9915C35.8563 17.2351 35.9082 17.4963 35.9082 17.76C35.9082 18.0237 35.8563 18.2849 35.7553 18.5285C35.6544 18.7721 35.5065 18.9935 35.32 19.18Z"
            fill="#5233FF"
          />
        </svg>
        <p className="popup__text">{text}</p>
      </div>
    </div>
  );
}
