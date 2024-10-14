import styled from "styled-components";

export const Container = styled.div`
  background-color: #333;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin: 60px;
`;
export const VideoContainer = styled.div`
  width: 640px;
  height: 480px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222;
  font-weight: 700;
  font-size: 50px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-radius: 10px;
`;
export const StyledImage = styled.img`
  width: 150px;
  height: 150px;
`;
export const VideoActivationText = styled.span``;
export const VideoSection = styled.div``;
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export const StyledButton = styled.button`
  color: #222;
  border-radius: 10px;
  background-color: #eee;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border: none;
  font-size: 20px;
`;
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
export const ResponseContainer = styled.div`
  width: 80vw;
  margin: auto auto;
  color: #eee;
  font-weight: 700;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
export const ImageSelectionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const StyledInput = styled.input`
  color: #222;
  border-radius: 10px;
  background-color: #eee;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border: none;
  font-size: 20px;
  padding: 5px 10px;
`;
export const NewQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const VideoActivationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 30px;
  padding: 10px;
  font-weight: 700;
  font-size: 20px;
  color: #222;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-radius: 10px;
  background-color: #eee;
`;
interface StyledVideoProps {
  canSeeTheVideo: boolean;
}
export const StyledVideo = styled.video<StyledVideoProps>`
  width: 640px;
  height: 480px;
  border-radius: 10px;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
