import React, { useEffect, useRef, useState } from 'react';

const MediaSharing: React.FC = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaChunks, setMediaChunks] = useState<Blob[]>([]);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const handleSuccess = (stream: MediaStream) => {
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    setMediaChunks((prev) => [...prev, event.data]);
                }
            };
        };

        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(handleSuccess)
            .catch((error) => {
                console.error('Error accessing media devices.', error);
            });

        return () => {
            if (mediaRecorderRef.current) {
                mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const startRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.start();
            setIsRecording(true);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const playRecording = () => {
        const audioBlob = new Blob(mediaChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        if (audioRef.current) {
            audioRef.current.src = audioUrl;
            audioRef.current.play();
        }
    };

    return (
        <div>
            <h2>Media Sharing</h2>
            <button onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            <button onClick={playRecording} disabled={mediaChunks.length === 0}>
                Play Recording
            </button>
            <audio ref={audioRef} controls style={{ display: 'none' }} />
        </div>
    );
};

export default MediaSharing;