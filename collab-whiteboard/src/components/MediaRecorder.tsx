import React, { useEffect, useRef, useState } from 'react';

const MediaRecorderComponent = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const handleSuccess = (stream: MediaStream) => {
            const recorder = new MediaRecorder(stream);
            setMediaRecorder(recorder);

            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    setRecordedChunks((prev) => prev.concat(event.data));
                }
            };

            recorder.onstop = () => {
                const blob = new Blob(recordedChunks, { type: 'audio/webm' });
                const url = URL.createObjectURL(blob);
                if (audioRef.current) {
                    audioRef.current.src = url;
                }
            };
        };

        navigator.mediaDevices.getUserMedia({ audio: true }).then(handleSuccess);

        return () => {
            if (mediaRecorder) {
                mediaRecorder.stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [mediaRecorder, recordedChunks]);

    const startRecording = () => {
        if (mediaRecorder) {
            setRecordedChunks([]);
            mediaRecorder.start();
            setIsRecording(true);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setIsRecording(false);
        }
    };

    return (
        <div>
            <button onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            <audio ref={audioRef} controls />
        </div>
    );
};

export default MediaRecorderComponent;