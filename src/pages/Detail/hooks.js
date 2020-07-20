import { useState, useCallback, useEffect } from "react";
import { useLazyFetch } from "../../services/hooks";

export default () => {
  const [ide, setIde] = useState(0);
  const [detail, setDetail] = useState();
  const [publishedData, setPublishedDate] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [author, setAuthor] = useState("");
  const [authorPicture, setAuthorPicture] = useState("");
  const [authorDescription, setAuthorDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [bibliography, setBibliography] = useState();
  const [loadDetail, { data, loading, error }] = useLazyFetch({
    url: `v1/posts/${ide}`,
  });

  const load = useCallback((id) => {
    setIde(id);
  }, []);

  useEffect(() => {
    if (ide !== 0) {
      loadDetail();
    }
  }, [ide]);

  useEffect(() => {
    if (publishedData !== "") {
      setDay(publishedData.slice(8, 10));
      setMonth(publishedData.slice(5, 7));
      setYear(publishedData.slice(0, 4));
    }
  }, [publishedData]);

  useEffect(() => {
    if (data) {
      setDetail(data.content);
      setPublishedDate(data.published);
      setAuthor(data.author.name);
      setAuthorPicture(data.author.picture);
      setAuthorDescription(data.author.description);
      setCategories(data.categories);
      setTags(data.tags);
      setBibliography(data.bibliography);
    }
  }, [data]);

  return {
    loadDetail,
    load,
    detail,
    loading,
    day,
    month,
    year,
    author,
    authorPicture,
    authorDescription,
    categories,
    tags,
    bibliography,
  };
};
