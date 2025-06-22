type SendEmailProps = {
  sentTime: string,
  message: string,
  senderName: string,
  senderEmail: string,
}
export const sendMessageEmail = async (props: SendEmailProps) =>{
  const resp = await fetch("/api/send-mail", {
    method: "POST",
    body: JSON.stringify(props)
  })
  const body = await resp.json()
  return body
}