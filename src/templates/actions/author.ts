"use server";

import { revalidatePath } from "next/cache";
import { createAuthor, updateAuthor } from "@/db/author";
import {
  type Author,
  type AuthorOptionalDefaults,
  AuthorSchema,
  AuthorOptionalDefaultsSchema,
} from "@/prisma-zod/index";

// 新規登録処理を行うサーバーアクション関数
export async function createAuthorAction(data: AuthorOptionalDefaults) {
  // Zodによるバリデーションを実行する
  const result = AuthorOptionalDefaultsSchema.safeParse(data);

  // バリデーション失敗の場合、errorを返す
  if (!result.success) {
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // バリデーション成功の場合、DB処理
  const res = await createAuthor(data);
  // 一覧画面のキャッシュ削除
  revalidatePath("/author");
  // 結果を返す
  return res;
}

// 更新処理を行うサーバーアクション関数
export async function editAuthorAction(data: Author) {
  // Zodによるバリデーションを実行する
  const result = AuthorSchema.safeParse(data);

  // バリデーション失敗の場合、errorを返す
  if (!result.success) {
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // バリデーション成功の場合、DB処理
  const res = await updateAuthor(data);

  // 一覧画面のキャッシュ削除
  revalidatePath("/author");
  // 結果を返す
  return res;
}
