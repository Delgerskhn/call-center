"use client";
import { Button } from "@/components/ui/button";
import { llm, stt, tts } from "@/lib/speech";
import { normalizeText } from "@/lib/utils";
import { Link } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { JSX, SVGProps, useEffect, useRef, useState } from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";

function blobToBase64(blob: Blob): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

export default function CallPage() {
  const searchParams = useSearchParams();
  const audioRef = useRef<HTMLMediaElement>(null);
  const number = searchParams.get("number");
  const [status, setStatus] = useState("Dialing...");
  const [transcription, setTranscription] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecorded, setIsRecorded] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isTranscribed, setIsTranscribed] = useState(false);
  const [answer, setAnswer] = useState("");

  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder,
  } = useAudioRecorder();

  useEffect(() => {
    setStatus("Calling...");
    setTimeout(() => {
      ttsAudio("сайн байна уу, таньд юугаар туслах уу");
    }, 1000);
  }, []);

  useEffect(() => {
    if (!recordingBlob) return;
    setStatus("Recognizing...");
    stt(recordingBlob, (text, isFailed) => {
      if (isFailed) {
        setStatus(text);
        return;
      }
      setIsTranscribed(true);
      // setTranscription("Хаягийн мэдээлэл өгөөч");
      setTranscription(text);
      setStatus("Waiting response...");
    });
  }, [recordingBlob]);

  useEffect(() => {
    if (!isTranscribed) return;
    setStatus("Thinking...");
    llm(transcription).then((res) => {
      ttsAudio(res);
      setStatus("Done");
      setIsDone(true);
      setAnswer(res);
    });
  }, [isTranscribed, transcription]);

  const ttsAudio = (text: string) => {
    tts(normalizeText(text), async (msg, isFailed, audio) => {
      if (audio === null) {
        return;
      }
      const audioRes = await blobToBase64(audio);
      setAudio(audioRes);
      if (!isPlaying) {
        playAudio();
      }
    });
  };

  const playAudio = () => {
    console.log("Playing response");
    if (audioRef.current) {
      setIsPlaying(true);
      audioRef.current.play();
    }
  };

  const setAudio = (src: string) => {
    if (audioRef.current) {
      audioRef.current.src = src;
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    console.log("Audio playback finished");
    if (!isRecorded) {
      setStatus("Recording...");
      startRecording();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background text-card-foreground">
      <div className="flex-1 flex flex-col items-center justify-center gap-6 p-4">
        {/* <div className="w-full h-16 bg-muted rounded-xl overflow-hidden relative"> */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-pulse" /> */}
        {/* </div> */}
        <div className="text-2xl bg-card-foreground/5 rounded-md px-6 py-2">
          {number}
        </div>
        <div className="text-xl">{status}</div>
        <audio ref={audioRef} onEnded={handleAudioEnded} autoPlay />
        {transcription !== "" && (
          <div className="">
            <span className="font-bold">Асуулт:</span> {transcription}
          </div>
        )}
        {answer !== "" && (
          <div className="">
            <span className="font-bold">Хариулт:</span> {answer}
          </div>
        )}
      </div>
      <div className="border-t border-muted p-4">
        <Button
          variant="destructive"
          className={
            !isRecorded ? "w-full" : "w-full pointer-events-none opacity-50"
          }
          onClick={() => {
            stopRecording();
            setIsRecorded(true);
          }}
        >
          <PhoneCallIcon className="h-5 w-5 mr-2" />
          End Call
        </Button>
      </div>
    </div>
  );
}

function PhoneCallIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 2a9 9 0 0 1 8 7.94" />
      <path d="M14.05 6A5 5 0 0 1 18 10" />
    </svg>
  );
}
