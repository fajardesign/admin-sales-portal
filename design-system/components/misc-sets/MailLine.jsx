// figma node: 41:837 mail-line
export function MailLine(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-strong-950)",
      ...props.style,
    }}>
      <svg width={18} height={15} viewBox="0 0 18 15" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 4.5,
        width: 18,
        height: 15,
      }}>
        <path d={"M 0.9 0 L 17.1 0 C 17.339 0 17.568 0.095 17.736 0.264 C 17.905 0.432 18 0.661 18 0.9 L 18 14.1 C 18 14.339 17.905 14.568 17.736 14.736 C 17.568 14.905 17.339 15 17.1 15 L 0.9 15 C 0.661 15 0.432 14.905 0.264 14.736 C 0.095 14.568 0 14.339 0 14.1 L 0 0.9 C 0 0.661 0.095 0.432 0.264 0.264 C 0.432 0.095 0.661 0 0.9 0 Z M 16.2 3.814 L 9.065 10.204 L 1.8 3.794 L 1.8 13.2 L 16.2 13.2 L 16.2 3.814 Z M 2.26 1.8 L 9.055 7.796 L 15.752 1.8 L 2.26 1.8 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default MailLine;
