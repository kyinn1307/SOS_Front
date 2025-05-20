const ChatSendBtn = ({ onClick }) => {
  return (
    <div style={{ cursor: "pointer" }} onClick={onClick}>
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="17.5" cy="17.5" r="17.5" fill="#2C2C2C" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8011 10.8855C15.1005 10.586 15.586 10.586 15.8855 10.8855L23.0731 18.0731L16.0717 25.0745C15.7722 25.374 15.2867 25.374 14.9873 25.0745C14.6878 24.7751 14.6878 24.2896 14.9873 23.9901L20.9043 18.0731L14.8011 11.9699C14.5016 11.6704 14.5016 11.1849 14.8011 10.8855Z"
          fill="#FAFAF8"
        />
      </svg>
    </div>
  );
};

export default ChatSendBtn;
