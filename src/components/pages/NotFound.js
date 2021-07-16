import React from "react";

const NotFound = () => {
    return (
        <div>
            <h1 className="display-4">
                404 <span className="text-danger">Page Not Found</span>
            </h1>
            <p className="lead">Sorry, that page does not exist</p>
        </div>
    );
};

export default NotFound;