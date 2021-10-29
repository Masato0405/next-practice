import type { NextPage } from "next";
import Image from "next/image";

const Profile: NextPage = () => {
  return (
    <>
      <Image src="/profile.jpg" alt="profile" width={200} height={200} />;
      <p>MasatoIsoです。</p>
      <p>最近フロントエンドをやってます。</p>
    </>
  );
};

export default Profile;
