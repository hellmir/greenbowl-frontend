const notes = [
  { id: 0, title: "정보 타이틀", value: "데이터 영구 삭제 공지" },
  { id: 1, title: "정보 타이틀", value: "데이터 영구 삭제 공지" },
  { id: 2, title: "정보 타이틀", value: "데이터 영구 삭제 공지" },
];

const Note = () => {
  return (
    <div className="mt-5 min-h-[60vh]">
      <div className=" w-64 flex flex-col gap-3">
        <p className=" heading-l text-content-secondary">
          회원 탈퇴 시 아래 유의 사항을 확인해 주세요.
        </p>
      </div>
      <div className="mt-[4.5rem]">
        <ul className="flex flex-col gap-3">
          {notes.map((note) => (
            <li key={note.id} className="ml-4 list-disc">
              <div className=" heading-s text-content-secondary">
                {note.title}
              </div>
              <div className="mt-1 paragraph-s text-content-tertiary">
                {note.value}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Note;
