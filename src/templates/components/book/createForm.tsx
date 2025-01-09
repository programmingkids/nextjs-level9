"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createBookAction } from "@/actions/book";
import { SuccessModal } from "@/components/ui/modal";
import { ErrorModal } from "@/components/ui/errorModal";
import {
  type Author,
  type BookOptionalDefaults,
  BookOptionalDefaultsSchema,
} from "@/prisma-zod/index";

type Props = {
  authors: Author[];
};

export const BookCreateForm = ({ authors }: Props) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<BookOptionalDefaults>();
  const router = useRouter();

  // Formの入力パーツの初期化
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
    setError,
    clearErrors,
    reset,
  } = useForm<BookOptionalDefaults>({
    resolver: zodResolver(BookOptionalDefaultsSchema),
  });

  // onSubmitイベントのハンドラー
  const onSubmit: SubmitHandler<BookOptionalDefaults> = async (
    data: BookOptionalDefaults,
  ) => {
    // 送信時にエラー表示を解除
    clearErrors();
    // サーバアクションを起動
    const result = await createBookAction(data);
    // サーバー側でエラー
    if (!result.success) {
      Object.entries(result.error!).map(([k, v]) => {
        setError(`root.${k}`, { message: v[0] });
      });
      return;
    }
    // 登録成功の場合、モーダルを表示する
    setData(result.data);
    setOpen(true);
    // フォームをクリアする
    reset();
  };

  const onSuccess = () => {
    router.push("/book");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            TITLE
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
            {...register("title")}
          />
          <div className="mt-1 mb-4 text-red-500 font-bold">
            {errors.title?.message}
            {errors.root?.title?.message}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            PRICE
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
            {...register("price", {
              valueAsNumber: true,
            })}
          />
          <div className="mt-1 mb-4 text-red-500 font-bold">
            {errors.price?.message}
            {errors.root?.price?.message}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            AUTHOR
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
            {...register("authorId", {
              valueAsNumber: true,
            })}
          >
            {authors.map((author) => (
              <option value={author.id}>{author.name}</option>
            ))}
          </select>
          <div className="mt-1 mb-4 text-red-500 font-bold">
            {errors.authorId?.message}
            {errors.root?.authorId?.message}
          </div>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
            disabled={!isDirty || !isValid || isSubmitting}
          >
            登録
          </button>
        </div>
      </form>
      <SuccessModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={onSuccess}
        data={data}
        title="登録完了"
        successText="一覧へ移動"
      />
      {errors.root?.server_error?.message && (
        <ErrorModal
          onSuccess={onSuccess}
          message={errors.root?.server_error?.message}
          title="エラー"
          successText="一覧へ移動"
        />
      )}
    </>
  );
};
