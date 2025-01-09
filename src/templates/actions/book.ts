"use server";

import { revalidatePath } from "next/cache";
import { createBook, updateBook } from "@/db/book";
import {
  type Book,
  type BookOptionalDefaults,
  BookSchema,
  BookOptionalDefaultsSchema,
} from "@/prisma-zod/index";

// 新規登録処理を行うサーバーアクション関数
export async function createBookAction(data: BookOptionalDefaults) {
  // Zodによるバリデーションを実行する
  const result = BookOptionalDefaultsSchema.safeParse(data);

  // バリデーション失敗の場合、errorを返す
  if (!result.success) {
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // バリデーション成功の場合、DB処理
  const res = await createBook(data);
  // 一覧画面のキャッシュ削除
  revalidatePath("/book");
  // 結果を返す
  return res;
}

// 更新処理を行うサーバーアクション関数
export async function editBookAction(data: Book) {
  // Zodによるバリデーションを実行する
  const result = BookSchema.safeParse(data);

  // バリデーション失敗の場合、errorを返す
  if (!result.success) {
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }
  // バリデーション成功の場合、DB処理
  const res = await updateBook(data);

  // 一覧画面のキャッシュ削除
  revalidatePath("/book");
  // 結果を返す
  return res;
}
