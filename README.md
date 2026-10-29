Sach.os - Interactive Cloud Portfolio

Live Demo: https://main.d3fettqy1vxhaw.amplifyapp.com/

About the Project

Sach.os was engineered specifically for the AWS Student Builder Challenge 2026 (Theme: Build Your Tech Superpower).

Instead of deploying a standard static portfolio, I built a cloud-native, interactive terminal environment that features a state-driven "Superpower Vending Machine." This module physically dispenses my technical traits, directly answering the hackathon's prompt while demonstrating proficiency in React state management, modern UI/UX architecture, and seamless cloud deployment.

System Architecture

This project is architected to scale globally with high availability, leveraging the power of modern AWS infrastructure.

+----------------+       +------------------+       +-----------------------+       +----------------+
|                |       |                  |       |      AWS CLOUD        |       |                |
|  [ Developer ] | ----> |  [ GitHub Repo ] | ----> |  [ AWS Amplify ]      | ----> |  [ End Users ] |
|  (Sach.os)     | Push  |  (main branch)   | Web-  |  (CI/CD & Hosting)    | Fast  |  (Global)      |
|                | Code  |                  | hook  |                       | CDN   |                |
+----------------+       +------------------+       +-----------------------+       +----------------+
                                                               |
                                                      [ Auto Build & Deploy ]


Hosting & CDN: Deployed on AWS Amplify for global content delivery and reduced latency.

CI/CD Pipeline: Fully integrated with GitHub. Every commit pushed to the main branch triggers an automated build and deployment pipeline via AWS Amplify.

Domain Management: Configured for custom routing and SSL/HTTPS automation.

Technical Stack

Frontend Framework: React.js

Styling Engine: Tailwind CSS (Fully responsive for cross-device compatibility)

Iconography: Lucide-React (SVG-based professional rendering)

Cloud Infrastructure: AWS Amplify

Key Features

Interactive Command Line Interface: A fully functional mock terminal simulating a cloud environment. Supported commands include help, aws, startup, and the hidden command secret.

Superpower Vending Module: A gamified, interactive component that dynamically renders my core developer traits, including Cloud Architecture capabilities and Startup Founder mindset (CreaSpace.in).

Responsive Design Pattern: Engineered to maintain visual integrity across ultra-wide desktop monitors and mobile interfaces.

Local Development

To run this project on a local development server:

# Clone the repository
git clone https://github.com/yourusername/sach-os.git

# Navigate into the project directory
cd sach-os

# Install required dependencies
npm install

# Initialize the development server
npm start


About the Developer

Sachin (Sach) Dhage
Founder of CreaSpace.in & Cloud Developer
Focused on architecting scalable web applications, executing rapid MVPs, and leveraging cloud infrastructure to solve real-world problems.

Built for the AWS Student Builder Challenge.
