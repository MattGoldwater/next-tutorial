import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Page = () => {
  
  const Content = () => {
    const router = useRouter();
    return (
      <>
        <h1>{router.query.title}</h1>
        <p>This is the blog post content.</p>
      </>
    );
  }

  return (
    <Layout>
      
    </Layout>
  );
};

export default Page;
