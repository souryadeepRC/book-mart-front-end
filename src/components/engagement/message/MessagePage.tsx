import { MessageBox } from "./message-box/MessageBox";

const MessagePage = (): JSX.Element => {
  return (
    <section style={{ display: "flex", width: "100%",    height: 'calc(100% - 44px)' }}>
      <section style={{width: '25%'}}>Buddy List</section>
      <MessageBox />
    </section>
  );
};
export { MessagePage };

