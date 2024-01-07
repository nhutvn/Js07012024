'use client';

import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

interface IProps {
    data: IPost[];
}

export default function TableContent(props: IProps) {
    console.log('rs: ', props);
    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Desc</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {props.data.map?.((post) => {
                    return (
                        <tbody key={post.id}>
                            <tr>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <Link href={`/client/${post.id}`}>Detail</Link>
                                    {/* <Link
                                        href={{
                                            pathname: `/client/${post.id}`,
                                            query: { data: JSON.stringify(post) },
                                        }}
                                    >
                                        Detail
                                    </Link> */}
                                    <Button variant="primary" className="mx-3">
                                        Edit
                                    </Button>
                                    <Button variant="danger">Remove</Button>
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </Table>
        </div>
    );
}
