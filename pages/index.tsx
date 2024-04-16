import Main from "../app/components/screen/Main/Main";
import { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    return {
      props: {
        initialIsLoading: false,
        messages: (await import(`../messages/${context.locale}.json`)).default,
      },
    };
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    return {
      props: {
        initialIsLoading: false,
      },
    };
  }
};

const Home: NextPage = () => {
  return <Main />
}
export default Home;