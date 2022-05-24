import React from 'react';
import './UserSuggestion.css';

const UserSuggestion = () => {
    return (
        <div className="userSuggestArea">
            <div className="suggestionTop d-flex align-items-center">
                <p>Suggestion For You</p>
                <a className="userLists" href="#">See All</a>
            </div>
            <div className="singleSuggestion d-flex align-items-center">
                <div className="singleSuggestionImage">
                    <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="user"/>
                </div>
                <div className="singleSuggestionInfo">
                    <a className="singleSuggestionName" href="#">i_am_rafikadir</a>
                    <p className="singleSuggestionTitle">Web Developer & Marketer</p>
                </div>  
            </div>

            <div className="singleSuggestion d-flex align-items-center">
                <div className="singleSuggestionImage">
                    <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="user"/>
                </div>
                <div className="singleSuggestionInfo">
                    <a className="singleSuggestionName" href="#">thisisrafi</a>
                    <p className="singleSuggestionTitle">Content Creator</p>
                </div>  
            </div>
        </div>
    );
};

export default UserSuggestion;