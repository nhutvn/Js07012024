'use client';

import Footer from '../components/footer';
import Container from 'react-bootstrap/Container';
import useSWR from 'swr';
import TableContent from '../components/table';
import ModalCreate from '../components/modal';
import { useState } from 'react';

function ClientPage() {
    let [show, setShow] = useState(false);
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        'https://jsonplaceholder.typicode.com/users/1/posts',
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    );
    console.log('data', data);

    if (!data) return <div>...loading</div>;

    return (
        <div id="header">
            <div>
                Table post
                <span>
                    <button
                        style={{ backgroundColor: 'red', borderRadius: 10, marginLeft: 80 }}
                        onClick={() => setShow(true)}
                    >
                        Add post
                    </button>
                </span>{' '}
            </div>{' '}
            <Container>
                <TableContent data={data} />
            </Container>
            <Footer></Footer>
            <ModalCreate show={show} setShow={setShow} />
        </div>
    );
}

export default ClientPage;
