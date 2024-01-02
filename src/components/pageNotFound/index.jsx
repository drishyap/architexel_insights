import errorImage from "../../assets/page_not_found/error_page_image.JPG";

const PageNotFound = () => {
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
         }}
      >
         <div style={{ width: "400px", height: "400px" }}>
            <img
               style={{ width: "100%", height: "100%" }}
               src={errorImage}
               alt={"error"}
            />
         </div>
      </div>
   );
};

export default PageNotFound;
