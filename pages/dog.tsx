import type { NextPage } from "next";

export async function getStaticProps() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await res.json();

  console.log(data.message);
  return {
    props: { data },
  };
}

const Dog: NextPage = (props) => {
  return <h1>hoge</h1>;
};

export default Dog;
