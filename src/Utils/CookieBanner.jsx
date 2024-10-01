import React, { useState, useEffect } from 'react';
import CookieConsent, { Cookies } from "react-cookie-consent";
import './CookieBanner.css'; // Import CSS for transitions and styles

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger the banner to become visible after component mount (to apply transition)
        setTimeout(() => {
            setIsVisible(true);
        }, 1000); // Delay before showing the banner
    }, []);

    const handleAcceptAll = () => {
        Cookies.set('userConsent', 'accepted', { path: '/' });
        console.log("Cookies accepted!");
        setIsVisible(false); // Hide the banner
    };

    const handleRejectAll = () => {
        Cookies.set('userConsent', 'rejected', { path: '/' });
        console.log("Cookies rejected!");
        setIsVisible(false); // Hide the banner
    };

    return (
        <div className={`cookie-banner ${isVisible ? 'visible' : 'notvisible'}`}>
            <CookieConsent
                location="bottom"
                buttonText="Accept All"
                cookieName="userConsent"
                buttonStyle={{
                    background: "#30D14E", 
                    color: "#fff", 
                    padding: "10px 20px", 
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    borderRadius: "0px",
                    margin:'auto 5px',
                }}
                declineButtonText="Reject All"
                declineButtonStyle={{
                    background: "#dc3545",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    borderRadius: "0px",
                    margin:'auto 5px'
                }}
                style={{
                    background: "#000000eb", 
                    color: "#fff", 
                    padding: "20px", 
                    fontSize: "14px",
                    display:'flex',
                    alignItems:'center',
                }}
                onAccept={handleAcceptAll}
                onDecline={handleRejectAll}
                enableDeclineButton
            >
                <div className="cookie-content">
                    <strong>We value your privacy</strong>
                    <p>
                        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
                        By clicking "Accept All", you consent to our use of cookies. Read more about our 
                        <a href="/privacy_and_policy" style={{ color: '#1E90FF', textDecoration: 'underline', marginLeft: '5px' }}>Privacy Policy</a>.
                    </p>
                </div>
            </CookieConsent>
        </div>
    );
};

export default CookieBanner;
