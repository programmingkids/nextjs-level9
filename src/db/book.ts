import prisma from "@/db/prisma";
import { type BookOptionalDefaults, type Book } from "@/prisma-zod/index";

export async function getBooks() {
  // 全件取得
  const result = await prisma.book.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      author: true,
    },
  });
  return result;
}

export async function createBook(data: BookOptionalDefaults) {
  // 新規登録
  try {
    const result = await prisma.book.create({
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

type BookReturnType =
  | {
      success: true;
      data: Book;
    }
  | {
      success: false;
    };

export async function getBookById(id: number): Promise<BookReturnType> {
  // 1件を取得
  const result = await prisma.book.findUnique({
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

export async function updateBook(data: Book) {
  // 更新
  try {
    const result = await prisma.book.update({
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

export async function deleteBookById(id: number) {
  // 削除
  try {
    const result = await prisma.book.delete({
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
