import type { NextPage } from "next";
import { useState } from "react";

const Contact: NextPage = () => {
  const [name, setName] = useState("あいうえお");
  const [mail, setMail] = useState("");
  const [content, setContent] = useState("");

  return (
    <form>
      <div>
        <label htmlFor="">
          お名前:
          <input type="text" value={name} />
        </label>
      </div>
      <div>
        <label htmlFor="">
          メールアドレス:
          <input type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="">
          問い合わせ内容:
          <textarea name="" id="" cols={30} rows={10}></textarea>
        </label>
      </div>
      <button type="button">送信</button>
    </form>
  );
};

export default Contact;
