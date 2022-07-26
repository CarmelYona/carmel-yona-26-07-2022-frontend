import { ChatPreview } from "./chat-preview"

export function ChatList({ msgs, user }) {
    return <section className="chat-list">
   
        {msgs &&
            msgs.map((msg, idx) => {
                return <ChatPreview msg={msg} key={idx} />
            })
        }
    </section>
}