import React, { useEffect, useRef, useState } from "react";
import {
  BodyContainer,
  ButtonsContainer,
  Container,
  ImageContainer,
  ImageSelectionSection,
  NewQuestionContainer,
  ResponseContainer,
  StyledButton,
  StyledImage,
  StyledInput,
  StyledVideo,
  Title,
  VideoActivationContainer,
  VideoActivationText,
  VideoContainer,
  VideoSection,
} from "./styles.module";
import axios from "axios";

const PageNative: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canSeeVideoStreaming, setCanSeeVideoStreaming] = useState(false);
  const [message, setMessage] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [imageList, setImageList] = useState<string[]>([]);

  useEffect(() => {
    startVideoStream();
  }, []);

  function startVideoStream() {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    };

    startWebcam();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }

  async function handleComunicateWithLLM() {
    let response = await axios
      .post(
        "http://localhost:5000/api/generate",
        {
          model: "llava",
          prompt: "What is in this picture?",
          images: [imageList[0].substring(22, imageList[0].length)],
        },
        { responseType: "json" }
      )
      .then((res) => res.data);
    let parsedResponse = response.split("{");
    let arraw = parsedResponse.map((item: string) => item.split('"')[11]);
    setMessage(arraw.join().replaceAll(",", ""));
  }
  async function hanldeMakeQuestionToAI() {
    let response = await axios
      .post(
        "http://localhost:5000/api/generate",
        {
          model: "llava",
          prompt: inputText,
        },
        { responseType: "json" }
      )
      .then((res) => res.data);
    let parsedResponse = response.split("{");
    let arraw = parsedResponse.map((item: string) => item.split('"')[11]);
    setMessage(arraw.join().replaceAll(",", ""));
  }

  const captureImage = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        // Set canvas dimensions to match video
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;

        // Draw the current video frame onto the canvas
        context.drawImage(videoRef.current, 0, 0);

        // Convert the canvas to a data URL and set it to state
        const dataUrl = canvasRef.current.toDataURL("image/png");
        setImageList((prev) => [...prev, dataUrl]);
      }
    }
  };

  function talkTheText() {
    const synth = window.speechSynthesis;
    /* Case synth is already speaking do nothing */
    if (synth.speaking) {
      console.error("speechSynthesis.speaking");
      return;
    }

    const utterThis = new SpeechSynthesisUtterance("Welcome to this tutorial!");
    
  const voices = speechSynthesis.getVoices();
  utterThis.voice = voices[0];

  // Speak the text
  speechSynthesis.speak(utterThis);
    
    /* 
    utterThis.onend = function (event) {
      console.log("SpeechSynthesisUtterance.onend");
    };

    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror");
    };

    utterThis.rate = 1.5;
    synth.speak(utterThis); */
  }
  return (
    <Container>
      <Title>Webcan AI API Service</Title>
      <BodyContainer>
        <canvas ref={canvasRef} style={{ display: "none" }} />
        <VideoSection>
          {canSeeVideoStreaming ? (
            <VideoContainer>No data</VideoContainer>
          ) : (
            <StyledVideo
              canSeeTheVideo={canSeeVideoStreaming}
              ref={videoRef}
              autoPlay
              playsInline
            />
          )}
          <VideoActivationContainer>
            <VideoActivationText>Activate Video Streaming</VideoActivationText>
            <input
              type="checkbox"
              onClick={() => {
                setCanSeeVideoStreaming(!canSeeVideoStreaming);
                startVideoStream();
              }}
            ></input>
          </VideoActivationContainer>
        </VideoSection>
        <ImageSelectionSection>
          <ButtonsContainer>
            <StyledButton onClick={captureImage}>Capture Image</StyledButton>
            <StyledButton onClick={() => setImageList([])}>
              Clear Images
            </StyledButton>
            <StyledButton onClick={handleComunicateWithLLM}>
              Describe Image
            </StyledButton>
            <StyledButton onClick={talkTheText}>Talk</StyledButton>
          </ButtonsContainer>
          <ImageContainer>
            {imageList.map((item) => (
              <StyledImage src={item} alt="Captured" />
            ))}
          </ImageContainer>
          <NewQuestionContainer>
            <StyledInput
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escreva aqui sua pergunta!"
            ></StyledInput>
            <StyledButton onClick={hanldeMakeQuestionToAI}>
              Send Prompt
            </StyledButton>
          </NewQuestionContainer>
        </ImageSelectionSection>
      </BodyContainer>
      <ResponseContainer>AI Response:{message}</ResponseContainer>
    </Container>
  );
};

export default PageNative;
