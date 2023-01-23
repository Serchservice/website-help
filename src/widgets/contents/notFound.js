import '../css/notFound.css';

export const DocumentNotFound = () => {
    return(
        <div className="notFound">
            <h2>Oops! We are really sorry about what just happened right now.</h2>
            <p>We can't seem to find the document you are looking for. We might have moved it to another category,
                but still haven't made the switch, or we might have removed it entirely. Whatever be the case, we sincerely apologize
                for the inconvenience it has caused you, and we plead that you re-enter the document link again or you might as well,
                use the search box and look the issue up.

                if it persists, please do inform us of the error, as well as the issue you are having that led to the lookup.

                Our customer support will help you out.
            </p>
        </div>
    );
}

export const SearchResultNotFound = () => {
    return(
        <div className="notFound"></div>
    );
}