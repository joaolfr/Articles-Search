import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Markup } from "interweave";
import Loader from "react-loader-spinner";
import { ArticleInfo } from "../../components";
import useDetail from "./hooks";
import {
  Wrapper,
  TitleWrapper,
  BackIcon,
  Empty,
  Title,
  Separator,
  SmallText,
} from "./styles";

const Detail = (props) => {
  const {
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
  } = useDetail();

  useEffect(() => {
    load(props.location.id);
  }, []);

  return (
    <Wrapper>
      <TitleWrapper>
        <Link to="/">
          <BackIcon />
        </Link>
        <Title>{props.location.title}</Title>
        <Empty />
      </TitleWrapper>
      {loading ? (
        <Loader
          type="ThreeDots"
          color="#1A2361"
          height={50}
          width={50}
          style={{ margin: "0 auto" }}
          //3 secs
        />
      ) : (
        <>
          <Markup content={detail} />
          <SmallText>
            Publicado em {day}/{month}/{year} escrito por <i>{author}</i>
          </SmallText>

          <Separator />

          <ArticleInfo
            picture={authorPicture}
            description={authorDescription}
            categories={categories}
            tags={tags}
            bibliography={bibliography}
          />
        </>
      )}
    </Wrapper>
  );
};
export default Detail;
