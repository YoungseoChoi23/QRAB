import { useEffect, useState } from "react";
import addCategoryImg from "../../assets/storenotepage/add_category.svg";
import addNoteImg from "../../assets/storenotepage/add_note.svg";
import AddButton from "./AddButton";
import RecentNote from "./recentNote";
import icon1 from "../../assets/storenotepage/category_icon1.svg";
import icon2 from "../../assets/storenotepage/category_icon2.svg";
import icon3 from "../../assets/storenotepage/category_icon3.svg";
import create_category from "../../assets/storenotepage/create_category_icon.svg";
import FirstCategoryTab from "./FirstCategoryTab";
import SecondCategoryTab from "./SecondCategoryTab";
import StoredNote from "./StoredNote";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";
const firstTab = [
  { id: 0, name: "전체" },
  { id: 1, name: "디자인" },
  { id: 2, name: "기획" },
  { id: 3, name: "상품 전략" },
];

const NoteStore = () => {
  const [selectTab, setSelectTab] = useState();
  const handleTabClick = (id) => {
    setSelectTab(id);
  };
  return (
    <div className="flex flex-col items-center overflow-y-hidden">
      <div className="w-screen min-w-[1396px] h-[320px] rounded-t-[40px] bg-neutralwhite">
        <div className="flex flex-col mt-[65px] ml-[170px] gap-[24px]">
          <div className="font-semibold text-[20px] text-neutralblack">
            최근 추가한 노트
          </div>
          <div className="flex">
            <div className="flex flex-col gap-[11px]">
              <AddButton
                buttonImg={addNoteImg}
                text="노트 추가하기"
                detailText="작성한 필기를 저장하세요!"
              />
              <AddButton
                buttonImg={addCategoryImg}
                text="카테고리 추가하기"
                detailText="노트 카테고리를 추가하세요!"
              />
            </div>
            <div className="ml-[16px] flex gap-[16px]">
              <RecentNote
                icon={icon1}
                categoryName="디자인"
                noteName="타이포그래피"
                date="8/22 (월)"
              />
              <RecentNote
                icon={icon2}
                categoryName="디자인디자인디자인디자인디자인디자인디자인디자인디자인"
                noteName="타이포그래피타이포그래피타이포그래피타이포그래피타이포그래피타이포그래피 천일야화천일야화천일야화천일야화천일야화천일야화천일야화천일야화"
                date="8/22 (월)"
              />
              <RecentNote
                icon={icon3}
                categoryName="디자인디자인디자인디자인디자인디자인디자인디자인디자인"
                noteName="타이포그래피타이포그래피타이포그래피타이포그래피타이포그래피타이포그래피 천일야화천일야화천일야화천일야화천일야화천일야화천일야화천일야화"
                date="8/22 (월)"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-screen min-w-[1396px] h-screen min-h-[813px] bg-secondary_bg`}
      >
        <div className="mt-[40px] ml-[170px]">
          <div className="flex items-center gap-[16px]">
            <div className="font-semibold text-[20px] text-neutralblack">
              저장된 노트
            </div>
            <div className="text-[14px] text-gray_400 font-semibold">
              총 4개
            </div>
          </div>
          <div className="flex gap-[8px] mt-[24px]">
            <div>
              <img src={create_category} />
            </div>
            {firstTab.map((it) => (
              <FirstCategoryTab
                firstTab={firstTab}
                tabName={it.name}
                index={it.id}
                handleTabClick={handleTabClick}
                selectTab={selectTab}
              />
            ))}
          </div>
          <div className="w-[948px] border-b-[1px] border-gray_100 mt-[16px] mb-[16px]"></div>
          <div className="flex gap-[8px]">
            <SecondCategoryTab tabName="타이포그래피" />
            <SecondCategoryTab tabName="영상디자인" />
            <SecondCategoryTab tabName="Blender" />
            <SecondCategoryTab tabName="C4D" />
            <SecondCategoryTab tabName="컴그운" />
            <SecondCategoryTab tabName="정보처리기사" />
          </div>
          <div className="mt-[32px]">
            <StoredNote
              noteIcon={noteIcon1}
              noteName="JavaScript Sec05_4 React에서 LifeCycle 제어하기 (useEffect)"
              noteContent="노트 내용의 첫 줄이 여기에 보이도록 설정해 주세요 내용이 두 줄 이상으로 길어지면 점 처리 됩니다"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoteStore;
