import React from "react";
import { ReactDOM } from "react-dom/client";

const samplePage = (
    <div>
        <h1>First React VS Project</h1>
        <h3>Bigin small and build big</h3>
        <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
        </ul>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(samplePage)