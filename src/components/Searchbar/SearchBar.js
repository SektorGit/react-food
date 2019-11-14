import React from "react";
import "./SearchBar.css";

const sortByOptions = {
    "Best Match": "best_match", //Values useing Yelp API "Sort_by https://www.yelp.com/developers/documentation/v3/business_search"
    "Highest Rated": "rating", //Values useing Yelp API "Sort_by https://www.yelp.com/developers/documentation/v3/business_search"
    "Most Reviewed": "review_count" //Values useing Yelp API "Sort_by https://www.yelp.com/developers/documentation/v3/business_search"
};

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li> 
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                      {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;
