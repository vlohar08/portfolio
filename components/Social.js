import Image from "next/image";

const Social = () => {
  const iconSize = 20;
  return (
    <div className="w-[100px] flex justify-between">
      <Image
        src="/assets/github.svg"
        width={iconSize}
        height={iconSize}
        alt="github-profile"
      />
      <Image
        src="/assets/leetcode.svg"
        width={iconSize}
        height={iconSize}
        alt="leetcode-profile"
      />
      <Image
        src="/assets/linkedin.svg"
        width={iconSize}
        height={iconSize}
        alt="linkedin-profile"
      />
    </div>
  );
};

export default Social;
