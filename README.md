# AnonBox

[AnonBox](https://anon-box.vercel.app/) lets you receive anonymous messages from anyone. Share your unique link and start receiving messages without revealing your identity.

## Features

- **Anonymous Messaging**: Receive messages from anyone without revealing your identity.
- **Easy Sharing**: Share your unique link via social media, email, or any platform.
- **User Privacy**: Your personal information remains secure and private.

## Tech Stack

- **Framework**: Next.js
- **Database**: MongoDB
- **ORM**: Mongoose
- **Language**: TypeScript
- **Email Service**: Resend
- **UI Components**: Shadcn

## Usage

1. **Sign Up**: Visit the homepage and create your account by clicking the "Sign Up" button.
2. **Share Your Link**: After signing up, you will receive a unique link. Share this link via social media, email, or any platform.
3. **Receive Messages**: Check your AnonBox to receive anonymous messages from others.

## Installation

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/shubhamore/AnonBox.git
    cd AnonBox
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory and add the following environment variables:
    ```env
    EMAIL_DOMAIN=your-email-domain
    NEXTAUTH_SECRET=your-nextauth-secret
    RESEND_API_KEY=your-resend-api-key
    MONGODB_URI=your-mongodb-uri
    ```

4. **Run the Development Server**:
    ```sh
    npm run dev
    ```
    Your app should now be running on [http://localhost:3000](http://localhost:3000).

5. **Build for Production**:
    ```sh
    npm run build
    npm start
    ```
