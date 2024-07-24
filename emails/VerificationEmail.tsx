import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from '@react-email/components';

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Your Verification Code for AnonBox</Preview>
      <Section style={{ padding: '20px', fontFamily: 'Roboto, Verdana, sans-serif' }}>
        <Row>
          <Heading as="h2">Hello @{username},</Heading>
        </Row>
        <Row>
          <Text>
            Thank you for signing up for AnonBox! To complete your registration and activate your account, please use the verification code provided below:
          </Text>
        </Row>
        <Row>
          <Text style={{ fontSize: '24px', fontWeight: 'bold', color: '#2C3E50', margin: '10px 0' }}>
            {otp}
          </Text>
        </Row>
        <Row>
          <Text>
            This code is valid for the next 60 minutes. If you did not initiate this request, you can safely ignore this email. For any questions or if you need further assistance, feel free to contact our support team.
          </Text>
        </Row>
        <Row>
          <Text>
            Best regards,<br />
            The AnonBox Team
          </Text>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Text style={{ fontSize: '12px', color: '#BDC3C7' }}>
            © 2024 AnonBox. All rights reserved.<br />
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
