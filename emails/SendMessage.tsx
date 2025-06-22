import { Html, Head, Preview, Body, Container, Section, Text, Hr } from '@react-email/components';

interface EmailProps {
  senderName: string;
  senderEmail: string;
  message: string;
  sentTime: string; // formatted date-time string
}

const MessageEmail = ({ senderName, senderEmail, message, sentTime }: EmailProps) => (
  <Html>
    <Head />
    <Preview>New message from {senderName}</Preview>
    <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', padding: '20px' }}>
      <Container style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
        <Section>
          <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
            You have received a new message
          </Text>
          <Hr />
        </Section>

        <Section>
          <Text><strong>Sender Name:</strong> {senderName}</Text>
          <Text><strong>Sender Email:</strong> <a href={`mailto:${senderEmail}`} style={{ color: '#1a73e8', textDecoration: 'none' }}>{senderEmail}</a></Text>
          <Text><strong>Sent At:</strong> {sentTime}</Text>
        </Section>

        <Section style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f1f1f1', borderRadius: '6px' }}>
          <Text style={{ whiteSpace: 'pre-wrap' }}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
export default MessageEmail;


MessageEmail.PreviewProps  = {
    senderName: "Joseph",
    senderEmail: "admin@josephenoch.com",
    message: "Hello, this is a test message.",
    sentTime: new Date().toLocaleString(),
} as EmailProps