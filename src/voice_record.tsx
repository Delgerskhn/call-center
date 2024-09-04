import { useState, useRef, useEffect } from 'react';

export default function VoiceRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string>('');
  const [permissionGranted, setPermissionGranted] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    if (!permissionGranted) return;

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
      const url = URL.createObjectURL(audioBlob);
      setAudioURL(url);
      audioChunksRef.current = [];
    };

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

  useEffect(() => {
    const requestPermission = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setPermissionGranted(true);
        startRecording();
      } catch (err) {
        console.error('Microphone permission denied', err);
      }
    };

    requestPermission();

    return () => {
      if (isRecording && mediaRecorderRef.current) {
        stopRecording();
      }
    };
  }, [permissionGranted]);

  return (
    <div>
      <h1>Voice Recorder</h1>
      {isRecording ? (
        <p>Recording...</p>
      ) : (
        <p>Waiting for microphone permission...</p>
      )}
      {audioURL && (
        <div>
          <h2>Recorded Audio:</h2>
          <audio controls src={audioURL}></audio>
        </div>
      )}
    </div>
  );
}
