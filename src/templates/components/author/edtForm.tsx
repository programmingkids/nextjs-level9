"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editAuthorAction } from "@/actions/author";
import { SuccessModal } from "@/components/ui/modal";
import { ErrorModal } from "@/components/ui/errorModal";
import { type Author, AuthorSchema } from "@/prisma-zod/index";

type Props = {
  defaultValues: Author;
};

export const AuthorEditForm = ({ defaultValues }: Props) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Author>();
  const router = useRouter();

  // Formの入力パーツの初期化
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<Author>({
    resolver: zodResolver(AuthorSchema),
    defaultValues,
  });

  // onSubmitイベントのハンドラー
  const onSubmit: SubmitHandler<Author> = async (data: Author) => {
    // 送信時にエラー表示を解除
    clearErrors();
    // サーバアクションを起動
    const result = await editAuthorAction(data);
    // サーバー側でエラー
    if (!result.success) {
      Object.entries(result.error!).map(([k, v]) => {
        setError(`root.${k}`, { message: v[0] });
      });
      return;
    }
    // 更新成功の場合、モーダルを表示する
    setData(result.data);
    setOpen(true);
  };

  const onSuccess = () => {
    router.push("/author");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            NAME
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
            {...register("name")}
          />
          <div className="mt-1 mb-4 text-red-500 font-bold">
            {errors.name?.message}
            {errors.root?.name?.message}
          </div>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
            disabled={isSubmitting}
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
        title="更新完了"
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
