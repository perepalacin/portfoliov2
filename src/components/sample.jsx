import { useState } from "preact/hooks";

export default function sample() {
    const [greeting, setGreeting] = useState("");

    return (
        <div>
            <h3>{greeting}! Thank you for visiting!</h3>
            <button onClick={() => setGreeting("Hello world!")}>New Greeting</button>
        </div>
    );
}
