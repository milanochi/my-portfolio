import { ExternalLink } from "lucide-react";

const ResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Make sure resume.pdf is in your public folder
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="cursor-pointer">
      <ExternalLink
        className="inline-block text-[#9CA3AF] mr-2 -mt-1 text-sm"
        style={{ height: "18px", width: "18px" }}
      />
      Download Resume
    </button>
  );
};

export default ResumeButton;
