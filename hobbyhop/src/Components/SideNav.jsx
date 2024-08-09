import React from "react";
import "../Styles/SideNav.css";

function SideNav() {
  return (
    <div className="side-nav">
      <div className="nav-top">
        <div className="nav-item">
          <svg
            className="search-icon"
            width="61"
            height="60"
            viewBox="0 0 61 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_41_2)">
              <path
                d="M25.9781 6.13655e-05C21.9544 0.00188723 17.9883 0.955854 14.4039 2.78398C10.8195 4.61211 7.71861 7.26251 5.35466 10.5185C2.9907 13.7746 1.43082 17.5438 0.802497 21.5181C0.174176 25.4924 0.495259 29.559 1.7395 33.3854C2.98374 37.2119 5.11582 40.6896 7.96146 43.5343C10.8071 46.379 14.2855 48.5099 18.1124 49.7529C21.9393 50.9958 26.006 51.3155 29.9801 50.6859C33.9542 50.0562 37.7229 48.4951 40.9781 46.1301L53.6781 58.8301C54.4287 59.5806 55.4466 60.0023 56.5081 60.0023C57.5696 60.0023 58.5875 59.5806 59.3381 58.8301C60.0887 58.0795 60.5103 57.0615 60.5103 56.0001C60.5103 54.9386 60.0887 53.9206 59.3381 53.1701L46.6381 40.4701C49.4062 36.6652 51.0667 32.1682 51.4356 27.4775C51.8045 22.7867 50.8673 18.0855 48.7279 13.8947C46.5885 9.70401 43.3305 6.1875 39.315 3.73499C35.2995 1.28247 30.6833 -0.0102635 25.9781 6.13655e-05ZM25.9781 43.0001C22.5169 43.0001 19.1335 41.9737 16.2556 40.0508C13.3778 38.1279 11.1347 35.3947 9.81021 32.197C8.48567 28.9993 8.13912 25.4806 8.81436 22.086C9.4896 18.6913 11.1563 15.5731 13.6037 13.1257C16.0511 10.6783 19.1694 9.01156 22.564 8.33632C25.9587 7.66108 29.4774 8.00763 32.6751 9.33217C35.8728 10.6567 38.6059 12.8997 40.5288 15.7776C42.4517 18.6554 43.4781 22.0389 43.4781 25.5001C43.4728 30.1397 41.6274 34.5878 38.3466 37.8686C35.0659 41.1493 30.6178 42.9948 25.9781 43.0001Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_41_2">
                <rect width="61" height="60.0023" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="nav-item">
          <svg
            className="icon"
            width="68"
            height="69"
            viewBox="0 0 68 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_42_6)">
              <path
                d="M7.50012 68.0488H24.0001C24.8009 68.0488 25.5001 67.3495 25.5001 66.5488V47.5488C25.5001 45.0488 27.5001 43.0488 30.0001 43.0488H38.0001C40.5001 43.0488 42.5001 45.0488 42.5001 47.5488V66.5488C42.5001 67.3495 43.1993 68.0488 44.0001 68.0488H60.5001C64.6017 68.0488 68.0001 64.6504 68.0001 60.5488V26.0488C68.0001 23.4472 66.6017 20.9472 64.3009 19.6504L37.8989 1.15036C37.8989 1.15036 37.7974 1.15036 37.7974 1.0488C35.4966 -0.3496 32.5982 -0.3496 30.1958 1.0488L30.0942 1.15036L3.6992 19.6504C1.3984 20.9473 0 23.4473 0 26.0488V60.5488C0 64.6504 3.39852 68.0488 7.50012 68.0488Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_42_6">
                <rect width="68.0001" height="68.0488" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="nav-item">
          <svg
            className="icon"
            width="95"
            height="95"
            viewBox="0 0 95 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_42_19)">
              <path
                d="M47.5 0C21.266 0 0 21.266 0 47.5C0 73.734 21.266 95 47.5 95C73.734 95 95 73.734 95 47.5C95 21.266 73.734 0 47.5 0ZM63.703 53.438H53.437V63.704C53.437 66.2313 51.3862 68.2821 48.8589 68.2821H46.1362C43.6089 68.2821 41.5581 66.2313 41.5581 63.704L41.562 53.438H31.296C28.7687 53.438 26.7179 51.3872 26.7179 48.8599V46.1372C26.7179 43.6099 28.7687 41.5591 31.296 41.5591L41.562 41.563V31.297C41.562 28.7697 43.6128 26.7189 46.1401 26.7189H48.8628C51.3901 26.7189 53.4409 28.7697 53.4409 31.297V41.563H63.7069C66.2342 41.563 68.285 43.6138 68.285 46.1411V48.8638C68.2811 51.3872 66.2303 53.438 63.703 53.438Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_42_19">
                <rect width="95" height="95" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="nav-item">
          <svg
            className="icon"
            width="84"
            height="84"
            viewBox="0 0 84 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_42_15)">
              <path
                d="M45.008 38.3359C46.3518 39.6836 46.7541 41.707 46.0236 43.4648C45.297 45.2226 43.5783 46.3671 41.6759 46.3671C39.7735 46.3671 38.0548 45.2226 37.3282 43.4648C36.5977 41.707 37.0001 39.6836 38.3438 38.3359C39.2188 37.4375 40.4219 36.9336 41.6758 36.9336C42.9297 36.9336 44.133 37.4375 45.008 38.3359ZM71.133 71.125C63.3205 78.9414 52.723 83.332 41.672 83.336C30.621 83.336 20.02 78.9454 12.207 71.133C4.3906 63.3166 0 52.719 0 41.668C0 30.617 4.3906 20.02 12.207 12.203C20.0195 4.3905 30.621 0 41.672 0C52.723 0.003907 63.32 4.3945 71.133 12.211C78.9455 20.0235 83.332 30.621 83.332 41.668C83.332 52.715 78.9453 63.313 71.133 71.125ZM57.258 52.3359L50.301 35.1289V35.125C49.9299 34.1719 49.1721 33.4141 48.219 33.043L31.008 26.086C29.6018 25.4883 27.9728 25.8047 26.8947 26.8868C25.8127 27.9649 25.4963 29.5938 26.0939 31.0001L33.0509 48.2071V48.211C33.422 49.1641 34.1798 49.9219 35.1329 50.293L52.3399 57.25H52.3438C53.75 57.8476 55.379 57.5312 56.4571 56.4492C57.5391 55.3711 57.8556 53.7422 57.258 52.3359Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_42_15">
                <rect width="83.332" height="83.336" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="nav-item">
          <svg
            width="371"
            height="463"
            viewBox="0 0 371 463"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M306.871 60.7633C307.121 61.8033 307.91 65.2433 307.8 69.5533C306.43 121.063 179.73 162.073 175.02 153.293C172.86 149.263 194.081 130.413 306.871 60.7633Z"
              fill="black"
              stroke="black"
              strokeMiterlimit="10"
            />
            <path
              d="M124.13 119.513C136.48 107.163 155.18 91.5833 181.04 80.6533C243.01 54.4433 303.81 75.8633 307.55 64.4433C309.42 58.7333 300.21 49.8533 283.8 45.6533C270.48 42.2433 248.76 43.9433 234.37 45.9333C208.39 49.5133 203.27 53.7233 187.05 60.7633C180.71 63.5133 174.41 66.5033 167.16 70.9433C159.06 75.8933 141.66 87.6233 143.1 90.8333C144.21 93.3033 156.9 91.6333 206.48 74.1733"
              fill="black"
            />
            <path
              d="M124.13 119.513C136.48 107.163 155.18 91.5833 181.04 80.6533C243.01 54.4433 303.81 75.8633 307.55 64.4433C309.42 58.7333 300.21 49.8533 283.8 45.6533C270.48 42.2433 248.76 43.9433 234.37 45.9333C208.39 49.5133 203.27 53.7233 187.05 60.7633C180.71 63.5133 174.41 66.5033 167.16 70.9433C159.06 75.8933 141.66 87.6233 143.1 90.8333C144.21 93.3033 156.9 91.6333 206.48 74.1733"
              stroke="black"
              strokeMiterlimit="10"
            />
            <path
              d="M126.9 462.243H121.85C119.4 460.893 116.88 459.663 114.52 458.173C101.59 450.043 91.2601 438.983 81.3401 427.633C76.0301 421.563 71.6602 414.603 67.4202 407.713C63.1702 400.823 59.1002 393.733 55.8702 386.333C51.3402 375.973 47.2901 365.363 43.7101 354.633C38.4601 338.903 35.8201 322.413 34.7701 306.053C33.6701 288.833 32.5601 271.323 36.1501 254.123C38.5701 242.543 39.8101 230.603 46.2101 220.173C47.4401 218.173 46.8101 216.413 44.4501 215.473C42.5001 214.693 40.6302 213.713 38.6602 212.993C30.7902 210.093 23.8001 205.423 17.7601 199.953C9.95013 192.873 3.95017 184.143 2.05017 173.273C1.76017 171.633 1.13016 170.063 0.660156 168.453V161.723C0.920156 160.933 1.34015 160.153 1.40015 159.343C2.46015 144.613 9.72015 132.573 19.2802 122.233C28.3902 112.383 38.9801 104.093 51.6301 98.6533C64.6801 93.0333 77.8802 87.9333 91.9802 86.0133C102.08 84.6433 112.31 84.1033 122.49 83.5033C125.81 83.3033 128 82.4133 129.4 79.2233C130.4 76.9433 131.9 74.8233 133.49 72.8833C142.25 62.1533 150.79 51.3033 160.73 41.5233C173.38 29.0833 186.63 17.6633 202.25 9.09332C213.76 2.77332 225.38 -2.00668 239.05 0.843323C246.45 2.38332 255.13 8.55331 252.66 18.9833C252.53 19.5233 252.47 20.0933 252.4 20.6433C251.31 29.6233 248.32 32.7833 239.48 33.6533C227.95 34.7733 216.71 37.4033 206.05 41.6433C187.06 49.1933 168.37 57.4833 151.99 70.0833C148.22 72.9833 144.38 75.7833 140.75 78.8533C138.88 80.4333 137.55 82.5133 139.29 85.1133C140.93 87.5533 142.58 87.8533 145.85 86.2033C146.59 85.8333 147.27 85.3333 147.96 84.8533C154.85 80.0833 161.36 74.5833 168.72 70.7033C179.98 64.7733 191.89 60.0933 203.4 54.6233C212.98 50.0733 223.13 47.7433 233.48 46.0533C239 45.1533 244.58 44.6033 250.1 43.7033C256.83 42.6033 263.47 42.4933 270.06 44.5633C271.52 45.0233 273.08 45.5133 274.57 45.4433C281.47 45.1133 287.86 47.3433 294.22 49.4133C297.57 50.5033 301.17 52.1733 303.53 54.6433C309.65 61.0433 309.38 68.6433 306.3 76.5333C303.74 83.0933 298.86 88.0133 294.84 93.5433C292.88 96.2333 290.34 98.5033 287.97 100.863C286.19 102.643 283.8 103.973 282.49 106.023C278.52 112.183 272.28 115.703 266.51 119.393C256.5 125.793 245.85 131.203 235.39 136.873C232.2 138.603 228.82 140.083 225.38 141.243C213.99 145.103 202.55 148.843 191.09 152.473C187.91 153.483 185.79 155.403 184.2 158.213C180.82 164.203 176.66 169.443 171.49 174.173C157.27 187.193 140.43 194.983 122.27 200.473C120.67 200.953 119.08 201.573 117.63 202.393C114.86 203.943 115.2 206.783 115.69 209.123C116.16 211.373 118.33 212.413 120.65 212.083C125.36 211.403 130.17 210.983 134.7 209.653C150.55 204.983 164.92 197.043 179 188.623C193.72 179.813 209.35 174.403 226.63 174.333C230.56 174.323 234.51 174.043 238.41 174.403C243.39 174.863 248.47 175.323 253.23 176.713C260.46 178.823 267.56 181.463 274.51 184.393C278.46 186.053 281.92 188.823 285.7 190.933C294.98 196.123 303.22 202.483 309.32 211.353C309.87 212.153 310.59 212.853 311.32 213.503C318.65 219.953 323.17 228.553 327 237.083C330.79 245.533 332.41 255.013 334.53 264.143C335.22 267.103 336.33 268.243 339.2 268.983C348.55 271.413 356.84 275.233 362.81 283.743C369.78 293.683 372.74 303.793 369.38 315.703C366.32 326.573 359.73 334.343 350.1 339.913C342.84 344.123 334.88 345.473 326.73 345.993C323.77 346.183 321.94 346.733 320.74 349.903C317.89 357.473 314.55 364.863 311.33 372.293C304.2 388.763 295.85 404.513 285.78 419.443C277.42 431.833 267.88 443.083 257.24 453.463C253.45 457.153 248.84 459.553 243.77 460.953C238.47 462.423 233.59 460.173 231.15 455.303C228.99 450.993 227.63 446.523 227.8 441.573C228.01 435.543 227.77 429.503 227.89 423.473C228.26 404.163 223.9 385.803 217.44 367.733C214.49 359.463 208.22 353.823 203.15 347.213C202.27 346.063 200.74 345.213 199.33 344.683C195.4 343.193 191.48 341.333 187.39 340.733C179.43 339.563 171.56 340.803 164.96 345.643C155.01 352.943 149.17 363.453 145.16 374.733C142.61 381.903 141.51 389.633 140.19 397.193C137.41 413.053 138.43 429.033 139.4 444.963C139.77 450.993 137.59 455.903 132.26 458.963C130.44 460.013 128.67 461.133 126.88 462.223L126.9 462.243ZM164.27 121.083C173.44 120.363 181.85 117.583 190.04 114.443C201.68 109.983 212.85 104.393 223.03 97.1533C226.72 94.5333 229.98 91.0233 232.65 87.3433C236.14 82.5533 234.23 78.7333 228.31 78.5833C223.05 78.4533 217.67 78.8633 212.5 79.8533C207.31 80.8433 202.24 82.6333 197.24 84.4133C185.47 88.5733 174.05 93.5333 164.3 101.533C160.67 104.513 157.17 107.823 154.29 111.503C152.05 114.363 152.83 116.753 156.08 118.433C158.59 119.733 161.52 120.233 164.26 121.083H164.27ZM304.47 251.863L305.17 251.633C303.89 247.683 303.34 243.283 301.2 239.883C296.39 232.263 292.73 223.933 285.64 217.683C278.46 211.363 271.36 205.093 262.55 201.273C256.81 198.773 250.85 196.593 244.8 195.053C238.89 193.543 232.75 192.853 226.68 192.173C224.7 191.953 222.5 192.623 220.57 193.333C217.12 194.623 215.86 196.823 216.2 200.123C216.53 203.353 218.28 205.373 221.7 206.163C224.83 206.893 228.05 207.293 231.16 208.123C238.99 210.203 246.99 211.903 254.54 214.763C264.15 218.403 270.65 226.543 277.98 233.303C280.86 235.963 282.67 239.873 284.67 243.383C287.09 247.623 289.1 252.103 291.47 256.383C293.36 259.793 296.59 260.973 300.47 260.023C303.37 259.313 304.42 257.513 304.47 253.113C304.47 252.693 304.47 252.273 304.47 251.853V251.863ZM85.6301 141.053C85.9401 136.473 79.4402 129.223 71.9702 129.343C64.4502 129.463 59.5101 134.283 59.7101 141.343C59.9001 148.053 65.6302 153.393 72.4302 153.203C79.2502 153.013 85.6901 147.083 85.6301 141.043V141.053Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="nav-bottom">
        <div className="nav-item">
          <svg
            className="icon"
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.5 3C24.3 3 3 24.3 3 50.5C3 76.7 24.3 98 50.5 98C76.7 98 98 76.7 98 50.5C98 24.3 76.7 3 50.5 3ZM50.5 30.2C58.7 30.2 65.4 36.9 65.4 45.1C65.4 53.3 58.7 60 50.5 60C42.3 60 35.6 53.3 35.6 45.1C35.6 36.9 42.3 30.2 50.5 30.2ZM24.5 79.3V77.1C24.5 70.8 29.6 65.6 36 65.6H65C71.3 65.6 76.5 70.7 76.5 77.1V79.3C69.6 85.5 60.5 89.3 50.5 89.3C40.5 89.3 31.4 85.5 24.5 79.3Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="nav-item">
          <svg
            className="icon"
            width="102"
            height="91"
            viewBox="0 0 102 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M51.0003 26.6022C56.5079 26.6022 61.7891 28.5914 65.6832 32.1385C69.5812 35.6818 71.7671 40.4877 71.7671 45.5C71.7671 50.5122 69.5812 55.3177 65.6832 58.8614C61.7895 62.4085 56.5083 64.3977 51.0003 64.3977C45.4923 64.3977 40.2116 62.4085 36.3174 58.8614C32.4195 55.3181 30.2336 50.5122 30.2336 45.5C30.2336 40.4877 32.4195 35.6822 36.3174 32.1385C40.2111 28.5914 45.4923 26.6022 51.0003 26.6022ZM32.2658 76.721C33.6576 75.6487 35.5875 75.3689 37.2738 75.9984C38.9602 76.6239 40.1215 78.0536 40.288 79.7048L40.954 86.2785C41.1803 88.6291 43.2168 90.5056 45.7955 90.7348C49.3861 91.0884 53.0066 91.0884 56.5971 90.7348C59.1758 90.4862 61.1994 88.6019 61.4044 86.2475L62.0149 79.6622V79.6661C62.1643 78.0109 63.3128 76.5696 64.995 75.9286C66.6772 75.2875 68.6111 75.5556 70.0072 76.6201L75.5831 80.8355L75.5788 80.8394C77.5811 82.3468 80.4758 82.3468 82.4781 80.8394C85.2959 78.7725 87.8619 76.4414 90.1289 73.8772C91.7598 72.0395 91.7256 69.4054 90.0392 67.6104L85.36 62.5675H85.3643C84.186 61.301 83.8785 59.5448 84.5702 58.0103C85.2576 56.4756 86.8287 55.4188 88.6433 55.2674L95.8116 54.6419C98.3946 54.4359 100.457 52.5827 100.709 50.2361C101.097 46.9686 101.097 43.674 100.709 40.4067C100.435 38.06 98.3647 36.2185 95.7775 36.032L88.5408 35.4764H88.5451C86.7263 35.3405 85.1424 34.2954 84.438 32.7646C83.7335 31.2338 84.0281 29.4738 85.1979 28.2034L89.8302 23.1294L89.8345 23.1333C91.491 21.3112 91.491 18.677 89.8345 16.8549C87.5632 14.3101 84.9973 11.9907 82.1837 9.94322C80.1643 8.45908 77.2697 8.49021 75.2972 10.0209L69.7555 14.279C68.3637 15.3513 66.4339 15.6311 64.7476 15.0016C63.0611 14.3761 61.8998 12.9464 61.7334 11.2952L61.046 4.72146C60.8197 2.37093 58.7832 0.494417 56.2045 0.265162C52.6139 -0.0883875 48.9934 -0.0883875 45.4029 0.265162C42.8242 0.513812 40.8006 2.39808 40.5956 4.75249L39.9851 11.3378V11.3339C39.8357 12.9891 38.6872 14.4304 37.005 15.0714C35.3228 15.7125 33.3888 15.4444 31.9928 14.3799L26.4169 10.1645L26.4212 10.1606C24.4189 8.65319 21.5242 8.65319 19.5218 10.1606C16.7254 12.2275 14.1766 14.5625 11.9266 17.1228C10.2957 18.9605 10.3299 21.5946 12.012 23.3896L16.6912 28.4325C17.8695 29.699 18.177 31.4552 17.4853 32.9897C16.7979 34.5244 15.2268 35.5811 13.4123 35.7326L6.18842 36.3581C3.60541 36.564 1.54332 38.4173 1.29139 40.7639C0.902871 44.0314 0.902871 47.326 1.29139 50.5933C1.56463 52.94 3.63525 54.7815 6.22252 54.968L13.4592 55.5235H13.4549C15.2737 55.6595 16.8576 56.7046 17.562 58.2354C18.2665 59.7662 17.9719 61.5261 16.8021 62.7965L12.1698 67.8706L12.1655 67.8667C10.509 69.6888 10.509 72.323 12.1655 74.1451C14.4368 76.7093 16.9985 79.0443 19.8163 81.1073C21.8357 82.5914 24.7303 82.5603 26.7028 81.0257L32.2658 76.721Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
