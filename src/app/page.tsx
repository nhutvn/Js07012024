import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <ul>
            <li>
                <Link href="/admin">Admin</Link>
            </li>
            <li>Todo</li>
        </ul>
    );
}
