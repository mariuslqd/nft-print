import { GetStaticProps } from 'next';
import { useSearchParams } from 'next/navigation';

function Display() {
  const searchParams = useSearchParams();
  const address = searchParams.get('address')!;
  const tokenId = searchParams.get('tokenId')!;
  const name = searchParams.get('name')!;
  const email = searchParams.get('email')!;
  const twitter = searchParams.get('twitter')!;
  const instagram = searchParams.get('instagram')!;
  const linkedin = searchParams.get('linkedin')!;
  return (
    <div>
      <h1>This is the new page!</h1>
      <p>Address: {address}</p>
      <p>Token ID: {tokenId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Twitter: {twitter}</p>
      <p>Instagram: {instagram}</p>
      <p>LinkedIn: {linkedin}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const address = params?.address;
  const tokenId = params?.tokenId;
  const name = params?.name;
  const email = params?.email;
  const twitter = params?.twitter;
  const instagram = params?.instagram;
  const linkedin = params?.linkedin;

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

export default Display;