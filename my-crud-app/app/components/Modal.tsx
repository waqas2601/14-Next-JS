interface ModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}
export default function Modal({ message, onConfirm, onCancel }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
        <p className="mb-4">{message}</p>
        <div className="flex justify-around">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
