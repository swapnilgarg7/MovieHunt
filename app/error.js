"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log("error: ", error);
    }, [error]);


    return (
        <div className="error text-center mt-10 text-2xl space-y-4">
            <h1>Oops! Something went wrong.</h1>
            <button className="hover:text-yellow-500 bg-slate-300 dark:bg-gray-500 p-4" onClick={() => reset()}>
                Click Here to Try Again
            </button>
        </div>
    );
}