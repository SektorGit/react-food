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
}


