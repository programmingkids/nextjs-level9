import { z } from "zod";
import type { Prisma } from "@prisma/client";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  "ReadUncommitted",
  "ReadCommitted",
  "RepeatableRead",
  "Serializable",
]);

export const AuthorScalarFieldEnumSchema = z.enum(["id", "name"]);

export const RelationLoadStrategySchema = z.enum(["query", "join"]);

export const BookScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "price",
  "authorId",
]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const QueryModeSchema = z.enum(["default", "insensitive"]);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// AUTHOR SCHEMA
/////////////////////////////////////////

export const AuthorSchema = z.object({
  id: z.number().int(),
  name: z
    .string({ invalid_type_error: "文字を入力してください" })
    .min(1, { message: "必須です" })
    .max(10, { message: "10文字以内です" }),
});

export type Author = z.infer<typeof AuthorSchema>;

/////////////////////////////////////////
// AUTHOR PARTIAL SCHEMA
/////////////////////////////////////////

export const AuthorPartialSchema = AuthorSchema.partial();

export type AuthorPartial = z.infer<typeof AuthorPartialSchema>;

// AUTHOR OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const AuthorOptionalDefaultsSchema = AuthorSchema.merge(
  z.object({
    id: z.number().int().optional(),
  }),
);

export type AuthorOptionalDefaults = z.infer<
  typeof AuthorOptionalDefaultsSchema
>;

// AUTHOR RELATION SCHEMA
//------------------------------------------------------

export type AuthorRelations = {
  books: BookWithRelations[];
};

export type AuthorWithRelations = z.infer<typeof AuthorSchema> &
  AuthorRelations;

export const AuthorWithRelationsSchema: z.ZodType<AuthorWithRelations> =
  AuthorSchema.merge(
    z.object({
      books: z.lazy(() => BookWithRelationsSchema).array(),
    }),
  );

// AUTHOR OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type AuthorOptionalDefaultsRelations = {
  books: BookOptionalDefaultsWithRelations[];
};

export type AuthorOptionalDefaultsWithRelations = z.infer<
  typeof AuthorOptionalDefaultsSchema
> &
  AuthorOptionalDefaultsRelations;

export const AuthorOptionalDefaultsWithRelationsSchema: z.ZodType<AuthorOptionalDefaultsWithRelations> =
  AuthorOptionalDefaultsSchema.merge(
    z.object({
      books: z.lazy(() => BookOptionalDefaultsWithRelationsSchema).array(),
    }),
  );

// AUTHOR PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type AuthorPartialRelations = {
  books?: BookPartialWithRelations[];
};

export type AuthorPartialWithRelations = z.infer<typeof AuthorPartialSchema> &
  AuthorPartialRelations;

export const AuthorPartialWithRelationsSchema: z.ZodType<AuthorPartialWithRelations> =
  AuthorPartialSchema.merge(
    z.object({
      books: z.lazy(() => BookPartialWithRelationsSchema).array(),
    }),
  ).partial();

export type AuthorOptionalDefaultsWithPartialRelations = z.infer<
  typeof AuthorOptionalDefaultsSchema
> &
  AuthorPartialRelations;

export const AuthorOptionalDefaultsWithPartialRelationsSchema: z.ZodType<AuthorOptionalDefaultsWithPartialRelations> =
  AuthorOptionalDefaultsSchema.merge(
    z
      .object({
        books: z.lazy(() => BookPartialWithRelationsSchema).array(),
      })
      .partial(),
  );

export type AuthorWithPartialRelations = z.infer<typeof AuthorSchema> &
  AuthorPartialRelations;

export const AuthorWithPartialRelationsSchema: z.ZodType<AuthorWithPartialRelations> =
  AuthorSchema.merge(
    z
      .object({
        books: z.lazy(() => BookPartialWithRelationsSchema).array(),
      })
      .partial(),
  );

/////////////////////////////////////////
// BOOK SCHEMA
/////////////////////////////////////////

export const BookSchema = z.object({
  id: z.number().int(),
  title: z
    .string({ invalid_type_error: "文字を入力してください" })
    .min(1, { message: "必須です" })
    .max(10, { message: "10文字以内です" }),
  price: z
    .number({ invalid_type_error: "数値を入力してください" })
    .int({ message: "整数を入力してください" })
    .min(0, { message: "0以上です" }),
  authorId: z
    .number({ invalid_type_error: "数値を入力してください" })
    .int({ message: "整数を入力してください" }),
});

export type Book = z.infer<typeof BookSchema>;

/////////////////////////////////////////
// BOOK PARTIAL SCHEMA
/////////////////////////////////////////

export const BookPartialSchema = BookSchema.partial();

export type BookPartial = z.infer<typeof BookPartialSchema>;

// BOOK OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const BookOptionalDefaultsSchema = BookSchema.merge(
  z.object({
    id: z.number().int().optional(),
  }),
);

export type BookOptionalDefaults = z.infer<typeof BookOptionalDefaultsSchema>;

// BOOK RELATION SCHEMA
//------------------------------------------------------

export type BookRelations = {
  author: AuthorWithRelations;
};

export type BookWithRelations = z.infer<typeof BookSchema> & BookRelations;

export const BookWithRelationsSchema: z.ZodType<BookWithRelations> =
  BookSchema.merge(
    z.object({
      author: z.lazy(() => AuthorWithRelationsSchema),
    }),
  );

// BOOK OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type BookOptionalDefaultsRelations = {
  author: AuthorOptionalDefaultsWithRelations;
};

export type BookOptionalDefaultsWithRelations = z.infer<
  typeof BookOptionalDefaultsSchema
> &
  BookOptionalDefaultsRelations;

export const BookOptionalDefaultsWithRelationsSchema: z.ZodType<BookOptionalDefaultsWithRelations> =
  BookOptionalDefaultsSchema.merge(
    z.object({
      author: z.lazy(() => AuthorOptionalDefaultsWithRelationsSchema),
    }),
  );

// BOOK PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type BookPartialRelations = {
  author?: AuthorPartialWithRelations;
};

export type BookPartialWithRelations = z.infer<typeof BookPartialSchema> &
  BookPartialRelations;

export const BookPartialWithRelationsSchema: z.ZodType<BookPartialWithRelations> =
  BookPartialSchema.merge(
    z.object({
      author: z.lazy(() => AuthorPartialWithRelationsSchema),
    }),
  ).partial();

export type BookOptionalDefaultsWithPartialRelations = z.infer<
  typeof BookOptionalDefaultsSchema
> &
  BookPartialRelations;

export const BookOptionalDefaultsWithPartialRelationsSchema: z.ZodType<BookOptionalDefaultsWithPartialRelations> =
  BookOptionalDefaultsSchema.merge(
    z
      .object({
        author: z.lazy(() => AuthorPartialWithRelationsSchema),
      })
      .partial(),
  );

export type BookWithPartialRelations = z.infer<typeof BookSchema> &
  BookPartialRelations;

export const BookWithPartialRelationsSchema: z.ZodType<BookWithPartialRelations> =
  BookSchema.merge(
    z
      .object({
        author: z.lazy(() => AuthorPartialWithRelationsSchema),
      })
      .partial(),
  );
