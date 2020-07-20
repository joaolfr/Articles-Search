import React from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import Loader from "react-loader-spinner";

import useHome from "./hooks";
import { Button, ArticleCard, TextInput } from "../../components";

import {
  Wrapper,
  ArticlesWrapper,
  HeaderWrapper,
  PaginationWrapper,
  SmallText,
} from "./styles";

const Home = () => {
  const {
    loadArticles,
    searchKeyword,
    setSearchKeyword,
    articles,
    pagesNumber,
    actualPage,
    setActualPage,
    numberOfArticles,
    loading,
    clearKeyword,
    filter,
    setFilter,
  } = useHome();

  const handlePageChange = (pageNumber) => {
    setActualPage(pageNumber);
  };
  return (
    <Wrapper>
      <HeaderWrapper>
        <TextInput
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          clearKeyword={clearKeyword}
          filter={filter}
          setFilter={setFilter}
        />

        <Button search={loadArticles} />
      </HeaderWrapper>

      {numberOfArticles > 0 && (
        <SmallText>
          Foram encontrados <strong>{numberOfArticles}</strong> resultados para
          sua pesquisa
        </SmallText>
      )}

      <PaginationWrapper>
        <Pagination
          activePage={actualPage}
          itemsCountPerPage={10}
          totalItemsCount={pagesNumber}
          pageRangeDisplayed={5}
          onChange={handlePageChange.bind(this)}
        />
      </PaginationWrapper>
      {loading ? (
        <Loader
          type="ThreeDots"
          color="#1A2361"
          height={50}
          width={50}
          //3 secs
        />
      ) : !loading && numberOfArticles === 0 ? (
        <SmallText>
          Não foram encontrados artigos referentes a sua busca :/
        </SmallText>
      ) : (
        <>
          <ArticlesWrapper>
            {articles.map((article) => (
              <Link
                to={{
                  pathname: "/detail",
                  id: article.id,
                  title: article.title,
                }}
                key={article.id}
              >
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  description={article.headline}
                  picture={
                    article.featured_media !== null
                      ? article.featured_media.thumbnail
                      : null
                  }
                />
              </Link>
            ))}
          </ArticlesWrapper>
        </>
      )}
    </Wrapper>
  );
};
export default Home;
