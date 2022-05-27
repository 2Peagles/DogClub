import React from React;

const Navigation =(onRouteChange, isSignedIn) => {
    if (isSignedIn){
     return (
        <nav>
            <p>Sign Out</p>
        </nav>
        );
    }
}
export default Navigation;