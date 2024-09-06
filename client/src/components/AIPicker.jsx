import CustomButton from "./CustomButton";

export default function AIPicker({
  prompt,
  setPrompt,
  generatingImg,
  handleSubmit,
}) {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
    </div>
  );
}
