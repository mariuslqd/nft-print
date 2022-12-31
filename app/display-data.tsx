import { GetStaticProps } from 'next';

export default function NewPage({ address, tokenId, name, email, instagram, twitter, linkedin }) {
  return (
    <div>
      <h1>Verification page for NFT's</h1>
      <p>Address: {address}</p>
      <p>Token ID: {tokenId}</p>
      <p>Form input: {name}</p>
      <p>Twitter URL: {email}</p>
      <p>LinkedIn URL: {twitter}</p>
      <p>LinkedIn URL: {instagram}</p>
      <p>LinkedIn URL: {linkedin}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const address = params?.address;
  const tokenId = params?.tokenId;
  const name = params?.formInput;
  const email = params?.twitterUrl;
  const twitter = params?.linkedinUrl;
  const instagram = params?.linkedinUrl;
  const linkedin = params?.linkedinUrl;

  return {
    props: {
      address,
      tokenId,
      name,
      email,
      twitter,
      instagram,
      linkedin,
    },
  };
};