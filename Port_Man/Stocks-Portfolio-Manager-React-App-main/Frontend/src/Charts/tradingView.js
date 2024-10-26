// import React from "react";
// // import TradingViewWidget, { Themes } from "react-tradingview-widget";
// /* import TechnicalAnalysis, {
//   THEMES,
//   INTERVALS
// } from "react-tradingview-technical-analysis"; */
// import {
//   MarketOverview,
//   TechnicalAnalysis,
// } from "react-ts-tradingview-widgets";

// export default function TradingWidget(props) {
//   const symbol = "NASDAQ:".concat(props.symbol);
//   return (
//     <div className="App">
//       <div style={{ height: 500 }}>
//         <TradingViewWidget
//           symbol={symbol}
//           theme={Themes.DARK}
//           locale="en"
//           autosize
//         />
//       </div>

//       {/* <TechnicalAnalysis symbol={symbol} dark locale="en" />

//       <MarketOverview locale="en" /> */}
//     </div>
//   );
// }

import React from "react";
// Remove this line: import TradingViewWidget, { Themes } from "react-tradingview-widget";
import {
  MarketOverview,
  TechnicalAnalysis,
  AdvancedRealTimeChart // Import the chart you need from react-ts-tradingview-widgets
} from "react-ts-tradingview-widgets";

export default function TradingWidget(props) {
  const symbol = "NASDAQ:".concat(props.symbol);
  return (
    <div className="App">
      <div style={{ height: 500 }}>
        <AdvancedRealTimeChart
          symbol={symbol}
          theme="dark"
          locale="en"
          autosize
        />
      </div>

      {/* Uncomment if you need these */}
      {/* <TechnicalAnalysis symbol={symbol} dark locale="en" /> */}
      {/* <MarketOverview locale="en" /> */}
    </div>
  );
}

