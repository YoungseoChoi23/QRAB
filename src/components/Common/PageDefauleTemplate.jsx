import { useEffect, useState } from "react";
import useIsBrightModeStore from "../../store/isBrightModeStore";
import NavBar from "../../components/Common/NavBar";

const PageDefauleTemplate = ({ pageName, children }) => {
  const { isBrightMode, setIsBrightMode } = useIsBrightModeStore(); // 배경 모드 상태
  const [isDragging, setIsDragging] = useState(false); // 드래그 상태
  const [startY, setStartY] = useState(0); // 드래그 시작 위치
  const [currentY, setCurrentY] = useState(0); // 현재 드래그 위치
  const [offsetY, setOffsetY] = useState(0); // 드래그에 따른 y 위치
  const [shouldAnimate, setShouldAnimate] = useState(false); // 애니메이션 트리거
  const [animationCompleted, setAnimationCompleted] = useState(false); // 애니메이션 완료 감지
  const [init, setInit] = useState(true);
  const isAnalytics = /^\/(learning-analysis)(\/(monthly|detail))?$/.test(
    window.location.pathname
  );
  useEffect(() => {
    console.log(isAnalytics);
  }, []);
  const handleMouseDown = (e) => {
    if (init) {
      setStartY(e.clientY);
      if (!isDragging && !animationCompleted) {
        setIsDragging(true);
      }
      setInit(false);
    } else {
      setIsDragging(true);
    }
  }; //드래그 시작

  const handleMouseMove = (e) => {
    if (isDragging) {
      const currentMouseY = e.clientY;
      const offset = startY - currentMouseY;

      if (currentMouseY >= startY) {
        return;
      }

      setCurrentY(currentMouseY);
      setOffsetY(offset);

      if (offset > 50) {
        // 50px 이상 드래그 시 애니메이션 수행
        setShouldAnimate(true);
      } else {
        setShouldAnimate(false);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  }; //마우스 놓을 때 드래그 종료

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (shouldAnimate) {
      // 자동으로 위로 올라가는 애니메이션
      const animation = setInterval(() => {
        setOffsetY((prevOffsetY) => {
          const newOffset = prevOffsetY + 10; // 속도 조절 가능

          if (newOffset >= 120) {
            // 120px까지 올라가면 애니메이션 종료
            clearInterval(animation);
            setIsBrightMode(true); // BrightMode로 전환
            setAnimationCompleted(true); // 애니메이션 완료
          }

          return newOffset;
        });
      }, 16);

      return () => clearInterval(animation);
    }
  }, [shouldAnimate, setIsBrightMode]);

  const handleScroll = () => {
    if (window.scrollY >= 195 && !isBrightMode) {
      // 스크롤 위치가 195px 이상이면 BrightMode로 전환
      setIsBrightMode(true);
    }
  };

  useEffect(() => {
    if (isBrightMode) {
      window.scrollTo(0, 0); // BrightMode로 전환 시 스크롤 위치를 최상단으로 이동
    }
  }, [isBrightMode]);

  useEffect(() => {
    {
      pageName !== "학습 분석" &&
        pageName !== "Qrab에서 나만의 맞춤형 퀴즈를 생성해 보세요!" &&
        window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isBrightMode]);

  return (
    <>
      {!isBrightMode ? (
        <>
          <NavBar />
          <div
            onMouseDown={handleMouseDown}
            style={{
              transform: `translateY(${-offsetY}px)`,
              transition: "transform 0.5s ease-out",
            }}
            className="relative"
          >
            <div className="absolute w-full h-[2rem] cursor-pointer"></div>
            <div className="flex justify-center">
              <div className="text-2xl font-bold text-neutralwhite mt-[80px] flex justify-center absolute top-[-150px]">
                {pageName}
              </div>
            </div>
            <div
              className={`w-full h-screen rounded-t-[40px] ${
                isAnalytics ? "bg-secondary_bg" : "bg-neutralwhite"
              } `}
            >
              {children}
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`w-full h-screen ${
              isAnalytics ? "bg-secondary_bg" : "bg-neutralwhite"
            } `}
          >
            <NavBar />
            {children}
          </div>
        </>
      )}
      ;
    </>
  );
};

export default PageDefauleTemplate;
