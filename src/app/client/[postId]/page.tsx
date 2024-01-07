import Link from 'next/link';

export default function DetailPost({ params }: { params: { postId: string } }) {
    console.log(params);

    return (
        <div>
            <Link href="/client">Back</Link>
            <div>Detail page {params.postId}</div>
        </div>
    );
}
