import { useCallback, useEffect, useState } from "react";
import { useLazyFetch } from "../../services/hooks";
import { useArticleStore } from "../../services/stores";

export default () => {
  const {
    searchKeyword,
    setSearchKeyword,
    articles,
    setArticles,
    numberOfArticles,
    setNumberOfArticles,
    pagesNumber,
    setPagesNumber,
    actualPage,
    setActualPage,
    filter,
    setFilter,
  } = useArticleStore();

  const [searchUrl, setSearchUrl] = useState(
    `v2/posts?search=${searchKeyword}&page=${actualPage}`
  );

  useEffect(() => {
    if (filter === "relevance") {
      setSearchUrl(
        `v2/posts?search=${searchKeyword}&page=${actualPage}&orderby=relevance`
      );
    } else {
      setSearchUrl(`v2/posts?search=${searchKeyword}&page=${actualPage}`);
    }
  }, [filter, searchKeyword]);

  const [loadArticles, { data, loading, error }] = useLazyFetch({
    url: searchUrl,
  });

  useEffect(() => {
    if (data) {
      setArticles(data.data);
      setPagesNumber(data.pages);
      setNumberOfArticles(data.size);
    }
  }, [data]);

  useEffect(() => {
    loadArticles();
  }, [actualPage]);

  const clearKeyword = useCallback(() => {
    setSearchKeyword("");
  }, []);

  return {
    loadArticles,
    data,
    searchKeyword,
    setSearchKeyword,
    articles,
    pagesNumber,
    actualPage,
    setActualPage,
    numberOfArticles,
    setNumberOfArticles,
    loading,
    clearKeyword,
    filter,
    setFilter,
  };
};
