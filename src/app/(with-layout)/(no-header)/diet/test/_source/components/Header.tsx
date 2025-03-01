import BackIcon from "@/components/icons/backIcon";

interface Props {
  handleClickBackIcon: () => void;
}

const Header = ({ handleClickBackIcon }: Props) => {
  return (
    <div className="h-[3.375rem] w-full max-w-[35.5rem] flex items-center justify-between fixed z-30 bg-scale-yellowgreen-100 top-0">
      <BackIcon onClick={handleClickBackIcon} stroke="content-tertiary" />
    </div>
  );
};

export default Header;
