import git_logo from "../assets/git-logo.png";

export default function Footer() {
    return (
        <div className="footer">
            <a className="link">
                <img src={git_logo} alt="github logo"/>
                <p className="credentials">Developed by IvBican182</p>
            </a>
            <p className="copyright">© Copyright 2024 Ivan Bićanić. All rights reserved.</p>
        </div>
    )
}