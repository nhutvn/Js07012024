'use client';

import { useRouter } from 'next/navigation';
import cssX from '@/style/app.module.css';
import { Button } from 'react-bootstrap';

function AdminPage() {
    const router = useRouter();

    return (
        <div>
            <p className={cssX['red']}>Hello admin</p>
            <button type="button" onClick={() => router.push('/')} className="color-red"></button>
            <Button variant="primary">Back space</Button>
        </div>
    );
}

export default AdminPage;
