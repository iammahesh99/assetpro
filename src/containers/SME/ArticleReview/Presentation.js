import { useSelector } from "react-redux";
import Article from "./Article";
import ArticleHeader from "./Articleheader";
import ArticleDetail from "./ArticleDetail/ArticleDetails";

const Presentation = () => {
  const completed = useSelector((state) => state.articleData.complete);
  return (
    <>
      {completed ? (
        <ArticleDetail />
      ) : (
        <>
          <ArticleHeader />
          <Article />
        </>
      )}
    </>
  );
};
export default Presentation;
