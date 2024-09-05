import { headers } from "next/headers";

export async function stt(
  audio: Blob,
  onResult: (text: string, isFailed: boolean) => void
) {
  const formData = new FormData();
  var file = new File([audio], "recording");
  formData.append("audioFile", file);

  const response = await fetch("https://ai.rookies.mn/api/speech/recognize", {
    method: "POST",
    headers: {
      "X-Token": process.env.NEXT_PUBLIC_SPEECH_TOKEN,
    },
    body: formData,
  });

  if (!response.ok) {
    onResult("Recognition failed or no text detected!", true);
  }

  const result = await response.json();
  if (result.text === "") {
    onResult("No text detected!", true);
  }
  onResult(result.text, false);
  console.log("Success:", result);
}

export async function tts(
  text: string,
  onResult: (message: string, isFailed: boolean, audio: Blob | null) => void
) {
  const response = await fetch(
    "https://ttsdemo.s1.bilguun.dev/synthesize_raw?text=" + text
  );

  if (!response.ok) {
    onResult("Failed", true, null);
  }
  const result = await response.blob();
  onResult("Success", false, result);
}

export async function llm(query: string): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_DIFY_API_KEY;
  const url = "http://llm.rookies.mn/v1/chat-messages";

  const data = {
    inputs: {},
    query: query,
    response_mode: "blocking",
    conversation_id: "",
    user: "abc-123",
    files: [
      {
        type: "image",
        transfer_method: "remote_url",
        url: "https://cloud.dify.ai/logo/logo-site.png",
      },
    ],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return "";
  }
  const json = await response.json();
  console.log(json);
  return json.answer;
}
