import React, { useState } from 'react';

const Chat = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
            console.log('File selected:', event.target.files[0].name);
        }
    };

    const handleSendMessage = async () => {
        if (file) {
            console.log('Sending file:', file.name);
            // File upload logic here
        }
    };

    return (
        <div className="chat-container p-4">
            <div className="message-input-container flex items-center border p-2 rounded mt-4">
                <label htmlFor="file-input" className="cursor-pointer mr-2 text-2xl">
                    📎
                </label>
                <input
                    id="file-input"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                />
                <input
                    type="text"
                    placeholder="Type your message here"
                    className="flex-grow p-2 border-none outline-none"
                />
                <button 
                    onClick={handleSendMessage} 
                    className="send-button bg-blue-500 text-white p-2 rounded ml-2"
                >
                    Send
                </button>
            </div>
            {file && (
                <div className="mt-2">
                    Selected file: {file.name}
                </div>
            )}
        </div>
    );
};

export default Chat;