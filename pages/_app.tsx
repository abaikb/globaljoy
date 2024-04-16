import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRouter } from "next/router";
import { NextIntlClientProvider } from 'next-intl';
import "../app/components/assets/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    });

    const router = useRouter();

    return (
        <QueryClientProvider client={queryClient}>
                <NextIntlClientProvider
                                locale={router.locale}
                                timeZone='Europe/Vienna'
                                messages={pageProps.messages}
                            >
                    <Component {...pageProps} />
                </NextIntlClientProvider>
        </QueryClientProvider>
    );
}

export default MyApp;