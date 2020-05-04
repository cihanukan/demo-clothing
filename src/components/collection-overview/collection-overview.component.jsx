import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {CollectionOverviewContainer} from "./collection-overview.styles";

const CollectionsOverview = ({ collections }) => {
  console.log(collections)
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
  });
  

export default connect(mapStateToProps)(CollectionsOverview);
