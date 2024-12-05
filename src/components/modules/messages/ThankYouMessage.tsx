type IMessageProps = {
  title: string;
  message: string;
};

const ThankYouMessage = ({ title, message }: IMessageProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};

export default ThankYouMessage;
