// import React from "react";

// import {ColorRing} from "react-loader-spinner"
// const PageLoader = () => {
//   return (
//     <div className="container">
//       <div className="row ">
//         <div className="col-12 d-flex align-items-center justify-content-center ">
//           <div className="col-6 d-flex justify-content-center mt-5">
//             <ColorRing
//               visible={true}
//               height="80"
//               width="80"
//               ariaLabel="blocks-loading"
//               wrapperStyle={{}}
//               wrapperClass="blocks-wrapper"
//               colors={['#5516A4', '#5516a4e0', '#5516a4db', '#5516a4db','#5516a4c9', '#421F70']}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageLoader;
import React from "react";
// import loaderImg from "assets/icons/Header/loaderImg.svg";
import loaderImg from "assets/icons/Header/Loading.png";

import "./spinner.scss"; // Import your CSS file for styling

const PageLoader = () => {
  return (
    <div className="container">
      <div className="loader-wrapper">
        <div className="loader spin">
          <div className="spin__blocker"></div>
          <div className="spin__bottom-left"></div>
          <div className="spin__bottom-right"></div>
          <div className="spin__top-left"></div>
        </div>
        {/* <img className="rotating-image" src={loaderImg} alt="Loader" /> */}
      </div>
    </div>
  );
};

export default PageLoader;
