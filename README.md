Dark Pattern Auditor – AI-Powered Browser Extension
 Problem Statement

Online shopping websites increasingly use dark patterns—manipulative UI/UX techniques that psychologically pressure users into making unintended decisions such as impulsive purchases, hidden subscriptions, or rushed checkouts.

Most users are unaware that they are being manipulated, especially through urgency messages like “Only a few left” or “Limited time deal”.

 Solution

Dark Pattern Auditor is an AI-powered Chrome browser extension that scans live webpages in real time, detects manipulative dark patterns, and alerts users before they make decisions.

The system audits website UI elements directly inside the browser and provides clear, privacy-first warnings without breaking the user experience.

 Key Features

 Real-time scanning of webpage content

 Detection of psychological dark patterns:

Urgency

Scarcity

Pressure tactics

 On-page warning overlay (non-intrusive)

 Visual highlighting of manipulative elements

 Privacy-first (no data collection, runs locally)

 Lightweight & fast (no backend required)

 Dark Patterns Detected

“Limited time deal”

“Only few left”

“Hurry up”

“Last chance”

“Offer ends soon”

“Buy now or miss out”

 System Architecture
User
 ↓
Chrome Browser Extension
 ↓
DOM Scanner (UI Elements)
 ↓
Pattern Detection Engine (Rule-based AI)
 ↓
Risk Analysis
 ↓
User Warning Overlay

 Tech Stack

Frontend: HTML, CSS, JavaScript

Platform: Google Chrome Extension (Manifest V3)

AI Logic: Rule-based NLP heuristics (upgradeable to ML)

Tools: VS Code, GitHub

 How to Run the Project (Local Setup)

Clone or download this repository

Open Google Chrome and go to:

chrome://extensions


Enable Developer Mode

Click Load Unpacked

Select this project folder

Open any shopping website (Amazon, Flipkart, etc.)

Click the extension icon → Scan Page

 Demo Video
 
 ( Google Drivelink here)

https://drive.google.com/file/d/13oq99893MHl3ZMm54zm0J1piV9NApjp-/view?usp=drivesdk

 Screenshots

(Optional but recommended)

Extension popup

Warning overlay on Amazon page

Highlighted dark pattern text

 Example Use Case

When a user visits an e-commerce site showing messages like:

“Limited time deal – Only 2 left!”

The extension:

Detects urgency & scarcity tactics

Highlights the text

Displays a warning explaining the manipulation

Helps the user make an informed decision

 Hackathon Alignment

Track: AI / ML, Web Development, Security & Ethics

Innovation: Real-time UI manipulation auditing

Impact: Consumer protection & ethical design awareness

Scalability: Can be extended with ML models and crowdsourced updates

 Future Enhancements

ML-based text classification (TensorFlow.js)

Computer vision for deceptive UI layouts

Dark pattern explanation tooltips

User-controlled sensitivity settings

Crowd-sourced pattern reporting


 Conclusion

Dark Pattern Auditor empowers users by exposing manipulative design practices in real time.
By increasing transparency and awareness, the project promotes ethical design, informed decisions, and digital trust.
