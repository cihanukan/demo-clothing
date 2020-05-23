import React from "react";
import { withRouter } from 'react-router-dom';
import CollectionItem from "../collection-item/collection-item.component";
import {CollectionPreviewContainer,TitleContainer,PreviewContainer} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
<<<<<<< HEAD
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
=======
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
>>>>>>> feature/styledComponents
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
