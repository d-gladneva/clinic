import React from 'react';
import ConnectForm from "../components/Connect/ConnectForm";
import ConnectDownload from "../components/Connect/ConnectDownload";
import PaymentClearfix from "../components/Connect/PaymentClearfix";

const Connect = () => (
    <div>
        <ConnectForm/>
        <ConnectDownload/>
        <PaymentClearfix/>
    </div>
);

export default Connect;
