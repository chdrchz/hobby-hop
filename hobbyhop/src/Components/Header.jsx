import React from "react";
import Button from "./Button";
import "../Styles/Header.css";

function Header({ onUserProfileToggle }) {
  return (
    <header className="Header">
      <div className="hobbyhoplogo1">
      <svg
              className="logo-svg"
              width="1639"
              height="463"
              viewBox="0 0 1639 463"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.46 321.933C15.23 321.933 12.51 320.683 10.31 318.193C8.11 315.703 7 312.623 7 308.953V139.973C7 136.143 8.1 133.023 10.31 130.613C12.51 128.203 15.23 126.993 18.46 126.993C21.69 126.993 24.59 128.203 26.72 130.613C28.85 133.023 29.91 136.143 29.91 139.973V211.603H132.15V139.973C132.15 136.143 133.25 133.023 135.46 130.613C137.66 128.203 140.38 126.993 143.61 126.993C146.84 126.993 149.7 128.203 151.76 130.613C153.82 133.023 154.84 136.143 154.84 139.973V308.953C154.84 312.613 153.81 315.693 151.76 318.193C149.7 320.693 146.98 321.933 143.61 321.933C140.24 321.933 137.66 320.683 135.46 318.193C133.26 315.703 132.15 312.623 132.15 308.953V234.573H29.92V308.953C29.92 312.613 28.85 315.693 26.73 318.193C24.6 320.693 21.84 321.933 18.47 321.933H18.46Z"
                fill="white"
                stroke="white"
                stroke-width="14"
                stroke-miterlimit="10"
              />
              <path
                d="M251.37 322.933C239.47 322.933 228.97 319.983 219.86 314.073C210.75 308.173 203.59 300.013 198.38 289.613C193.16 279.213 190.56 267.273 190.56 253.793C190.56 240.313 193.17 228.123 198.38 217.723C203.59 207.323 210.75 199.173 219.86 193.263C228.97 187.363 239.47 184.403 251.37 184.403C263.27 184.403 273.55 187.363 282.66 193.263C291.77 199.173 298.93 207.323 304.14 217.723C309.35 228.123 311.96 240.143 311.96 253.793C311.96 267.443 309.39 279.213 304.25 289.613C299.11 300.013 291.98 308.173 282.88 314.073C273.77 319.983 263.27 322.933 251.37 322.933ZM251.37 300.473C259.01 300.473 265.77 298.473 271.64 294.483C277.51 290.493 282.11 285.003 285.41 278.013C288.72 271.023 290.37 262.953 290.37 253.803C290.37 244.653 288.72 236.543 285.41 229.463C282.1 222.393 277.51 216.853 271.64 212.863C265.76 208.873 259 206.873 251.37 206.873C243.74 206.873 236.97 208.873 231.1 212.863C225.22 216.853 220.6 222.393 217.22 229.463C213.84 236.533 212.15 244.653 212.15 253.803C212.15 262.953 213.84 271.023 217.22 278.013C220.6 285.003 225.22 290.493 231.1 294.483C236.97 298.473 243.73 300.473 251.37 300.473Z"
                fill="white"
                stroke="white"
                stroke-width="14"
                stroke-miterlimit="10"
              />
              <path
                d="M406.05 322.933C394.59 322.933 384.31 319.903 375.2 313.823C366.09 307.753 358.89 299.473 353.61 288.993C348.32 278.513 345.6 266.693 345.46 253.553V139.733C345.46 135.903 346.52 132.833 348.65 130.493C350.78 128.163 353.46 127.003 356.69 127.003C359.92 127.003 362.78 128.173 364.84 130.493C366.9 132.823 367.92 135.903 367.92 139.733V207.123C373.06 200.133 379.27 194.603 386.54 190.523C393.81 186.443 401.78 184.403 410.45 184.403C421.17 184.403 430.79 187.443 439.32 193.513C447.84 199.593 454.56 207.823 459.48 218.223C464.4 228.623 466.86 240.403 466.86 253.543C466.86 266.683 464.18 278.503 458.82 288.983C453.46 299.463 446.22 307.743 437.12 313.813C428.01 319.893 417.65 322.923 406.05 322.923V322.933ZM406.05 300.473C413.54 300.473 420.22 298.433 426.1 294.353C431.97 290.273 436.64 284.663 440.09 277.503C443.54 270.353 445.27 262.363 445.27 253.543C445.27 244.723 443.54 236.573 440.09 229.583C436.64 222.593 431.97 217.063 426.1 212.983C420.22 208.903 413.54 206.873 406.05 206.873C398.56 206.873 392.06 208.913 386.11 212.983C380.16 217.063 375.5 222.593 372.12 229.583C368.74 236.573 367.05 244.563 367.05 253.543C367.05 262.523 368.74 270.353 372.12 277.503C375.5 284.663 380.16 290.273 386.11 294.353C392.06 298.433 398.7 300.473 406.05 300.473Z"
                fill="white"
                stroke="white"
                stroke-width="14"
                stroke-miterlimit="10"
              />
              <path
                d="M560.96 322.933C549.5 322.933 539.22 319.903 530.11 313.823C521 307.753 513.8 299.473 508.52 288.993C503.23 278.513 500.51 266.693 500.37 253.553V139.733C500.37 135.903 501.43 132.833 503.56 130.493C505.69 128.163 508.37 127.003 511.6 127.003C514.83 127.003 517.69 128.173 519.75 130.493C521.81 132.823 522.83 135.903 522.83 139.733V207.123C527.97 200.133 534.18 194.603 541.45 190.523C548.72 186.443 556.69 184.403 565.36 184.403C576.08 184.403 585.7 187.443 594.23 193.513C602.75 199.593 609.47 207.823 614.39 218.223C619.31 228.623 621.77 240.403 621.77 253.543C621.77 266.683 619.09 278.503 613.73 288.983C608.37 299.463 601.13 307.743 592.03 313.813C582.92 319.893 572.56 322.923 560.96 322.923V322.933ZM560.96 300.473C568.45 300.473 575.13 298.433 581.01 294.353C586.88 290.273 591.55 284.663 595 277.503C598.45 270.353 600.18 262.363 600.18 253.543C600.18 244.723 598.45 236.573 595 229.583C591.55 222.593 586.88 217.063 581.01 212.983C575.13 208.903 568.45 206.873 560.96 206.873C553.47 206.873 546.97 208.913 541.02 212.983C535.07 217.063 530.41 222.593 527.03 229.583C523.65 236.573 521.96 244.563 521.96 253.543C521.96 262.523 523.65 270.353 527.03 277.503C530.41 284.663 535.07 290.273 541.02 294.353C546.97 298.433 553.61 300.473 560.96 300.473Z"
                fill="white"
                stroke="white"
                stroke-width="14"
                stroke-miterlimit="10"
              />
              <path
                d="M702.86 316.443C700.07 317.773 697.46 317.903 695.04 316.813C692.62 315.733 690.67 313.613 689.2 310.453L638.74 201.873C637.27 198.713 637.09 195.673 638.19 192.763C639.29 189.853 641.24 187.733 644.03 186.403C646.82 185.073 649.46 184.953 651.96 186.033C654.46 187.113 656.37 189.243 657.69 192.393L705.95 300.973C707.42 304.133 707.97 307.173 707.6 310.083C707.23 312.993 705.65 315.123 702.86 316.453V316.443ZM676.86 381.843C675.39 381.843 673.63 381.343 671.57 380.343C665.1 377.013 663.34 371.773 666.28 364.623L733.49 192.653C736.43 185.663 741.05 183.663 747.37 186.663C753.98 189.823 755.82 195.063 752.88 202.383L685.45 374.103C683.69 379.263 680.82 381.843 676.86 381.843Z"
                fill="white"
                stroke="white"
                stroke-width="14"
                stroke-miterlimit="10"
              />
              <path
                d="M1183 321.933C1179.77 321.933 1177.05 320.683 1174.85 318.193C1172.65 315.693 1171.55 312.623 1171.55 308.953V139.973C1171.55 136.143 1172.65 133.023 1174.85 130.613C1177.05 128.203 1179.77 126.993 1183 126.993C1186.23 126.993 1189.13 128.203 1191.26 130.613C1193.39 133.023 1194.46 136.143 1194.46 139.973V211.603H1296.7V139.973C1296.7 136.143 1297.8 133.023 1300.01 130.613C1302.21 128.203 1304.93 126.993 1308.16 126.993C1311.39 126.993 1314.25 128.203 1316.31 130.613C1318.37 133.023 1319.39 136.143 1319.39 139.973V308.953C1319.39 312.613 1318.36 315.693 1316.31 318.193C1314.25 320.693 1311.53 321.933 1308.16 321.933C1304.79 321.933 1302.21 320.683 1300.01 318.193C1297.81 315.703 1296.7 312.623 1296.7 308.953V234.573H1194.46V308.953C1194.46 312.613 1193.39 315.693 1191.26 318.193C1189.13 320.693 1186.38 321.933 1183 321.933Z"
                fill="white"
                stroke="white"
                stroke-width="14"
                stroke-miterlimit="10"
              />
              <path
                d="M1415.91 322.933C1404.01 322.933 1393.51 319.983 1384.4 314.073C1375.29 308.173 1368.13 300.013 1362.92 289.613C1357.7 279.213 1355.1 267.273 1355.1 253.793C1355.1 240.313 1357.71 228.123 1362.92 217.723C1368.13 207.323 1375.29 199.173 1384.4 193.263C1393.51 187.363 1404.01 184.403 1415.91 184.403C1427.81 184.403 1438.09 187.363 1447.2 193.263C1456.31 199.173 1463.47 207.323 1468.68 217.723C1473.89 228.123 1476.5 240.143 1476.5 253.793C1476.5 267.443 1473.93 279.213 1468.79 289.613C1463.65 300.013 1456.52 308.173 1447.42 314.073C1438.31 319.983 1427.81 322.933 1415.91 322.933ZM1415.91 300.473C1423.55 300.473 1430.3 298.473 1436.18 294.483C1442.05 290.493 1446.65 285.003 1449.95 278.013C1453.25 271.023 1454.91 262.953 1454.91 253.803C1454.91 244.653 1453.26 236.543 1449.95 229.463C1446.64 222.393 1442.05 216.853 1436.18 212.863C1430.3 208.873 1423.54 206.873 1415.91 206.873C1408.28 206.873 1401.51 208.873 1395.64 212.863C1389.76 216.853 1385.14 222.393 1381.76 229.463C1378.38 236.533 1376.69 244.653 1376.69 253.803C1376.69 262.953 1378.38 271.023 1381.76 278.013C1385.14 285.003 1389.76 290.493 1395.64 294.483C1401.51 298.473 1408.27 300.473 1415.91 300.473Z"
                fill="white"
                stroke="white"
                stroke-width="14"
                stroke-miterlimit="10"
              />
              <path
                d="M1521.23 380.333C1518 380.333 1515.31 379.123 1513.19 376.713C1511.06 374.303 1509.99 371.263 1509.99 367.603V253.783C1510.14 240.643 1512.86 228.823 1518.14 218.343C1523.43 207.863 1530.62 199.583 1539.73 193.513C1548.84 187.443 1559.12 184.403 1570.58 184.403C1582.04 184.403 1592.54 187.443 1601.65 193.513C1610.76 199.593 1617.99 207.863 1623.35 218.343C1628.71 228.823 1631.39 240.643 1631.39 253.783C1631.39 266.923 1628.93 278.703 1624.01 289.103C1619.09 299.503 1612.37 307.743 1603.85 313.813C1595.33 319.893 1585.71 322.923 1574.98 322.923C1566.31 322.923 1558.34 320.883 1551.07 316.803C1543.8 312.723 1537.59 307.193 1532.45 300.203V367.593C1532.45 371.253 1531.42 374.293 1529.37 376.703C1527.31 379.113 1524.59 380.323 1521.22 380.323L1521.23 380.333ZM1570.59 300.463C1578.08 300.463 1584.76 298.423 1590.64 294.343C1596.51 290.263 1601.18 284.693 1604.63 277.623C1608.08 270.553 1609.81 262.603 1609.81 253.783C1609.81 244.963 1608.08 236.773 1604.63 229.693C1601.18 222.623 1596.51 217.053 1590.64 212.973C1584.76 208.893 1578.08 206.863 1570.59 206.863C1563.1 206.863 1556.6 208.903 1550.65 212.973C1544.7 217.053 1540.03 222.623 1536.66 229.693C1533.28 236.773 1531.59 244.793 1531.59 253.783C1531.59 262.773 1533.28 270.553 1536.66 277.623C1540.04 284.693 1544.7 290.273 1550.65 294.343C1556.6 298.423 1563.24 300.463 1570.59 300.463Z"
                fill="white"
                stroke="white"
                stroke-width="14"
                stroke-miterlimit="10"
              />
              <path
                d="M1068.87 60.7633C1069.12 61.8033 1069.91 65.2433 1069.8 69.5533C1068.43 121.063 941.73 162.073 937.02 153.293C934.86 149.263 956.08 130.413 1068.87 60.7633Z"
                fill="white"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M886.13 119.513C898.48 107.163 917.18 91.5833 943.04 80.6533C1005.01 54.4433 1065.81 75.8633 1069.55 64.4433C1071.42 58.7333 1062.21 49.8533 1045.8 45.6533C1032.48 42.2433 1010.76 43.9433 996.37 45.9333C970.39 49.5133 965.27 53.7233 949.05 60.7633C942.71 63.5133 936.41 66.5033 929.16 70.9433C921.06 75.8933 903.66 87.6233 905.1 90.8333C906.21 93.3033 918.9 91.6333 968.48 74.1733"
                fill="white"
              />
              <path
                d="M886.13 119.513C898.48 107.163 917.18 91.5833 943.04 80.6533C1005.01 54.4433 1065.81 75.8633 1069.55 64.4433C1071.42 58.7333 1062.21 49.8533 1045.8 45.6533C1032.48 42.2433 1010.76 43.9433 996.37 45.9333C970.39 49.5133 965.27 53.7233 949.05 60.7633C942.71 63.5133 936.41 66.5033 929.16 70.9433C921.06 75.8933 903.66 87.6233 905.1 90.8333C906.21 93.3033 918.9 91.6333 968.48 74.1733"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M888.9 462.243H883.85C881.4 460.893 878.88 459.663 876.52 458.173C863.59 450.043 853.26 438.983 843.34 427.633C838.03 421.563 833.66 414.603 829.42 407.713C825.17 400.823 821.1 393.733 817.87 386.333C813.34 375.973 809.29 365.363 805.71 354.633C800.46 338.903 797.82 322.413 796.77 306.053C795.67 288.833 794.56 271.323 798.15 254.123C800.57 242.543 801.81 230.603 808.21 220.173C809.44 218.173 808.81 216.413 806.45 215.473C804.5 214.693 802.63 213.713 800.66 212.993C792.79 210.093 785.8 205.423 779.76 199.953C771.95 192.873 765.95 184.143 764.05 173.273C763.76 171.633 763.13 170.063 762.66 168.453V161.723C762.92 160.933 763.34 160.153 763.4 159.343C764.46 144.613 771.72 132.573 781.28 122.233C790.39 112.383 800.98 104.093 813.63 98.6533C826.68 93.0333 839.88 87.9333 853.98 86.0133C864.08 84.6433 874.31 84.1033 884.49 83.5033C887.81 83.3033 890 82.4133 891.4 79.2233C892.4 76.9433 893.9 74.8233 895.49 72.8833C904.25 62.1533 912.79 51.3033 922.73 41.5233C935.38 29.0833 948.63 17.6633 964.25 9.09332C975.76 2.77332 987.38 -2.00668 1001.05 0.843323C1008.45 2.38332 1017.13 8.55331 1014.66 18.9833C1014.53 19.5233 1014.47 20.0933 1014.4 20.6433C1013.31 29.6233 1010.32 32.7833 1001.48 33.6533C989.95 34.7733 978.71 37.4033 968.05 41.6433C949.06 49.1933 930.37 57.4833 913.99 70.0833C910.22 72.9833 906.38 75.7833 902.75 78.8533C900.88 80.4333 899.55 82.5133 901.29 85.1133C902.93 87.5533 904.58 87.8533 907.85 86.2033C908.59 85.8333 909.27 85.3333 909.96 84.8533C916.85 80.0833 923.36 74.5833 930.72 70.7033C941.98 64.7733 953.89 60.0933 965.4 54.6233C974.98 50.0733 985.13 47.7433 995.48 46.0533C1001 45.1533 1006.58 44.6033 1012.1 43.7033C1018.83 42.6033 1025.47 42.4933 1032.06 44.5633C1033.52 45.0233 1035.08 45.5133 1036.57 45.4433C1043.47 45.1133 1049.86 47.3433 1056.22 49.4133C1059.57 50.5033 1063.17 52.1733 1065.53 54.6433C1071.65 61.0433 1071.38 68.6433 1068.3 76.5333C1065.74 83.0933 1060.86 88.0133 1056.84 93.5433C1054.88 96.2333 1052.34 98.5033 1049.97 100.863C1048.19 102.643 1045.8 103.973 1044.49 106.023C1040.52 112.183 1034.28 115.703 1028.51 119.393C1018.5 125.793 1007.85 131.203 997.39 136.873C994.2 138.603 990.82 140.083 987.38 141.243C975.99 145.103 964.55 148.843 953.09 152.473C949.91 153.483 947.79 155.403 946.2 158.213C942.82 164.203 938.66 169.443 933.49 174.173C919.27 187.193 902.43 194.983 884.27 200.473C882.67 200.953 881.08 201.573 879.63 202.393C876.86 203.943 877.2 206.783 877.69 209.123C878.16 211.373 880.33 212.413 882.65 212.083C887.36 211.403 892.17 210.983 896.7 209.653C912.55 204.983 926.92 197.043 941 188.623C955.72 179.813 971.35 174.403 988.63 174.333C992.56 174.323 996.51 174.043 1000.41 174.403C1005.39 174.863 1010.47 175.323 1015.23 176.713C1022.46 178.823 1029.56 181.463 1036.51 184.393C1040.46 186.053 1043.92 188.823 1047.7 190.933C1056.98 196.123 1065.22 202.483 1071.32 211.353C1071.87 212.153 1072.59 212.853 1073.32 213.503C1080.65 219.953 1085.17 228.553 1089 237.083C1092.79 245.533 1094.41 255.013 1096.53 264.143C1097.22 267.103 1098.33 268.243 1101.2 268.983C1110.55 271.413 1118.84 275.233 1124.81 283.743C1131.78 293.683 1134.74 303.793 1131.38 315.703C1128.32 326.573 1121.73 334.343 1112.1 339.913C1104.84 344.123 1096.88 345.473 1088.73 345.993C1085.77 346.183 1083.94 346.733 1082.74 349.903C1079.89 357.473 1076.55 364.863 1073.33 372.293C1066.2 388.763 1057.85 404.513 1047.78 419.443C1039.42 431.833 1029.88 443.083 1019.24 453.463C1015.45 457.153 1010.84 459.553 1005.77 460.953C1000.47 462.423 995.59 460.173 993.15 455.303C990.99 450.993 989.63 446.523 989.8 441.573C990.01 435.543 989.77 429.503 989.89 423.473C990.26 404.163 985.9 385.803 979.44 367.733C976.49 359.463 970.22 353.823 965.15 347.213C964.27 346.063 962.74 345.213 961.33 344.683C957.4 343.193 953.48 341.333 949.39 340.733C941.43 339.563 933.56 340.803 926.96 345.643C917.01 352.943 911.17 363.453 907.16 374.733C904.61 381.903 903.51 389.633 902.19 397.193C899.41 413.053 900.43 429.033 901.4 444.963C901.77 450.993 899.59 455.903 894.26 458.963C892.44 460.013 890.67 461.133 888.88 462.223L888.9 462.243ZM926.27 121.083C935.44 120.363 943.85 117.583 952.04 114.443C963.68 109.983 974.85 104.393 985.03 97.1533C988.72 94.5333 991.98 91.0233 994.65 87.3433C998.14 82.5533 996.23 78.7333 990.31 78.5833C985.05 78.4533 979.67 78.8633 974.5 79.8533C969.31 80.8433 964.24 82.6333 959.24 84.4133C947.47 88.5733 936.05 93.5333 926.3 101.533C922.67 104.513 919.17 107.823 916.29 111.503C914.05 114.363 914.83 116.753 918.08 118.433C920.59 119.733 923.52 120.233 926.26 121.083H926.27ZM1066.47 251.863L1067.17 251.633C1065.89 247.683 1065.34 243.283 1063.2 239.883C1058.39 232.263 1054.73 223.933 1047.64 217.683C1040.46 211.363 1033.36 205.093 1024.55 201.273C1018.81 198.773 1012.85 196.593 1006.8 195.053C1000.89 193.543 994.75 192.853 988.68 192.173C986.7 191.953 984.5 192.623 982.57 193.333C979.12 194.623 977.86 196.823 978.2 200.123C978.53 203.353 980.28 205.373 983.7 206.163C986.83 206.893 990.05 207.293 993.16 208.123C1000.99 210.203 1008.99 211.903 1016.54 214.763C1026.15 218.403 1032.65 226.543 1039.98 233.303C1042.86 235.963 1044.67 239.873 1046.67 243.383C1049.09 247.623 1051.1 252.103 1053.47 256.383C1055.36 259.793 1058.59 260.973 1062.47 260.023C1065.37 259.313 1066.42 257.513 1066.47 253.113C1066.47 252.693 1066.47 252.273 1066.47 251.853V251.863ZM847.63 141.053C847.94 136.473 841.44 129.223 833.97 129.343C826.45 129.463 821.51 134.283 821.71 141.343C821.9 148.053 827.63 153.393 834.43 153.203C841.25 153.013 847.69 147.083 847.63 141.043V141.053Z"
                fill="white"
              />
            </svg>
      </div>
      <nav onClick={onUserProfileToggle}>
       <Button color="#b8cc76">sign in</Button>
       <Button color="#b8cc76">create account</Button>
      </nav>
    </header>
  );
}

export default Header;
