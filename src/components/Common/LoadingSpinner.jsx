import spinner from "../../assets/common/spinner.svg";

const LoadingSpinner = ({ loadingText }) => (
  <div className="flex flex-col mt-[60px] items-center justify-center gap-10">
    <p className="text-xl font-bold">{loadingText}!</p>
    <img src={spinner} alt="spinner" className="animate-spin w-28" />
  </div>
);

export default LoadingSpinner;
