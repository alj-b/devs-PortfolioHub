import "./DeveloperDetail.css";

// The developer detail page should automatically GET /api/user/me/ and display its data as a developer profile component.

export default function DeveloperDetail({developer, isUser}) {
    if (isUser) {
        return (
            <div>
                <p className="description">Welcome to your profile</p>
            </div>
        );
    }
    else {
        return (
            <div>
                <p className="description">Welcome to {developer.name}'s profile</p>
            </div>
        );
    }
}