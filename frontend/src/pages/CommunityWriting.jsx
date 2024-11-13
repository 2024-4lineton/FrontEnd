import styled from "styled-components";
import Header from '../shared/components/Header3';
import camera from '../assets/Community/camera.svg';
import { useState } from "react";
import { hoverGrow } from "../shared/animation/hoverGrow";

export default function CommunityWriting() {

  const [selected, setSelected] = useState("자유");
  const [imgFiles, setImgFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClick = (buttonName) => {
    setSelected(buttonName);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (imgFiles.length + files.length > 3) {
      alert("최대 3장의 이미지만 업로드할 수 있습니다.");
      return;
    }
    setImgFiles([...imgFiles, ...files.slice(0, 3 - imgFiles.length)]);
  };

  const handleRemoveImage = (index) => {
    setImgFiles(imgFiles.filter((_, i) => i !== index));
  };

  const canSubmit = () => imgFiles.length > 0 && title.trim() && content.trim();

  return (
    <Wrapper>
      <Header/>
      <Title>
        <Font>글 작성</Font>
        <Upload>업로드</Upload>
      </Title>
      <NavContainer>
        <NavButton onClick={() => handleClick("자유")} isSelected={selected === "자유"}>
          자유
        </NavButton>
        <NavButton onClick={() => handleClick("구해요")} isSelected={selected === "구해요"}>
          구해요
        </NavButton>
        <NavButton onClick={() => handleClick("팔아요")} isSelected={selected === "팔아요"}>
          팔아요
        </NavButton>
      </NavContainer>

      <Slider>
        {imgFiles.length < 3 && (
          <ImgButton>
            <label htmlFor="imageUpload">
              <img src={camera} alt="camera" />
              <Div>({imgFiles.length}/3)</Div>
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              multiple
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </ImgButton>
        )}
        {imgFiles.map((file, index) => (
          <ImgPreview key={index}>
            <PreviewImage src={URL.createObjectURL(file)} alt={`preview-${index}`} />
            <RemoveButton onClick={() => handleRemoveImage(index)}>×</RemoveButton>
          </ImgPreview>
        ))}
      </Slider>
    
      <div style={{ display: "flex", flexDirection: "column", padding: "0 1rem", gap: "0.5rem" }}>
        <TitleInput placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
        <ContentInput placeholder="상세 내용" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>

      <ButtonContainer>
        <DeleteButton disabled={!canSubmit()}>삭제</DeleteButton>
        <RegisterButton disabled={!canSubmit()}>업로드</RegisterButton>
      </ButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Title = styled.div`
  display: flex;
  padding: 1.5rem 1rem 1rem 1rem;
  justify-content: space-between;
`;

const Font = styled.div`
  color: #333;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 600;
`;

const Upload = styled(Font)`
  cursor: pointer;
  color: ${({ disabled }) => (disabled ? "#999" : "#577D58")};
`;

const NavContainer = styled.div`
  display: flex;
  padding: 0 1rem;
  gap: 0.75rem;
`;

const NavButton = styled.div`
  border-radius: 1.25rem;
  background: ${({ isSelected }) => (isSelected ? "#2D2F2D" : "#EEEEEE")};
  width: 6.4375rem;
  padding: 0.25rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isSelected }) => (isSelected ? "white" : "#999")};
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const Slider = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImgButton = styled.div`
  width: 9.4375rem;
  height: 9.4375rem;
  border-radius: 0.25rem;
  background: #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
  cursor: pointer;
  flex-shrink: 0;
`;

const ImgPreview = styled.div`
  position: relative;
  width: 9.4375rem;
  height: 9.4375rem;
  border-radius: 0.25rem;
  overflow: hidden;
  flex-shrink: 0;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const Div = styled.div`
  color: #999;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
`;

const TitleInput = styled.input`
  border-radius: 0.5rem;
  border: 1px solid #EEE;
  height: 44px;
  background: #F8F8F8;
  padding-left: 0.81rem;
  outline: none;
`;

const ContentInput = styled.textarea`
  height: 25.25rem;
  border: 1px solid #EEE;
  outline: none;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: #F8F8F8;
  resize: none;
  font-family: Pretendard;
  font-size: 1rem;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  width: 100%;
`;

const DeleteButton = styled.div`
  display: flex;
  width: 49%;
  height: 3.375rem;
  padding: 1.0625rem 0;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 0.75rem;
  border: 1px solid #EEE;
  background: #FFF;
  color: ${({ disabled }) => (disabled ? "#999" : "#333")};
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  ${hoverGrow}
`;

const RegisterButton = styled(DeleteButton)`
background: ${({ disabled }) => (disabled ? "#EEE" : "#577D58")};
color: ${({ disabled }) => (disabled ? "#999" : "#FFF")};
`;
