import type { NextPage } from "next";

export async function getStaticProps() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await res.json();

  return {
    props: { data },
  };
}

const Dog: NextPage = ({ data }) => {
  const breeds = Object.entries(data.message);
  console.log(breeds);

  return <h1>hoge</h1>;
};

export default Dog;
