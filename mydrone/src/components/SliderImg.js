import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ExplainDetails from '../pages/ExplainDetails';
import "../index.css";

const Img = styled.img`
  border-radius: 7px;
  margin: 0;
  margin: 0 12.5px;
  position: relative;
  cursor: pointer;
  transition: all 0.5s linear;
`;

const LastImg = styled.img`
  transition: all 1s linear;
  border-radius: 7px;
`;

const Making = styled.span`
  padding-left: 20px;
  padding-bottom: 24px;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Including = styled.div`
  background-color: rgba(0, 0, 0, 1);
  border-radius: 7px;
  display: flex;
  align-items: center;
  margin: 0 12.5px;
  cursor: pointer;
  position: relative;
`;

const Row = styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

const Button = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  position: absolute;
  justify-content: center;
  border: none;
  font-size: 12px;
  height: 50px;
  border-radius: 60px;
  padding: 25px 10px;
  opacity: 0.5;
  z-index: 2;
  i { color: rgba(0, 0, 0, 0.5); }
`;
const Wrapper = styled.div`
  margin: 22px 0px;
  display: flex;
  overflow-x: hidden;
  align-items: center;
`;
const LeftButton = styled(Button)`
  transition: all 0.5s ease-in-out;
`;

const RightButton = styled(Button)`
  transition: all 0.5s ease-in-out;
`;

const ImgWrapper = styled.div`
  position: relative;
`;
const ImgMake = styled.div`
  position: absolute;
  z-index: 5;
  width: 330px;
  height: 150px;
  border-radius: 5px;
  background-color: white;
  left: 30px;
  bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 27px 0px 20px 0px;
`;

const Title = styled.span`
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 14px;
`;


const LinkSpan = styled.span`
  padding-left: 20px;
  padding-top: 5px;
  color: #3366ff;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  i {
    margin-left: 5px;
  }
`;

const SmallCover = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  transition: all 0.1s ease-in-out;
`;

const SmallTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-top: 22px;
  margin-bottom: 10px;
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
`;

const SmallMake = styled.span`
  font-size: 14px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
`;

const WantedImg = [
  "dr1.png",
  "dr2.png",
  "dr3.png",
  "dr4.png",
];

const wantedTitle = [
  "물류 운송 드론",
  "환경·교통 드론",
  "농업용 드론",
  "인명구조용 드론",

];

const wantedMake = [
  "배달 서비스와 같은 물품 운송",
  "기상 관측 등에 사용",
  "농사에 기여",
  "안전 수색 및 인명 구조에 사용",

];

const detailContent = [
  "글로벌 기업을 중심으로 발전하고 있으며,  도서·산간지역뿐만 아니라 도심지에서도 신속·정확한 화물 운송을 목적으로 드론 택배 서비스를추진 중임",
  "기상관측 및 태풍 등 기상변화 및 환경오염의 정도를 실시간감시하고 고속도로 운행 상황 확인 등 교통상황 관측함",
  "살충제 및 비료살포 뿐만 아니라 원격 농장관리, 정밀농업 확대 등으로 농업용 드론을 활용하여 농업생산성 향상에 기여하고 있음",
  "화학물질 유출같은 특수사고 발생 시 현장에 우선 투입돼 위험요소를 미리 파악하고, 사고 수습부터 소방관의 안전까지 확보 아울러 고고도 영상과 입체적인 현장 분석을 통해 대형‧특수재난 및 실종자 수색 시 효과적인 지휘체계 구성에 도움을 줌",

];

function SliderImg() {
  const [explainDeOpen, setExplainDeOpen] = useState(false);

  const openExplainDe = () => {
    setExplainDeOpen(true);
  };
  const closeExplainDe = () => {
    setExplainDeOpen(false);
  };



  const slideRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isSlide, setIsSlide] = useState(false);
  const [x, setX] = useState(0);


  const [isClick, setIsClick] = useState(false);
  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  const [mouseUpClientX, setMouseUpClientX] = useState(0);


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const increaseClick = async () => {
    if (isSlide) {
      return;
    }
    setX(-56);
    setIsSlide(true);
    await setTimeout(() => {
      setIndex((prev) => (prev === 3 ? 0 : prev + 1));
      setX(0);
      setIsSlide(false);
    }, 500);

  };
  const decreaseClick = async () => {
    if (isSlide) {
      return;
    }
    setX(+56);
    setIsSlide(true);
    await setTimeout(() => {
      setIndex((prev) => (prev === 0 ? 3 : prev - 1));
      setX(0);
      setIsSlide(false);
    }, 500);
  };


  const morePrevImg = index === 1 ? 3 : index === 0 ? 2 : index - 2;
  const PrevImg = index === 0 ? 3 : index - 1;
  const NextImg = index === 3 ? 0 : index + 1;
  const moreNextImg = index === 3 ? 1 : index === 2 ? 0 : index + 2;


  const onMouseDown = (event) => {
    setIsClick(true);
    setMouseDownClientX(event.pageX);
    console.log(slideRef);
  };
  const onMouseLeave = (event) => {
    setIsClick(false);
  };
  const onMouseUp = (event) => {
    setIsClick(false);
    const imgX = mouseDownClientX - mouseUpClientX;

    if (imgX < -250) {
      slideRef.current.style.transform = `translateX(${imgX}px)`;
      increaseClick();
    } else if (imgX > 250) {
      slideRef.current.style.transform = `translateX(${imgX}px)`;
      decreaseClick();
    }
  };
  const onMouseMove = (event) => {
    if (!isClick) return;
    event.preventDefault();
    setMouseUpClientX(event.pageX);
    const imgX = mouseDownClientX - mouseUpClientX;
    if (Math.abs(imgX) > 100) {

    }
  };
  const resizeWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.removeEventListener("resize", resizeWidth);
    };
  }, []);

  useEffect(() => {
    const autoPage = setTimeout(() => {
      setX(-56);
      setIsSlide(true);
      setTimeout(() => {
        setIndex((prev) => (prev === 3 ? 0 : prev + 1));
        setX(0);
        setIsSlide(false);
      }, 500);
    }, 5000);
    return () => {
      clearTimeout(autoPage);
    };
  }, [index, isClick]);
  console.log(`Browser Size : ${windowWidth}`);
  return (
    <Wrapper>
      <LeftButton
        style={{
          left:
            windowWidth > 1800
              ? `18.5%`
              : windowWidth > 1500
                ? `10%`
                : windowWidth > 1300
                  ? `5%`
                  : `0%`,
          visibility: windowWidth < 1335 ? "hidden" : "visible",
        }}
        onClick={decreaseClick}
      >
        <i class="fas fa-chevron-left"></i>
      </LeftButton>
      <Row
        key={index}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        ref={slideRef}
        style={{
          transform: `translateX(${x}vw)`,
        }}
      >
        <Including>
          <LastImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                    ? "185px"
                    : "250px",
            }}
            src={WantedImg[morePrevImg]}
          ></LastImg>
        </Including>
        <Including>
          <LastImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                    ? "185px"
                    : "250px",
            }}
            src={WantedImg[PrevImg]}
          ></LastImg>
        </Including>
        <ImgWrapper>
          <Img
            style={{
              opacity: 1,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                    ? "185px"
                    : "250px",
            }}
            src={WantedImg[index]}
          />
          {!isSlide && windowWidth > 1200 ? (
            <ImgMake>
              <Title>{wantedTitle[index]}</Title>
              <Making>{wantedMake[index]}</Making>
              <LinkSpan>
                <React.Fragment>
                  <button className="detailButton" onClick={openExplainDe}>Details </button>
                  <ExplainDetails open={explainDeOpen} close={closeExplainDe} header="Details">{detailContent[index]}</ExplainDetails>
                </React.Fragment>
              </LinkSpan>
            </ImgMake>
          ) : null}
          {!isSlide && windowWidth <= 1200 ? (
            <SmallCover>
              <SmallTitle>{wantedTitle[index]}</SmallTitle>
              <SmallMake>{wantedMake[index]}</SmallMake>
              <LinkSpan>
                <React.Fragment>
                  <button className="detailButton" onClick={openExplainDe}>Details </button>
                  <ExplainDetails open={explainDeOpen} close={closeExplainDe} header="Details">{detailContent[index]}</ExplainDetails>
                </React.Fragment>
              </LinkSpan>
            </SmallCover>
          ) : null}
        </ImgWrapper>
        <Including>
          <LastImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                    ? "185px"
                    : "250px",
            }}
            src={WantedImg[NextImg]}
          ></LastImg>
        </Including>
        <Including>
          <LastImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                    ? "185px"
                    : "250px",
            }}
            src={WantedImg[moreNextImg]}
          ></LastImg>
        </Including>
      </Row>

      <RightButton
        style={{
          right:
            windowWidth > 1800
              ? `18.5%`
              : windowWidth > 1500
                ? `10%`
                : windowWidth > 1200
                  ? `5%`
                  : `0%`,
          visibility: windowWidth < 1335 ? "hidden" : "visible",
        }}
        onClick={increaseClick}
      >
        <i class="fas fa-chevron-right"></i>
      </RightButton>
    </Wrapper>
  );
}

export default SliderImg;