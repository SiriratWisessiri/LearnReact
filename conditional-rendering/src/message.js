import { useState } from "react";

function Message() {
    const [message, setMessage] = useState(["a", "b"])
    /**
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */
    return(
        <div>       
            <div>
                <h2>This will This play when condition of message in the useState is true using &&</h2>
                {message.length > 0 && <h3>You have{message.length}unread messages!</h3>}
            </div>
            <hr />

    {/* /**
    * Challenge:
    * - If there are no unread messages, display "You're all caught up!"
    * - If there are > 0 unread messages, display "You have <n> unread
    *   message(s)"
    *      - If there's exactly 1 unread message, it should read "message"
    *        (singular)
    */}
            <div>
                <h2>Tenary Operation </h2>
                {
                    message.length === 0 ? <h3>You're all caught up!</h3> :
                    <h3>You have{message.length}unread {message.length > 1 ? "messages" : "message"}!</h3>
                }
            </div>
        </div>
    )
}
export default Message