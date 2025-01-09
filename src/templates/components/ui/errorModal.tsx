'use client';

import { useState, useEffect, useRef } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

type Props = {
  onSuccess: () => void;
  message: string | undefined;
  successText: string;
  title: string;
};

export const ErrorModal = ({
  onSuccess,
  message,
  successText,
  title,
}: Props) => {
  const [open, setOpen] = useState(true);
  // Refオブジェクト作成
  const modalRef = useRef<HTMLDivElement>(null);
  // キーダウンイベントハンドラー
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // ESCでモーダルを閉じる
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };
  // モーダルにフォーカスを設定する
  useEffect(() => {
    // モダールのRefにフォーカスする
    modalRef.current?.focus();
  }, [open]);
  
  // モーダルを閉じる
  const onClose = () => {
    setOpen(false);
  }

  return open ? (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={0}
      role="dialog"
      aria-modal
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-50 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-800/50"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      ref={modalRef}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative p-4 w-full max-w-2xl max-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="bg-white rounded-lg">
          <div className="flex justify-center relative p-4 md:p-5 rounded-t-lg border-b bg-red-500 text-white">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button
              type="button"
              className="text-white bg-transparent hover:bg-red-800 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center absolute right-5"
              data-modal-hide="static-modal"
              onClick={onClose}
            >
              <HiOutlineXMark />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-5">
            <div className="text-center">
              <div className="pb-4 font-bold">{message}</div>
            </div>
          </div>
          <div className="flex items-center p-4 md:p-5 border-t rounded-b-lg">
            <button
              data-modal-hide="static-modal"
              type="button"
              className="w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={onSuccess}
            >
              {successText}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
