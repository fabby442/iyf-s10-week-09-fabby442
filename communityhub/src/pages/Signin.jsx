import { useState } from "react";
import { auth } from "../firebase/config";
import { useEffect } from "react";

import {
    GoogleAuthProvider,
    signInWithPopup,
    RecaptchaVerifier,
    signInWithPhoneNumber
} from "firebase/auth";

function SignIn() {
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [step, setStep] = useState(1);

    // 🔵 GOOGLE LOGIN
    const loginWithGoogle = async () => {
        console.log("LOGIN STARTED (GOOGLE)");

        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);

            console.log("USER:", result.user);
            alert("Google login success");
        } catch (err) {
            console.error(err.code);
            console.error(err.message);
        }
    };

    // 📱 RECAPTCHA SETUP
    const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
            auth,
            "recaptcha-container",
            {
                size: "invisible",
                callback: () => {
                    console.log("reCAPTCHA solved");
                }
            }
        );
    }

    window.recaptchaVerifier.render();
};

    // 📱 SEND OTP
   const sendOtp = async () => {
    console.log("PHONE LOGIN STARTED");

    try {
        setupRecaptcha();

        const appVerifier = window.recaptchaVerifier;

        const confirmation = await signInWithPhoneNumber(
            auth,
            phone,
            appVerifier
        );

        window.confirmationResult = confirmation;

        console.log("OTP SENT SUCCESSFULLY");

        setStep(2); // THIS SHOWS INPUT FIELD
        alert("OTP sent to phone");
    } catch (err) {
        console.error(err.code);
        console.error(err.message);
    }
};

    // 📱 VERIFY OTP
    const verifyOtp = async () => {
        console.log("VERIFYING OTP");

        try {
            const result = await window.confirmationResult.confirm(code);

            console.log("USER:", result.user);
            alert("Phone verified successfully!");
        } catch (err) {
            console.error(err.code);
            console.error(err.message);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Sign In</h2>

            {/* 🔵 GOOGLE LOGIN */}
            <button onClick={loginWithGoogle}>
                Continue with Google
            </button>

            <hr />

            {/* 📱 PHONE LOGIN */}
            <h3>Phone Login</h3>

            <div id="recaptcha-container"></div>

{step === 1 && (
    <>
        <input
            placeholder="+2547XXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={sendOtp}>Send OTP</button>
    </>
)}

{step === 2 && (
    <>
        <input
            placeholder="Enter OTP"
            value={code}
            onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={verifyOtp}>Verify OTP</button>
    </>
)}
            
        </div>
    );
}

export default SignIn;