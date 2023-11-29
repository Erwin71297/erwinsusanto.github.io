  "use client";

  import { Dialog } from "@headlessui/react";
  
  export function Modal({ onClose = () => {}, children }) {
    return (
      <Dialog
        static
        open={true}
        onClose={onClose}
        className="fixed inset-0 z-10 flex items-center justify-center"
      >
        <Dialog.Overlay
          className="fixed inset-0 bg-gray-800/60"
        />
        <div className="relative flex items-center justify-center w-1/2">
          {children}
        </div>
      </Dialog>
    );
  }

  export default Modal;