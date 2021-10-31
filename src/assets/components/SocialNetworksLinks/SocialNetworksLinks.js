import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"


const SocialNetworksLinks = () => {

    return <>
        <a className="link" href="http://twitter.com" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="link" href="http://facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="link" href="http://instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="link" href="http://tiktok.com" target="_blank">
            <FontAwesomeIcon icon={faTiktok} />
        </a>
    </>
}

export default SocialNetworksLinks;
