     
# ✏QRAB-frontend✏

<br>

[AI 기반 학습 보조 서비스 QRAB]
![image](https://github.com/user-attachments/assets/9104aa2b-1343-455d-ba3b-2d10650c7c53)


<br>

## 💻 프로젝트 소개

온라인으로 노트를 작성하는 대학생을 위한, 작성된 노트를 기반으로 퀴즈를 생성하고 결과 분석을 통해 복습을 유도하는 AI 기반 웹서비스입니다.

## ⏰ 개발 기간

- 24.08.12  ~

<br>

## 📝 규칙

#### 커밋 컨벤션

- gitmoji를 사용하는 것을 원칙으로 함.
  - 깃모지 + 한글 커밋 메시지 형식으로 작성
  - Gitmoji 컨벤션 예시
    - 💄  UI : UI, 스타일 관련 파일 추가 및 수정
    - ✨ feat : 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정
    - 🐛 fix : 기능에 대한 버그 수정
    - 🛠️ build : 빌드 관련 수정
    - 🔧 chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
    - 👷 ci : CI 관련 설정 수정
    - 📝 docs : 문서 파일 추가 및 수정
    - 🎨 style : 코드 스타일, 포맷팅에 대한 수정
    - ♻️ refactor : 기능의 변화가 아닌 코드 리팩터링 ex) 변수 이름 변경
    - ✅ test : 테스트 코드 추가/수정
    - 🔖 release : 버전 릴리즈

<br>

#### PR 템플릿

```
# 구현 기능
  - 구현한 기능을 요약하여 정리합니다.

# 구현 상태 (선택)
  - img, gif, video...
  - 혹은 내용 정리

# Resolve
  - 이슈 태그(ex: #7)
```

- PR 체크 리스트
  - PR 제목 형식 : `[Type] PR 제목`
    - ex. `[Chore] 프로젝트 구조 설정`
    - 타입은 대문자로
  - label 설정
  - Code Review 요청 / 작업자 Assign
  - PR 확인한 사람은 확인 코멘트 달기. 작성자 외 2명 확인 후 마지막 사람이 merge

<br>

#### issue 규칙

- 각 기능에 맞는 이슈 템플릿 작성 (작업 및 변경사항 확인용)
- to-do에 구현해야할 기능을 작성하고, 구현이 끝나면 체크표시

<br>

#### branch 규칙

- 브랜치 네이밍 규칙: `feat/#{issue 번호}`
- - 이슈 생성후, branch에서 추가할 내용(ex. feat, design, refactor, ...)과 이슈번호를 branch 이름으로 생성
  - 예시: `feat/#12`, `design/#27`
- `feat -> develop -> main(master)` 순으로 merge
- `feat` : 각 기능을 개발하는 브랜치
- `develop` : 각 기능의 개발을 완료하고 테스트 완료 후 병합하는 브랜치
- `main` : 배포 브랜치
