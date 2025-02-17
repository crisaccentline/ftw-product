import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

import { List } from '../../components';

import css from './ListingPage.module.css';

const SectionReviews = props => {
  const { reviews, fetchReviewsError } = props;


  const reviewsError = (
    <h2 className={css.errorText}>
      <FormattedMessage id="ListingPage.reviewsError" />
    </h2>
  );

  return (
    <div className={css.sectionReviews}>
      <h2 className={css.reviewsTitle}>
        <FormattedMessage id="ListingPage.reviewsTitle" values={{ count: reviews.length }} />
      </h2>
      {fetchReviewsError ? reviewsError : null}
      <h2 className={css.reviewsTitle}>
        <FormattedMessage id="ListingPage.suggestedProducts"/>
      </h2>
      <List />
    </div>
  );
};

export default SectionReviews;
