import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStart } from '../../redux/shop/shop.action';
import {
	selectIsCollectionFetching,
	selectIsCollectionLoaded
} from '../../redux/shop/shop.selectors';

import CollectionPage from '../collections/collections.component';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
	fetchCollectionsStart,
	match,
	isCollectionFetching,
	isCollectionLoaded
}) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				render={props => (
					<CollectionsOverviewWithSpinner
						isLoading={isCollectionFetching}
						{...props}
					/>
				)}
			/>
			<Route
				path={`${match.path}/:categoryId`}
				render={props => (
					<CollectionPageWithSpinner
						isLoading={!isCollectionLoaded}
						{...props}
					/>
				)}
			/>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	isCollectionLoaded: selectIsCollectionLoaded
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShopPage);
