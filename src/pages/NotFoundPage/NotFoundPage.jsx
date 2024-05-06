import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss"; 

function NotFoundPage() {
    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default NotFoundPage;