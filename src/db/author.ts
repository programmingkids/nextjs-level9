import prisma from "@/db/prisma";
import { type AuthorOptionalDefaults, type Author } from "@/prisma-zod/index";

export async function getAuthors() {
  // 全件取得
  const result = await prisma.author.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return result;
}

export async function createAuthor(data: AuthorOptionalDefaults) {
  // 新規登録
  try {
    const result = await prisma.author.create({
      data,
    });
    return {
      success: true,
      data: result,
    };
  } catch {
    // データベースエラー発生
    return {
      success: false,
      error: { server_error: ["Database Error"] },
    };
  }
}

type AuthorReturnType =
  | {
      success: true;
      data: Author;
    }
  | {
      success: false;
    };

export async function getAuthorById(id: number): Promise<AuthorReturnType> {
  // 1件を取得
  const result = await prisma.author.findUnique({
    where: {
      id,
    },
  });
  return result !== null
    ? {
        success: true,
        data: result,
      }
    : {
        success: false,
      };
}

export async function updateAuthor(data: Author) {
  // 更新
  try {
    const result = await prisma.author.update({
      data,
      where: {
        id: data.id,
      },
    });
    return {
      success: true,
      data: result,
    };
  } catch {
    // データベースエラー発生
    return {
      success: false,
      error: { server_error: ["Database Error"] },
    };
  }
}

export async function deleteAuthorById(id: number) {
  // 削除
  try {
    const result = await prisma.author.delete({
      where: {
        id,
      },
    });
    return {
      success: true,
      data: result,
    };
  } catch {
    // データベースエラー発生
    return {
      success: false,
      error: { server_error: ["Database Error"] },
    };
  }
}
