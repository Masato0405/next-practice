import type { NextPage } from "next";
import { useState } from "react";

const Contact: NextPage = () => {
  const [name, setName] = useState("あいうえお");
  const [mail, setMail] = useState("test@test.jp");
  const [content, setContent] = useState("入力してください");

  const submitForm = () => {
    alert(`お名前:${name}`);
    alert(`メールアドレス:${mail}`);
    alert(`問い合わせ内容:${content}`);
  };

  return (
    <form>
      <div>
        <label htmlFor="">
          お名前:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          メールアドレス:
          <input
            type="text"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          問い合わせ内容:
          <textarea
            cols={30}
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </label>
      </div>
      <button type="button" onClick={() => submitForm()}>
        送信
      </button>
    </form>
  );
};

export default Contact;
