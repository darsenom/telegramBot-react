import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import './InfoButton.css'

export default function InfoButton() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Вы нажали на кнопку' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Button className={"tab-btn"} onClick={show} label="TAB" />
        </div>
    )
}