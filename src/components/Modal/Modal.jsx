import "./Modal.css";

export function Modal({ visible, onClose, children }) {
  if (!visible) {
    return <></>;
  }
  return (
    <div className="modal-overlay">
      <div className="modal">
        {children}
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
}
