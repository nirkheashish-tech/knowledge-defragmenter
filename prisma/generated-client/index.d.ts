
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Concept
 * 
 */
export type Concept = $Result.DefaultSelection<Prisma.$ConceptPayload>
/**
 * Model DocumentConcept
 * 
 */
export type DocumentConcept = $Result.DefaultSelection<Prisma.$DocumentConceptPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Documents
 * const documents = await prisma.document.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Documents
   * const documents = await prisma.document.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs>;

  /**
   * `prisma.concept`: Exposes CRUD operations for the **Concept** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Concepts
    * const concepts = await prisma.concept.findMany()
    * ```
    */
  get concept(): Prisma.ConceptDelegate<ExtArgs>;

  /**
   * `prisma.documentConcept`: Exposes CRUD operations for the **DocumentConcept** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentConcepts
    * const documentConcepts = await prisma.documentConcept.findMany()
    * ```
    */
  get documentConcept(): Prisma.DocumentConceptDelegate<ExtArgs>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Document: 'Document',
    Concept: 'Concept',
    DocumentConcept: 'DocumentConcept',
    Setting: 'Setting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "document" | "concept" | "documentConcept" | "setting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Concept: {
        payload: Prisma.$ConceptPayload<ExtArgs>
        fields: Prisma.ConceptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConceptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConceptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConceptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConceptPayload>
          }
          findFirst: {
            args: Prisma.ConceptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConceptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConceptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConceptPayload>
          }
          findMany: {
            args: Prisma.ConceptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConceptPayload>[]
          }
          create: {
            args: Prisma.ConceptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConceptPayload>
          }
          createMany: {
            args: Prisma.ConceptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConceptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConceptPayload>[]
          }
          delete: {
            args: Prisma.ConceptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConceptPayload>
          }
          update: {
            args: Prisma.ConceptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConceptPayload>
          }
          deleteMany: {
            args: Prisma.ConceptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConceptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConceptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConceptPayload>
          }
          aggregate: {
            args: Prisma.ConceptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConcept>
          }
          groupBy: {
            args: Prisma.ConceptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConceptGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConceptCountArgs<ExtArgs>
            result: $Utils.Optional<ConceptCountAggregateOutputType> | number
          }
        }
      }
      DocumentConcept: {
        payload: Prisma.$DocumentConceptPayload<ExtArgs>
        fields: Prisma.DocumentConceptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentConceptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConceptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentConceptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConceptPayload>
          }
          findFirst: {
            args: Prisma.DocumentConceptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConceptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentConceptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConceptPayload>
          }
          findMany: {
            args: Prisma.DocumentConceptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConceptPayload>[]
          }
          create: {
            args: Prisma.DocumentConceptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConceptPayload>
          }
          createMany: {
            args: Prisma.DocumentConceptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentConceptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConceptPayload>[]
          }
          delete: {
            args: Prisma.DocumentConceptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConceptPayload>
          }
          update: {
            args: Prisma.DocumentConceptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConceptPayload>
          }
          deleteMany: {
            args: Prisma.DocumentConceptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentConceptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentConceptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConceptPayload>
          }
          aggregate: {
            args: Prisma.DocumentConceptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentConcept>
          }
          groupBy: {
            args: Prisma.DocumentConceptGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentConceptGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentConceptCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentConceptCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    conceptLinks: number
  }

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conceptLinks?: boolean | DocumentCountOutputTypeCountConceptLinksArgs
  }

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountConceptLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentConceptWhereInput
  }


  /**
   * Count Type ConceptCountOutputType
   */

  export type ConceptCountOutputType = {
    documentLinks: number
  }

  export type ConceptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentLinks?: boolean | ConceptCountOutputTypeCountDocumentLinksArgs
  }

  // Custom InputTypes
  /**
   * ConceptCountOutputType without action
   */
  export type ConceptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConceptCountOutputType
     */
    select?: ConceptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConceptCountOutputType without action
   */
  export type ConceptCountOutputTypeCountDocumentLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentConceptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    googleFileId: string | null
    title: string | null
    mimeType: string | null
    plainText: string | null
    summary: string | null
    sourceUrl: string | null
    importedAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    googleFileId: string | null
    title: string | null
    mimeType: string | null
    plainText: string | null
    summary: string | null
    sourceUrl: string | null
    importedAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    googleFileId: number
    title: number
    mimeType: number
    plainText: number
    summary: number
    sourceUrl: number
    importedAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    googleFileId?: true
    title?: true
    mimeType?: true
    plainText?: true
    summary?: true
    sourceUrl?: true
    importedAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    googleFileId?: true
    title?: true
    mimeType?: true
    plainText?: true
    summary?: true
    sourceUrl?: true
    importedAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    googleFileId?: true
    title?: true
    mimeType?: true
    plainText?: true
    summary?: true
    sourceUrl?: true
    importedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    googleFileId: string | null
    title: string
    mimeType: string
    plainText: string
    summary: string | null
    sourceUrl: string | null
    importedAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleFileId?: boolean
    title?: boolean
    mimeType?: boolean
    plainText?: boolean
    summary?: boolean
    sourceUrl?: boolean
    importedAt?: boolean
    updatedAt?: boolean
    conceptLinks?: boolean | Document$conceptLinksArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    googleFileId?: boolean
    title?: boolean
    mimeType?: boolean
    plainText?: boolean
    summary?: boolean
    sourceUrl?: boolean
    importedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    googleFileId?: boolean
    title?: boolean
    mimeType?: boolean
    plainText?: boolean
    summary?: boolean
    sourceUrl?: boolean
    importedAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conceptLinks?: boolean | Document$conceptLinksArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      conceptLinks: Prisma.$DocumentConceptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      googleFileId: string | null
      title: string
      mimeType: string
      plainText: string
      summary: string | null
      sourceUrl: string | null
      importedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conceptLinks<T extends Document$conceptLinksArgs<ExtArgs> = {}>(args?: Subset<T, Document$conceptLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentConceptPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */ 
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly googleFileId: FieldRef<"Document", 'String'>
    readonly title: FieldRef<"Document", 'String'>
    readonly mimeType: FieldRef<"Document", 'String'>
    readonly plainText: FieldRef<"Document", 'String'>
    readonly summary: FieldRef<"Document", 'String'>
    readonly sourceUrl: FieldRef<"Document", 'String'>
    readonly importedAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
  }

  /**
   * Document.conceptLinks
   */
  export type Document$conceptLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConcept
     */
    select?: DocumentConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConceptInclude<ExtArgs> | null
    where?: DocumentConceptWhereInput
    orderBy?: DocumentConceptOrderByWithRelationInput | DocumentConceptOrderByWithRelationInput[]
    cursor?: DocumentConceptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentConceptScalarFieldEnum | DocumentConceptScalarFieldEnum[]
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Concept
   */

  export type AggregateConcept = {
    _count: ConceptCountAggregateOutputType | null
    _avg: ConceptAvgAggregateOutputType | null
    _sum: ConceptSumAggregateOutputType | null
    _min: ConceptMinAggregateOutputType | null
    _max: ConceptMaxAggregateOutputType | null
  }

  export type ConceptAvgAggregateOutputType = {
    confidence: number | null
  }

  export type ConceptSumAggregateOutputType = {
    confidence: number | null
  }

  export type ConceptMinAggregateOutputType = {
    id: string | null
    title: string | null
    normalizedTitle: string | null
    summary: string | null
    aliasesJson: string | null
    relatedJson: string | null
    examplesJson: string | null
    confidence: number | null
    embeddingJson: string | null
    duplicateOfId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConceptMaxAggregateOutputType = {
    id: string | null
    title: string | null
    normalizedTitle: string | null
    summary: string | null
    aliasesJson: string | null
    relatedJson: string | null
    examplesJson: string | null
    confidence: number | null
    embeddingJson: string | null
    duplicateOfId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConceptCountAggregateOutputType = {
    id: number
    title: number
    normalizedTitle: number
    summary: number
    aliasesJson: number
    relatedJson: number
    examplesJson: number
    confidence: number
    embeddingJson: number
    duplicateOfId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConceptAvgAggregateInputType = {
    confidence?: true
  }

  export type ConceptSumAggregateInputType = {
    confidence?: true
  }

  export type ConceptMinAggregateInputType = {
    id?: true
    title?: true
    normalizedTitle?: true
    summary?: true
    aliasesJson?: true
    relatedJson?: true
    examplesJson?: true
    confidence?: true
    embeddingJson?: true
    duplicateOfId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConceptMaxAggregateInputType = {
    id?: true
    title?: true
    normalizedTitle?: true
    summary?: true
    aliasesJson?: true
    relatedJson?: true
    examplesJson?: true
    confidence?: true
    embeddingJson?: true
    duplicateOfId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConceptCountAggregateInputType = {
    id?: true
    title?: true
    normalizedTitle?: true
    summary?: true
    aliasesJson?: true
    relatedJson?: true
    examplesJson?: true
    confidence?: true
    embeddingJson?: true
    duplicateOfId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConceptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Concept to aggregate.
     */
    where?: ConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concepts to fetch.
     */
    orderBy?: ConceptOrderByWithRelationInput | ConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Concepts
    **/
    _count?: true | ConceptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConceptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConceptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConceptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConceptMaxAggregateInputType
  }

  export type GetConceptAggregateType<T extends ConceptAggregateArgs> = {
        [P in keyof T & keyof AggregateConcept]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConcept[P]>
      : GetScalarType<T[P], AggregateConcept[P]>
  }




  export type ConceptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConceptWhereInput
    orderBy?: ConceptOrderByWithAggregationInput | ConceptOrderByWithAggregationInput[]
    by: ConceptScalarFieldEnum[] | ConceptScalarFieldEnum
    having?: ConceptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConceptCountAggregateInputType | true
    _avg?: ConceptAvgAggregateInputType
    _sum?: ConceptSumAggregateInputType
    _min?: ConceptMinAggregateInputType
    _max?: ConceptMaxAggregateInputType
  }

  export type ConceptGroupByOutputType = {
    id: string
    title: string
    normalizedTitle: string
    summary: string
    aliasesJson: string
    relatedJson: string
    examplesJson: string
    confidence: number
    embeddingJson: string
    duplicateOfId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConceptCountAggregateOutputType | null
    _avg: ConceptAvgAggregateOutputType | null
    _sum: ConceptSumAggregateOutputType | null
    _min: ConceptMinAggregateOutputType | null
    _max: ConceptMaxAggregateOutputType | null
  }

  type GetConceptGroupByPayload<T extends ConceptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConceptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConceptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConceptGroupByOutputType[P]>
            : GetScalarType<T[P], ConceptGroupByOutputType[P]>
        }
      >
    >


  export type ConceptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    normalizedTitle?: boolean
    summary?: boolean
    aliasesJson?: boolean
    relatedJson?: boolean
    examplesJson?: boolean
    confidence?: boolean
    embeddingJson?: boolean
    duplicateOfId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documentLinks?: boolean | Concept$documentLinksArgs<ExtArgs>
    _count?: boolean | ConceptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["concept"]>

  export type ConceptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    normalizedTitle?: boolean
    summary?: boolean
    aliasesJson?: boolean
    relatedJson?: boolean
    examplesJson?: boolean
    confidence?: boolean
    embeddingJson?: boolean
    duplicateOfId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["concept"]>

  export type ConceptSelectScalar = {
    id?: boolean
    title?: boolean
    normalizedTitle?: boolean
    summary?: boolean
    aliasesJson?: boolean
    relatedJson?: boolean
    examplesJson?: boolean
    confidence?: boolean
    embeddingJson?: boolean
    duplicateOfId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConceptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentLinks?: boolean | Concept$documentLinksArgs<ExtArgs>
    _count?: boolean | ConceptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConceptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConceptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Concept"
    objects: {
      documentLinks: Prisma.$DocumentConceptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      normalizedTitle: string
      summary: string
      aliasesJson: string
      relatedJson: string
      examplesJson: string
      confidence: number
      embeddingJson: string
      duplicateOfId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["concept"]>
    composites: {}
  }

  type ConceptGetPayload<S extends boolean | null | undefined | ConceptDefaultArgs> = $Result.GetResult<Prisma.$ConceptPayload, S>

  type ConceptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConceptFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConceptCountAggregateInputType | true
    }

  export interface ConceptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Concept'], meta: { name: 'Concept' } }
    /**
     * Find zero or one Concept that matches the filter.
     * @param {ConceptFindUniqueArgs} args - Arguments to find a Concept
     * @example
     * // Get one Concept
     * const concept = await prisma.concept.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConceptFindUniqueArgs>(args: SelectSubset<T, ConceptFindUniqueArgs<ExtArgs>>): Prisma__ConceptClient<$Result.GetResult<Prisma.$ConceptPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Concept that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConceptFindUniqueOrThrowArgs} args - Arguments to find a Concept
     * @example
     * // Get one Concept
     * const concept = await prisma.concept.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConceptFindUniqueOrThrowArgs>(args: SelectSubset<T, ConceptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConceptClient<$Result.GetResult<Prisma.$ConceptPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Concept that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConceptFindFirstArgs} args - Arguments to find a Concept
     * @example
     * // Get one Concept
     * const concept = await prisma.concept.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConceptFindFirstArgs>(args?: SelectSubset<T, ConceptFindFirstArgs<ExtArgs>>): Prisma__ConceptClient<$Result.GetResult<Prisma.$ConceptPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Concept that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConceptFindFirstOrThrowArgs} args - Arguments to find a Concept
     * @example
     * // Get one Concept
     * const concept = await prisma.concept.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConceptFindFirstOrThrowArgs>(args?: SelectSubset<T, ConceptFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConceptClient<$Result.GetResult<Prisma.$ConceptPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Concepts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConceptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Concepts
     * const concepts = await prisma.concept.findMany()
     * 
     * // Get first 10 Concepts
     * const concepts = await prisma.concept.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conceptWithIdOnly = await prisma.concept.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConceptFindManyArgs>(args?: SelectSubset<T, ConceptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConceptPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Concept.
     * @param {ConceptCreateArgs} args - Arguments to create a Concept.
     * @example
     * // Create one Concept
     * const Concept = await prisma.concept.create({
     *   data: {
     *     // ... data to create a Concept
     *   }
     * })
     * 
     */
    create<T extends ConceptCreateArgs>(args: SelectSubset<T, ConceptCreateArgs<ExtArgs>>): Prisma__ConceptClient<$Result.GetResult<Prisma.$ConceptPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Concepts.
     * @param {ConceptCreateManyArgs} args - Arguments to create many Concepts.
     * @example
     * // Create many Concepts
     * const concept = await prisma.concept.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConceptCreateManyArgs>(args?: SelectSubset<T, ConceptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Concepts and returns the data saved in the database.
     * @param {ConceptCreateManyAndReturnArgs} args - Arguments to create many Concepts.
     * @example
     * // Create many Concepts
     * const concept = await prisma.concept.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Concepts and only return the `id`
     * const conceptWithIdOnly = await prisma.concept.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConceptCreateManyAndReturnArgs>(args?: SelectSubset<T, ConceptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConceptPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Concept.
     * @param {ConceptDeleteArgs} args - Arguments to delete one Concept.
     * @example
     * // Delete one Concept
     * const Concept = await prisma.concept.delete({
     *   where: {
     *     // ... filter to delete one Concept
     *   }
     * })
     * 
     */
    delete<T extends ConceptDeleteArgs>(args: SelectSubset<T, ConceptDeleteArgs<ExtArgs>>): Prisma__ConceptClient<$Result.GetResult<Prisma.$ConceptPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Concept.
     * @param {ConceptUpdateArgs} args - Arguments to update one Concept.
     * @example
     * // Update one Concept
     * const concept = await prisma.concept.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConceptUpdateArgs>(args: SelectSubset<T, ConceptUpdateArgs<ExtArgs>>): Prisma__ConceptClient<$Result.GetResult<Prisma.$ConceptPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Concepts.
     * @param {ConceptDeleteManyArgs} args - Arguments to filter Concepts to delete.
     * @example
     * // Delete a few Concepts
     * const { count } = await prisma.concept.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConceptDeleteManyArgs>(args?: SelectSubset<T, ConceptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Concepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConceptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Concepts
     * const concept = await prisma.concept.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConceptUpdateManyArgs>(args: SelectSubset<T, ConceptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Concept.
     * @param {ConceptUpsertArgs} args - Arguments to update or create a Concept.
     * @example
     * // Update or create a Concept
     * const concept = await prisma.concept.upsert({
     *   create: {
     *     // ... data to create a Concept
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Concept we want to update
     *   }
     * })
     */
    upsert<T extends ConceptUpsertArgs>(args: SelectSubset<T, ConceptUpsertArgs<ExtArgs>>): Prisma__ConceptClient<$Result.GetResult<Prisma.$ConceptPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Concepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConceptCountArgs} args - Arguments to filter Concepts to count.
     * @example
     * // Count the number of Concepts
     * const count = await prisma.concept.count({
     *   where: {
     *     // ... the filter for the Concepts we want to count
     *   }
     * })
    **/
    count<T extends ConceptCountArgs>(
      args?: Subset<T, ConceptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConceptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Concept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConceptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConceptAggregateArgs>(args: Subset<T, ConceptAggregateArgs>): Prisma.PrismaPromise<GetConceptAggregateType<T>>

    /**
     * Group by Concept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConceptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConceptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConceptGroupByArgs['orderBy'] }
        : { orderBy?: ConceptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConceptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConceptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Concept model
   */
  readonly fields: ConceptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Concept.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConceptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentLinks<T extends Concept$documentLinksArgs<ExtArgs> = {}>(args?: Subset<T, Concept$documentLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentConceptPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Concept model
   */ 
  interface ConceptFieldRefs {
    readonly id: FieldRef<"Concept", 'String'>
    readonly title: FieldRef<"Concept", 'String'>
    readonly normalizedTitle: FieldRef<"Concept", 'String'>
    readonly summary: FieldRef<"Concept", 'String'>
    readonly aliasesJson: FieldRef<"Concept", 'String'>
    readonly relatedJson: FieldRef<"Concept", 'String'>
    readonly examplesJson: FieldRef<"Concept", 'String'>
    readonly confidence: FieldRef<"Concept", 'Float'>
    readonly embeddingJson: FieldRef<"Concept", 'String'>
    readonly duplicateOfId: FieldRef<"Concept", 'String'>
    readonly createdAt: FieldRef<"Concept", 'DateTime'>
    readonly updatedAt: FieldRef<"Concept", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Concept findUnique
   */
  export type ConceptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concept
     */
    select?: ConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConceptInclude<ExtArgs> | null
    /**
     * Filter, which Concept to fetch.
     */
    where: ConceptWhereUniqueInput
  }

  /**
   * Concept findUniqueOrThrow
   */
  export type ConceptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concept
     */
    select?: ConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConceptInclude<ExtArgs> | null
    /**
     * Filter, which Concept to fetch.
     */
    where: ConceptWhereUniqueInput
  }

  /**
   * Concept findFirst
   */
  export type ConceptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concept
     */
    select?: ConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConceptInclude<ExtArgs> | null
    /**
     * Filter, which Concept to fetch.
     */
    where?: ConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concepts to fetch.
     */
    orderBy?: ConceptOrderByWithRelationInput | ConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Concepts.
     */
    cursor?: ConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Concepts.
     */
    distinct?: ConceptScalarFieldEnum | ConceptScalarFieldEnum[]
  }

  /**
   * Concept findFirstOrThrow
   */
  export type ConceptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concept
     */
    select?: ConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConceptInclude<ExtArgs> | null
    /**
     * Filter, which Concept to fetch.
     */
    where?: ConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concepts to fetch.
     */
    orderBy?: ConceptOrderByWithRelationInput | ConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Concepts.
     */
    cursor?: ConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Concepts.
     */
    distinct?: ConceptScalarFieldEnum | ConceptScalarFieldEnum[]
  }

  /**
   * Concept findMany
   */
  export type ConceptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concept
     */
    select?: ConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConceptInclude<ExtArgs> | null
    /**
     * Filter, which Concepts to fetch.
     */
    where?: ConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Concepts to fetch.
     */
    orderBy?: ConceptOrderByWithRelationInput | ConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Concepts.
     */
    cursor?: ConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Concepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Concepts.
     */
    skip?: number
    distinct?: ConceptScalarFieldEnum | ConceptScalarFieldEnum[]
  }

  /**
   * Concept create
   */
  export type ConceptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concept
     */
    select?: ConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConceptInclude<ExtArgs> | null
    /**
     * The data needed to create a Concept.
     */
    data: XOR<ConceptCreateInput, ConceptUncheckedCreateInput>
  }

  /**
   * Concept createMany
   */
  export type ConceptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Concepts.
     */
    data: ConceptCreateManyInput | ConceptCreateManyInput[]
  }

  /**
   * Concept createManyAndReturn
   */
  export type ConceptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concept
     */
    select?: ConceptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Concepts.
     */
    data: ConceptCreateManyInput | ConceptCreateManyInput[]
  }

  /**
   * Concept update
   */
  export type ConceptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concept
     */
    select?: ConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConceptInclude<ExtArgs> | null
    /**
     * The data needed to update a Concept.
     */
    data: XOR<ConceptUpdateInput, ConceptUncheckedUpdateInput>
    /**
     * Choose, which Concept to update.
     */
    where: ConceptWhereUniqueInput
  }

  /**
   * Concept updateMany
   */
  export type ConceptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Concepts.
     */
    data: XOR<ConceptUpdateManyMutationInput, ConceptUncheckedUpdateManyInput>
    /**
     * Filter which Concepts to update
     */
    where?: ConceptWhereInput
  }

  /**
   * Concept upsert
   */
  export type ConceptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concept
     */
    select?: ConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConceptInclude<ExtArgs> | null
    /**
     * The filter to search for the Concept to update in case it exists.
     */
    where: ConceptWhereUniqueInput
    /**
     * In case the Concept found by the `where` argument doesn't exist, create a new Concept with this data.
     */
    create: XOR<ConceptCreateInput, ConceptUncheckedCreateInput>
    /**
     * In case the Concept was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConceptUpdateInput, ConceptUncheckedUpdateInput>
  }

  /**
   * Concept delete
   */
  export type ConceptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concept
     */
    select?: ConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConceptInclude<ExtArgs> | null
    /**
     * Filter which Concept to delete.
     */
    where: ConceptWhereUniqueInput
  }

  /**
   * Concept deleteMany
   */
  export type ConceptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Concepts to delete
     */
    where?: ConceptWhereInput
  }

  /**
   * Concept.documentLinks
   */
  export type Concept$documentLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConcept
     */
    select?: DocumentConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConceptInclude<ExtArgs> | null
    where?: DocumentConceptWhereInput
    orderBy?: DocumentConceptOrderByWithRelationInput | DocumentConceptOrderByWithRelationInput[]
    cursor?: DocumentConceptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentConceptScalarFieldEnum | DocumentConceptScalarFieldEnum[]
  }

  /**
   * Concept without action
   */
  export type ConceptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Concept
     */
    select?: ConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConceptInclude<ExtArgs> | null
  }


  /**
   * Model DocumentConcept
   */

  export type AggregateDocumentConcept = {
    _count: DocumentConceptCountAggregateOutputType | null
    _avg: DocumentConceptAvgAggregateOutputType | null
    _sum: DocumentConceptSumAggregateOutputType | null
    _min: DocumentConceptMinAggregateOutputType | null
    _max: DocumentConceptMaxAggregateOutputType | null
  }

  export type DocumentConceptAvgAggregateOutputType = {
    confidence: number | null
  }

  export type DocumentConceptSumAggregateOutputType = {
    confidence: number | null
  }

  export type DocumentConceptMinAggregateOutputType = {
    documentId: string | null
    conceptId: string | null
    excerpt: string | null
    confidence: number | null
  }

  export type DocumentConceptMaxAggregateOutputType = {
    documentId: string | null
    conceptId: string | null
    excerpt: string | null
    confidence: number | null
  }

  export type DocumentConceptCountAggregateOutputType = {
    documentId: number
    conceptId: number
    excerpt: number
    confidence: number
    _all: number
  }


  export type DocumentConceptAvgAggregateInputType = {
    confidence?: true
  }

  export type DocumentConceptSumAggregateInputType = {
    confidence?: true
  }

  export type DocumentConceptMinAggregateInputType = {
    documentId?: true
    conceptId?: true
    excerpt?: true
    confidence?: true
  }

  export type DocumentConceptMaxAggregateInputType = {
    documentId?: true
    conceptId?: true
    excerpt?: true
    confidence?: true
  }

  export type DocumentConceptCountAggregateInputType = {
    documentId?: true
    conceptId?: true
    excerpt?: true
    confidence?: true
    _all?: true
  }

  export type DocumentConceptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentConcept to aggregate.
     */
    where?: DocumentConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentConcepts to fetch.
     */
    orderBy?: DocumentConceptOrderByWithRelationInput | DocumentConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentConcepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentConcepts
    **/
    _count?: true | DocumentConceptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentConceptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentConceptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentConceptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentConceptMaxAggregateInputType
  }

  export type GetDocumentConceptAggregateType<T extends DocumentConceptAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentConcept]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentConcept[P]>
      : GetScalarType<T[P], AggregateDocumentConcept[P]>
  }




  export type DocumentConceptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentConceptWhereInput
    orderBy?: DocumentConceptOrderByWithAggregationInput | DocumentConceptOrderByWithAggregationInput[]
    by: DocumentConceptScalarFieldEnum[] | DocumentConceptScalarFieldEnum
    having?: DocumentConceptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentConceptCountAggregateInputType | true
    _avg?: DocumentConceptAvgAggregateInputType
    _sum?: DocumentConceptSumAggregateInputType
    _min?: DocumentConceptMinAggregateInputType
    _max?: DocumentConceptMaxAggregateInputType
  }

  export type DocumentConceptGroupByOutputType = {
    documentId: string
    conceptId: string
    excerpt: string | null
    confidence: number
    _count: DocumentConceptCountAggregateOutputType | null
    _avg: DocumentConceptAvgAggregateOutputType | null
    _sum: DocumentConceptSumAggregateOutputType | null
    _min: DocumentConceptMinAggregateOutputType | null
    _max: DocumentConceptMaxAggregateOutputType | null
  }

  type GetDocumentConceptGroupByPayload<T extends DocumentConceptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentConceptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentConceptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentConceptGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentConceptGroupByOutputType[P]>
        }
      >
    >


  export type DocumentConceptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentId?: boolean
    conceptId?: boolean
    excerpt?: boolean
    confidence?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    concept?: boolean | ConceptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentConcept"]>

  export type DocumentConceptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentId?: boolean
    conceptId?: boolean
    excerpt?: boolean
    confidence?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    concept?: boolean | ConceptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentConcept"]>

  export type DocumentConceptSelectScalar = {
    documentId?: boolean
    conceptId?: boolean
    excerpt?: boolean
    confidence?: boolean
  }

  export type DocumentConceptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    concept?: boolean | ConceptDefaultArgs<ExtArgs>
  }
  export type DocumentConceptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    concept?: boolean | ConceptDefaultArgs<ExtArgs>
  }

  export type $DocumentConceptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentConcept"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      concept: Prisma.$ConceptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      documentId: string
      conceptId: string
      excerpt: string | null
      confidence: number
    }, ExtArgs["result"]["documentConcept"]>
    composites: {}
  }

  type DocumentConceptGetPayload<S extends boolean | null | undefined | DocumentConceptDefaultArgs> = $Result.GetResult<Prisma.$DocumentConceptPayload, S>

  type DocumentConceptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DocumentConceptFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DocumentConceptCountAggregateInputType | true
    }

  export interface DocumentConceptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentConcept'], meta: { name: 'DocumentConcept' } }
    /**
     * Find zero or one DocumentConcept that matches the filter.
     * @param {DocumentConceptFindUniqueArgs} args - Arguments to find a DocumentConcept
     * @example
     * // Get one DocumentConcept
     * const documentConcept = await prisma.documentConcept.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentConceptFindUniqueArgs>(args: SelectSubset<T, DocumentConceptFindUniqueArgs<ExtArgs>>): Prisma__DocumentConceptClient<$Result.GetResult<Prisma.$DocumentConceptPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DocumentConcept that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DocumentConceptFindUniqueOrThrowArgs} args - Arguments to find a DocumentConcept
     * @example
     * // Get one DocumentConcept
     * const documentConcept = await prisma.documentConcept.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentConceptFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentConceptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentConceptClient<$Result.GetResult<Prisma.$DocumentConceptPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DocumentConcept that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentConceptFindFirstArgs} args - Arguments to find a DocumentConcept
     * @example
     * // Get one DocumentConcept
     * const documentConcept = await prisma.documentConcept.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentConceptFindFirstArgs>(args?: SelectSubset<T, DocumentConceptFindFirstArgs<ExtArgs>>): Prisma__DocumentConceptClient<$Result.GetResult<Prisma.$DocumentConceptPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DocumentConcept that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentConceptFindFirstOrThrowArgs} args - Arguments to find a DocumentConcept
     * @example
     * // Get one DocumentConcept
     * const documentConcept = await prisma.documentConcept.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentConceptFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentConceptFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentConceptClient<$Result.GetResult<Prisma.$DocumentConceptPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DocumentConcepts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentConceptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentConcepts
     * const documentConcepts = await prisma.documentConcept.findMany()
     * 
     * // Get first 10 DocumentConcepts
     * const documentConcepts = await prisma.documentConcept.findMany({ take: 10 })
     * 
     * // Only select the `documentId`
     * const documentConceptWithDocumentIdOnly = await prisma.documentConcept.findMany({ select: { documentId: true } })
     * 
     */
    findMany<T extends DocumentConceptFindManyArgs>(args?: SelectSubset<T, DocumentConceptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentConceptPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DocumentConcept.
     * @param {DocumentConceptCreateArgs} args - Arguments to create a DocumentConcept.
     * @example
     * // Create one DocumentConcept
     * const DocumentConcept = await prisma.documentConcept.create({
     *   data: {
     *     // ... data to create a DocumentConcept
     *   }
     * })
     * 
     */
    create<T extends DocumentConceptCreateArgs>(args: SelectSubset<T, DocumentConceptCreateArgs<ExtArgs>>): Prisma__DocumentConceptClient<$Result.GetResult<Prisma.$DocumentConceptPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DocumentConcepts.
     * @param {DocumentConceptCreateManyArgs} args - Arguments to create many DocumentConcepts.
     * @example
     * // Create many DocumentConcepts
     * const documentConcept = await prisma.documentConcept.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentConceptCreateManyArgs>(args?: SelectSubset<T, DocumentConceptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentConcepts and returns the data saved in the database.
     * @param {DocumentConceptCreateManyAndReturnArgs} args - Arguments to create many DocumentConcepts.
     * @example
     * // Create many DocumentConcepts
     * const documentConcept = await prisma.documentConcept.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentConcepts and only return the `documentId`
     * const documentConceptWithDocumentIdOnly = await prisma.documentConcept.createManyAndReturn({ 
     *   select: { documentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentConceptCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentConceptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentConceptPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DocumentConcept.
     * @param {DocumentConceptDeleteArgs} args - Arguments to delete one DocumentConcept.
     * @example
     * // Delete one DocumentConcept
     * const DocumentConcept = await prisma.documentConcept.delete({
     *   where: {
     *     // ... filter to delete one DocumentConcept
     *   }
     * })
     * 
     */
    delete<T extends DocumentConceptDeleteArgs>(args: SelectSubset<T, DocumentConceptDeleteArgs<ExtArgs>>): Prisma__DocumentConceptClient<$Result.GetResult<Prisma.$DocumentConceptPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DocumentConcept.
     * @param {DocumentConceptUpdateArgs} args - Arguments to update one DocumentConcept.
     * @example
     * // Update one DocumentConcept
     * const documentConcept = await prisma.documentConcept.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentConceptUpdateArgs>(args: SelectSubset<T, DocumentConceptUpdateArgs<ExtArgs>>): Prisma__DocumentConceptClient<$Result.GetResult<Prisma.$DocumentConceptPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DocumentConcepts.
     * @param {DocumentConceptDeleteManyArgs} args - Arguments to filter DocumentConcepts to delete.
     * @example
     * // Delete a few DocumentConcepts
     * const { count } = await prisma.documentConcept.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentConceptDeleteManyArgs>(args?: SelectSubset<T, DocumentConceptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentConcepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentConceptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentConcepts
     * const documentConcept = await prisma.documentConcept.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentConceptUpdateManyArgs>(args: SelectSubset<T, DocumentConceptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DocumentConcept.
     * @param {DocumentConceptUpsertArgs} args - Arguments to update or create a DocumentConcept.
     * @example
     * // Update or create a DocumentConcept
     * const documentConcept = await prisma.documentConcept.upsert({
     *   create: {
     *     // ... data to create a DocumentConcept
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentConcept we want to update
     *   }
     * })
     */
    upsert<T extends DocumentConceptUpsertArgs>(args: SelectSubset<T, DocumentConceptUpsertArgs<ExtArgs>>): Prisma__DocumentConceptClient<$Result.GetResult<Prisma.$DocumentConceptPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DocumentConcepts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentConceptCountArgs} args - Arguments to filter DocumentConcepts to count.
     * @example
     * // Count the number of DocumentConcepts
     * const count = await prisma.documentConcept.count({
     *   where: {
     *     // ... the filter for the DocumentConcepts we want to count
     *   }
     * })
    **/
    count<T extends DocumentConceptCountArgs>(
      args?: Subset<T, DocumentConceptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentConceptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentConcept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentConceptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentConceptAggregateArgs>(args: Subset<T, DocumentConceptAggregateArgs>): Prisma.PrismaPromise<GetDocumentConceptAggregateType<T>>

    /**
     * Group by DocumentConcept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentConceptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentConceptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentConceptGroupByArgs['orderBy'] }
        : { orderBy?: DocumentConceptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentConceptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentConceptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentConcept model
   */
  readonly fields: DocumentConceptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentConcept.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentConceptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    concept<T extends ConceptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConceptDefaultArgs<ExtArgs>>): Prisma__ConceptClient<$Result.GetResult<Prisma.$ConceptPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentConcept model
   */ 
  interface DocumentConceptFieldRefs {
    readonly documentId: FieldRef<"DocumentConcept", 'String'>
    readonly conceptId: FieldRef<"DocumentConcept", 'String'>
    readonly excerpt: FieldRef<"DocumentConcept", 'String'>
    readonly confidence: FieldRef<"DocumentConcept", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * DocumentConcept findUnique
   */
  export type DocumentConceptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConcept
     */
    select?: DocumentConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConceptInclude<ExtArgs> | null
    /**
     * Filter, which DocumentConcept to fetch.
     */
    where: DocumentConceptWhereUniqueInput
  }

  /**
   * DocumentConcept findUniqueOrThrow
   */
  export type DocumentConceptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConcept
     */
    select?: DocumentConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConceptInclude<ExtArgs> | null
    /**
     * Filter, which DocumentConcept to fetch.
     */
    where: DocumentConceptWhereUniqueInput
  }

  /**
   * DocumentConcept findFirst
   */
  export type DocumentConceptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConcept
     */
    select?: DocumentConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConceptInclude<ExtArgs> | null
    /**
     * Filter, which DocumentConcept to fetch.
     */
    where?: DocumentConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentConcepts to fetch.
     */
    orderBy?: DocumentConceptOrderByWithRelationInput | DocumentConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentConcepts.
     */
    cursor?: DocumentConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentConcepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentConcepts.
     */
    distinct?: DocumentConceptScalarFieldEnum | DocumentConceptScalarFieldEnum[]
  }

  /**
   * DocumentConcept findFirstOrThrow
   */
  export type DocumentConceptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConcept
     */
    select?: DocumentConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConceptInclude<ExtArgs> | null
    /**
     * Filter, which DocumentConcept to fetch.
     */
    where?: DocumentConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentConcepts to fetch.
     */
    orderBy?: DocumentConceptOrderByWithRelationInput | DocumentConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentConcepts.
     */
    cursor?: DocumentConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentConcepts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentConcepts.
     */
    distinct?: DocumentConceptScalarFieldEnum | DocumentConceptScalarFieldEnum[]
  }

  /**
   * DocumentConcept findMany
   */
  export type DocumentConceptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConcept
     */
    select?: DocumentConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConceptInclude<ExtArgs> | null
    /**
     * Filter, which DocumentConcepts to fetch.
     */
    where?: DocumentConceptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentConcepts to fetch.
     */
    orderBy?: DocumentConceptOrderByWithRelationInput | DocumentConceptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentConcepts.
     */
    cursor?: DocumentConceptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentConcepts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentConcepts.
     */
    skip?: number
    distinct?: DocumentConceptScalarFieldEnum | DocumentConceptScalarFieldEnum[]
  }

  /**
   * DocumentConcept create
   */
  export type DocumentConceptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConcept
     */
    select?: DocumentConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConceptInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentConcept.
     */
    data: XOR<DocumentConceptCreateInput, DocumentConceptUncheckedCreateInput>
  }

  /**
   * DocumentConcept createMany
   */
  export type DocumentConceptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentConcepts.
     */
    data: DocumentConceptCreateManyInput | DocumentConceptCreateManyInput[]
  }

  /**
   * DocumentConcept createManyAndReturn
   */
  export type DocumentConceptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConcept
     */
    select?: DocumentConceptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DocumentConcepts.
     */
    data: DocumentConceptCreateManyInput | DocumentConceptCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConceptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentConcept update
   */
  export type DocumentConceptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConcept
     */
    select?: DocumentConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConceptInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentConcept.
     */
    data: XOR<DocumentConceptUpdateInput, DocumentConceptUncheckedUpdateInput>
    /**
     * Choose, which DocumentConcept to update.
     */
    where: DocumentConceptWhereUniqueInput
  }

  /**
   * DocumentConcept updateMany
   */
  export type DocumentConceptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentConcepts.
     */
    data: XOR<DocumentConceptUpdateManyMutationInput, DocumentConceptUncheckedUpdateManyInput>
    /**
     * Filter which DocumentConcepts to update
     */
    where?: DocumentConceptWhereInput
  }

  /**
   * DocumentConcept upsert
   */
  export type DocumentConceptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConcept
     */
    select?: DocumentConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConceptInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentConcept to update in case it exists.
     */
    where: DocumentConceptWhereUniqueInput
    /**
     * In case the DocumentConcept found by the `where` argument doesn't exist, create a new DocumentConcept with this data.
     */
    create: XOR<DocumentConceptCreateInput, DocumentConceptUncheckedCreateInput>
    /**
     * In case the DocumentConcept was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentConceptUpdateInput, DocumentConceptUncheckedUpdateInput>
  }

  /**
   * DocumentConcept delete
   */
  export type DocumentConceptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConcept
     */
    select?: DocumentConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConceptInclude<ExtArgs> | null
    /**
     * Filter which DocumentConcept to delete.
     */
    where: DocumentConceptWhereUniqueInput
  }

  /**
   * DocumentConcept deleteMany
   */
  export type DocumentConceptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentConcepts to delete
     */
    where?: DocumentConceptWhereInput
  }

  /**
   * DocumentConcept without action
   */
  export type DocumentConceptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConcept
     */
    select?: DocumentConceptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConceptInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SettingMaxAggregateOutputType = {
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SettingCountAggregateOutputType = {
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SettingMaxAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SettingCountAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    key: string
    value: string
    updatedAt: Date
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }


  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
      updatedAt: Date
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const settingWithKeyOnly = await prisma.setting.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.createManyAndReturn({ 
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setting model
   */ 
  interface SettingFieldRefs {
    readonly key: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'String'>
    readonly updatedAt: FieldRef<"Setting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    googleFileId: 'googleFileId',
    title: 'title',
    mimeType: 'mimeType',
    plainText: 'plainText',
    summary: 'summary',
    sourceUrl: 'sourceUrl',
    importedAt: 'importedAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const ConceptScalarFieldEnum: {
    id: 'id',
    title: 'title',
    normalizedTitle: 'normalizedTitle',
    summary: 'summary',
    aliasesJson: 'aliasesJson',
    relatedJson: 'relatedJson',
    examplesJson: 'examplesJson',
    confidence: 'confidence',
    embeddingJson: 'embeddingJson',
    duplicateOfId: 'duplicateOfId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConceptScalarFieldEnum = (typeof ConceptScalarFieldEnum)[keyof typeof ConceptScalarFieldEnum]


  export const DocumentConceptScalarFieldEnum: {
    documentId: 'documentId',
    conceptId: 'conceptId',
    excerpt: 'excerpt',
    confidence: 'confidence'
  };

  export type DocumentConceptScalarFieldEnum = (typeof DocumentConceptScalarFieldEnum)[keyof typeof DocumentConceptScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    googleFileId?: StringNullableFilter<"Document"> | string | null
    title?: StringFilter<"Document"> | string
    mimeType?: StringFilter<"Document"> | string
    plainText?: StringFilter<"Document"> | string
    summary?: StringNullableFilter<"Document"> | string | null
    sourceUrl?: StringNullableFilter<"Document"> | string | null
    importedAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    conceptLinks?: DocumentConceptListRelationFilter
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    googleFileId?: SortOrderInput | SortOrder
    title?: SortOrder
    mimeType?: SortOrder
    plainText?: SortOrder
    summary?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    importedAt?: SortOrder
    updatedAt?: SortOrder
    conceptLinks?: DocumentConceptOrderByRelationAggregateInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googleFileId?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    title?: StringFilter<"Document"> | string
    mimeType?: StringFilter<"Document"> | string
    plainText?: StringFilter<"Document"> | string
    summary?: StringNullableFilter<"Document"> | string | null
    sourceUrl?: StringNullableFilter<"Document"> | string | null
    importedAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    conceptLinks?: DocumentConceptListRelationFilter
  }, "id" | "googleFileId">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    googleFileId?: SortOrderInput | SortOrder
    title?: SortOrder
    mimeType?: SortOrder
    plainText?: SortOrder
    summary?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    importedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    googleFileId?: StringNullableWithAggregatesFilter<"Document"> | string | null
    title?: StringWithAggregatesFilter<"Document"> | string
    mimeType?: StringWithAggregatesFilter<"Document"> | string
    plainText?: StringWithAggregatesFilter<"Document"> | string
    summary?: StringNullableWithAggregatesFilter<"Document"> | string | null
    sourceUrl?: StringNullableWithAggregatesFilter<"Document"> | string | null
    importedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type ConceptWhereInput = {
    AND?: ConceptWhereInput | ConceptWhereInput[]
    OR?: ConceptWhereInput[]
    NOT?: ConceptWhereInput | ConceptWhereInput[]
    id?: StringFilter<"Concept"> | string
    title?: StringFilter<"Concept"> | string
    normalizedTitle?: StringFilter<"Concept"> | string
    summary?: StringFilter<"Concept"> | string
    aliasesJson?: StringFilter<"Concept"> | string
    relatedJson?: StringFilter<"Concept"> | string
    examplesJson?: StringFilter<"Concept"> | string
    confidence?: FloatFilter<"Concept"> | number
    embeddingJson?: StringFilter<"Concept"> | string
    duplicateOfId?: StringNullableFilter<"Concept"> | string | null
    createdAt?: DateTimeFilter<"Concept"> | Date | string
    updatedAt?: DateTimeFilter<"Concept"> | Date | string
    documentLinks?: DocumentConceptListRelationFilter
  }

  export type ConceptOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    normalizedTitle?: SortOrder
    summary?: SortOrder
    aliasesJson?: SortOrder
    relatedJson?: SortOrder
    examplesJson?: SortOrder
    confidence?: SortOrder
    embeddingJson?: SortOrder
    duplicateOfId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documentLinks?: DocumentConceptOrderByRelationAggregateInput
  }

  export type ConceptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    normalizedTitle?: string
    AND?: ConceptWhereInput | ConceptWhereInput[]
    OR?: ConceptWhereInput[]
    NOT?: ConceptWhereInput | ConceptWhereInput[]
    title?: StringFilter<"Concept"> | string
    summary?: StringFilter<"Concept"> | string
    aliasesJson?: StringFilter<"Concept"> | string
    relatedJson?: StringFilter<"Concept"> | string
    examplesJson?: StringFilter<"Concept"> | string
    confidence?: FloatFilter<"Concept"> | number
    embeddingJson?: StringFilter<"Concept"> | string
    duplicateOfId?: StringNullableFilter<"Concept"> | string | null
    createdAt?: DateTimeFilter<"Concept"> | Date | string
    updatedAt?: DateTimeFilter<"Concept"> | Date | string
    documentLinks?: DocumentConceptListRelationFilter
  }, "id" | "normalizedTitle">

  export type ConceptOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    normalizedTitle?: SortOrder
    summary?: SortOrder
    aliasesJson?: SortOrder
    relatedJson?: SortOrder
    examplesJson?: SortOrder
    confidence?: SortOrder
    embeddingJson?: SortOrder
    duplicateOfId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConceptCountOrderByAggregateInput
    _avg?: ConceptAvgOrderByAggregateInput
    _max?: ConceptMaxOrderByAggregateInput
    _min?: ConceptMinOrderByAggregateInput
    _sum?: ConceptSumOrderByAggregateInput
  }

  export type ConceptScalarWhereWithAggregatesInput = {
    AND?: ConceptScalarWhereWithAggregatesInput | ConceptScalarWhereWithAggregatesInput[]
    OR?: ConceptScalarWhereWithAggregatesInput[]
    NOT?: ConceptScalarWhereWithAggregatesInput | ConceptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Concept"> | string
    title?: StringWithAggregatesFilter<"Concept"> | string
    normalizedTitle?: StringWithAggregatesFilter<"Concept"> | string
    summary?: StringWithAggregatesFilter<"Concept"> | string
    aliasesJson?: StringWithAggregatesFilter<"Concept"> | string
    relatedJson?: StringWithAggregatesFilter<"Concept"> | string
    examplesJson?: StringWithAggregatesFilter<"Concept"> | string
    confidence?: FloatWithAggregatesFilter<"Concept"> | number
    embeddingJson?: StringWithAggregatesFilter<"Concept"> | string
    duplicateOfId?: StringNullableWithAggregatesFilter<"Concept"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Concept"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Concept"> | Date | string
  }

  export type DocumentConceptWhereInput = {
    AND?: DocumentConceptWhereInput | DocumentConceptWhereInput[]
    OR?: DocumentConceptWhereInput[]
    NOT?: DocumentConceptWhereInput | DocumentConceptWhereInput[]
    documentId?: StringFilter<"DocumentConcept"> | string
    conceptId?: StringFilter<"DocumentConcept"> | string
    excerpt?: StringNullableFilter<"DocumentConcept"> | string | null
    confidence?: FloatFilter<"DocumentConcept"> | number
    document?: XOR<DocumentRelationFilter, DocumentWhereInput>
    concept?: XOR<ConceptRelationFilter, ConceptWhereInput>
  }

  export type DocumentConceptOrderByWithRelationInput = {
    documentId?: SortOrder
    conceptId?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    confidence?: SortOrder
    document?: DocumentOrderByWithRelationInput
    concept?: ConceptOrderByWithRelationInput
  }

  export type DocumentConceptWhereUniqueInput = Prisma.AtLeast<{
    documentId_conceptId?: DocumentConceptDocumentIdConceptIdCompoundUniqueInput
    AND?: DocumentConceptWhereInput | DocumentConceptWhereInput[]
    OR?: DocumentConceptWhereInput[]
    NOT?: DocumentConceptWhereInput | DocumentConceptWhereInput[]
    documentId?: StringFilter<"DocumentConcept"> | string
    conceptId?: StringFilter<"DocumentConcept"> | string
    excerpt?: StringNullableFilter<"DocumentConcept"> | string | null
    confidence?: FloatFilter<"DocumentConcept"> | number
    document?: XOR<DocumentRelationFilter, DocumentWhereInput>
    concept?: XOR<ConceptRelationFilter, ConceptWhereInput>
  }, "documentId_conceptId">

  export type DocumentConceptOrderByWithAggregationInput = {
    documentId?: SortOrder
    conceptId?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    confidence?: SortOrder
    _count?: DocumentConceptCountOrderByAggregateInput
    _avg?: DocumentConceptAvgOrderByAggregateInput
    _max?: DocumentConceptMaxOrderByAggregateInput
    _min?: DocumentConceptMinOrderByAggregateInput
    _sum?: DocumentConceptSumOrderByAggregateInput
  }

  export type DocumentConceptScalarWhereWithAggregatesInput = {
    AND?: DocumentConceptScalarWhereWithAggregatesInput | DocumentConceptScalarWhereWithAggregatesInput[]
    OR?: DocumentConceptScalarWhereWithAggregatesInput[]
    NOT?: DocumentConceptScalarWhereWithAggregatesInput | DocumentConceptScalarWhereWithAggregatesInput[]
    documentId?: StringWithAggregatesFilter<"DocumentConcept"> | string
    conceptId?: StringWithAggregatesFilter<"DocumentConcept"> | string
    excerpt?: StringNullableWithAggregatesFilter<"DocumentConcept"> | string | null
    confidence?: FloatWithAggregatesFilter<"DocumentConcept"> | number
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }

  export type SettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    value?: StringFilter<"Setting"> | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }, "key">

  export type SettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Setting"> | string
    value?: StringWithAggregatesFilter<"Setting"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Setting"> | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    googleFileId?: string | null
    title: string
    mimeType: string
    plainText: string
    summary?: string | null
    sourceUrl?: string | null
    importedAt?: Date | string
    updatedAt?: Date | string
    conceptLinks?: DocumentConceptCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    googleFileId?: string | null
    title: string
    mimeType: string
    plainText: string
    summary?: string | null
    sourceUrl?: string | null
    importedAt?: Date | string
    updatedAt?: Date | string
    conceptLinks?: DocumentConceptUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleFileId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    plainText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conceptLinks?: DocumentConceptUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleFileId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    plainText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conceptLinks?: DocumentConceptUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: string
    googleFileId?: string | null
    title: string
    mimeType: string
    plainText: string
    summary?: string | null
    sourceUrl?: string | null
    importedAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleFileId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    plainText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleFileId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    plainText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConceptCreateInput = {
    id?: string
    title: string
    normalizedTitle: string
    summary: string
    aliasesJson?: string
    relatedJson?: string
    examplesJson?: string
    confidence?: number
    embeddingJson?: string
    duplicateOfId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documentLinks?: DocumentConceptCreateNestedManyWithoutConceptInput
  }

  export type ConceptUncheckedCreateInput = {
    id?: string
    title: string
    normalizedTitle: string
    summary: string
    aliasesJson?: string
    relatedJson?: string
    examplesJson?: string
    confidence?: number
    embeddingJson?: string
    duplicateOfId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documentLinks?: DocumentConceptUncheckedCreateNestedManyWithoutConceptInput
  }

  export type ConceptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    normalizedTitle?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    aliasesJson?: StringFieldUpdateOperationsInput | string
    relatedJson?: StringFieldUpdateOperationsInput | string
    examplesJson?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    embeddingJson?: StringFieldUpdateOperationsInput | string
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentLinks?: DocumentConceptUpdateManyWithoutConceptNestedInput
  }

  export type ConceptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    normalizedTitle?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    aliasesJson?: StringFieldUpdateOperationsInput | string
    relatedJson?: StringFieldUpdateOperationsInput | string
    examplesJson?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    embeddingJson?: StringFieldUpdateOperationsInput | string
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentLinks?: DocumentConceptUncheckedUpdateManyWithoutConceptNestedInput
  }

  export type ConceptCreateManyInput = {
    id?: string
    title: string
    normalizedTitle: string
    summary: string
    aliasesJson?: string
    relatedJson?: string
    examplesJson?: string
    confidence?: number
    embeddingJson?: string
    duplicateOfId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConceptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    normalizedTitle?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    aliasesJson?: StringFieldUpdateOperationsInput | string
    relatedJson?: StringFieldUpdateOperationsInput | string
    examplesJson?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    embeddingJson?: StringFieldUpdateOperationsInput | string
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConceptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    normalizedTitle?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    aliasesJson?: StringFieldUpdateOperationsInput | string
    relatedJson?: StringFieldUpdateOperationsInput | string
    examplesJson?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    embeddingJson?: StringFieldUpdateOperationsInput | string
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentConceptCreateInput = {
    excerpt?: string | null
    confidence?: number
    document: DocumentCreateNestedOneWithoutConceptLinksInput
    concept: ConceptCreateNestedOneWithoutDocumentLinksInput
  }

  export type DocumentConceptUncheckedCreateInput = {
    documentId: string
    conceptId: string
    excerpt?: string | null
    confidence?: number
  }

  export type DocumentConceptUpdateInput = {
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
    document?: DocumentUpdateOneRequiredWithoutConceptLinksNestedInput
    concept?: ConceptUpdateOneRequiredWithoutDocumentLinksNestedInput
  }

  export type DocumentConceptUncheckedUpdateInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    conceptId?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
  }

  export type DocumentConceptCreateManyInput = {
    documentId: string
    conceptId: string
    excerpt?: string | null
    confidence?: number
  }

  export type DocumentConceptUpdateManyMutationInput = {
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
  }

  export type DocumentConceptUncheckedUpdateManyInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    conceptId?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
  }

  export type SettingCreateInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUncheckedCreateInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateManyInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DocumentConceptListRelationFilter = {
    every?: DocumentConceptWhereInput
    some?: DocumentConceptWhereInput
    none?: DocumentConceptWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentConceptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    googleFileId?: SortOrder
    title?: SortOrder
    mimeType?: SortOrder
    plainText?: SortOrder
    summary?: SortOrder
    sourceUrl?: SortOrder
    importedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    googleFileId?: SortOrder
    title?: SortOrder
    mimeType?: SortOrder
    plainText?: SortOrder
    summary?: SortOrder
    sourceUrl?: SortOrder
    importedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    googleFileId?: SortOrder
    title?: SortOrder
    mimeType?: SortOrder
    plainText?: SortOrder
    summary?: SortOrder
    sourceUrl?: SortOrder
    importedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ConceptCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    normalizedTitle?: SortOrder
    summary?: SortOrder
    aliasesJson?: SortOrder
    relatedJson?: SortOrder
    examplesJson?: SortOrder
    confidence?: SortOrder
    embeddingJson?: SortOrder
    duplicateOfId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConceptAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type ConceptMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    normalizedTitle?: SortOrder
    summary?: SortOrder
    aliasesJson?: SortOrder
    relatedJson?: SortOrder
    examplesJson?: SortOrder
    confidence?: SortOrder
    embeddingJson?: SortOrder
    duplicateOfId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConceptMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    normalizedTitle?: SortOrder
    summary?: SortOrder
    aliasesJson?: SortOrder
    relatedJson?: SortOrder
    examplesJson?: SortOrder
    confidence?: SortOrder
    embeddingJson?: SortOrder
    duplicateOfId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConceptSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DocumentRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type ConceptRelationFilter = {
    is?: ConceptWhereInput
    isNot?: ConceptWhereInput
  }

  export type DocumentConceptDocumentIdConceptIdCompoundUniqueInput = {
    documentId: string
    conceptId: string
  }

  export type DocumentConceptCountOrderByAggregateInput = {
    documentId?: SortOrder
    conceptId?: SortOrder
    excerpt?: SortOrder
    confidence?: SortOrder
  }

  export type DocumentConceptAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type DocumentConceptMaxOrderByAggregateInput = {
    documentId?: SortOrder
    conceptId?: SortOrder
    excerpt?: SortOrder
    confidence?: SortOrder
  }

  export type DocumentConceptMinOrderByAggregateInput = {
    documentId?: SortOrder
    conceptId?: SortOrder
    excerpt?: SortOrder
    confidence?: SortOrder
  }

  export type DocumentConceptSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type SettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentConceptCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentConceptCreateWithoutDocumentInput, DocumentConceptUncheckedCreateWithoutDocumentInput> | DocumentConceptCreateWithoutDocumentInput[] | DocumentConceptUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentConceptCreateOrConnectWithoutDocumentInput | DocumentConceptCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentConceptCreateManyDocumentInputEnvelope
    connect?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
  }

  export type DocumentConceptUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentConceptCreateWithoutDocumentInput, DocumentConceptUncheckedCreateWithoutDocumentInput> | DocumentConceptCreateWithoutDocumentInput[] | DocumentConceptUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentConceptCreateOrConnectWithoutDocumentInput | DocumentConceptCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentConceptCreateManyDocumentInputEnvelope
    connect?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DocumentConceptUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentConceptCreateWithoutDocumentInput, DocumentConceptUncheckedCreateWithoutDocumentInput> | DocumentConceptCreateWithoutDocumentInput[] | DocumentConceptUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentConceptCreateOrConnectWithoutDocumentInput | DocumentConceptCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentConceptUpsertWithWhereUniqueWithoutDocumentInput | DocumentConceptUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentConceptCreateManyDocumentInputEnvelope
    set?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    disconnect?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    delete?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    connect?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    update?: DocumentConceptUpdateWithWhereUniqueWithoutDocumentInput | DocumentConceptUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentConceptUpdateManyWithWhereWithoutDocumentInput | DocumentConceptUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentConceptScalarWhereInput | DocumentConceptScalarWhereInput[]
  }

  export type DocumentConceptUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentConceptCreateWithoutDocumentInput, DocumentConceptUncheckedCreateWithoutDocumentInput> | DocumentConceptCreateWithoutDocumentInput[] | DocumentConceptUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentConceptCreateOrConnectWithoutDocumentInput | DocumentConceptCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentConceptUpsertWithWhereUniqueWithoutDocumentInput | DocumentConceptUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentConceptCreateManyDocumentInputEnvelope
    set?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    disconnect?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    delete?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    connect?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    update?: DocumentConceptUpdateWithWhereUniqueWithoutDocumentInput | DocumentConceptUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentConceptUpdateManyWithWhereWithoutDocumentInput | DocumentConceptUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentConceptScalarWhereInput | DocumentConceptScalarWhereInput[]
  }

  export type DocumentConceptCreateNestedManyWithoutConceptInput = {
    create?: XOR<DocumentConceptCreateWithoutConceptInput, DocumentConceptUncheckedCreateWithoutConceptInput> | DocumentConceptCreateWithoutConceptInput[] | DocumentConceptUncheckedCreateWithoutConceptInput[]
    connectOrCreate?: DocumentConceptCreateOrConnectWithoutConceptInput | DocumentConceptCreateOrConnectWithoutConceptInput[]
    createMany?: DocumentConceptCreateManyConceptInputEnvelope
    connect?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
  }

  export type DocumentConceptUncheckedCreateNestedManyWithoutConceptInput = {
    create?: XOR<DocumentConceptCreateWithoutConceptInput, DocumentConceptUncheckedCreateWithoutConceptInput> | DocumentConceptCreateWithoutConceptInput[] | DocumentConceptUncheckedCreateWithoutConceptInput[]
    connectOrCreate?: DocumentConceptCreateOrConnectWithoutConceptInput | DocumentConceptCreateOrConnectWithoutConceptInput[]
    createMany?: DocumentConceptCreateManyConceptInputEnvelope
    connect?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DocumentConceptUpdateManyWithoutConceptNestedInput = {
    create?: XOR<DocumentConceptCreateWithoutConceptInput, DocumentConceptUncheckedCreateWithoutConceptInput> | DocumentConceptCreateWithoutConceptInput[] | DocumentConceptUncheckedCreateWithoutConceptInput[]
    connectOrCreate?: DocumentConceptCreateOrConnectWithoutConceptInput | DocumentConceptCreateOrConnectWithoutConceptInput[]
    upsert?: DocumentConceptUpsertWithWhereUniqueWithoutConceptInput | DocumentConceptUpsertWithWhereUniqueWithoutConceptInput[]
    createMany?: DocumentConceptCreateManyConceptInputEnvelope
    set?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    disconnect?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    delete?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    connect?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    update?: DocumentConceptUpdateWithWhereUniqueWithoutConceptInput | DocumentConceptUpdateWithWhereUniqueWithoutConceptInput[]
    updateMany?: DocumentConceptUpdateManyWithWhereWithoutConceptInput | DocumentConceptUpdateManyWithWhereWithoutConceptInput[]
    deleteMany?: DocumentConceptScalarWhereInput | DocumentConceptScalarWhereInput[]
  }

  export type DocumentConceptUncheckedUpdateManyWithoutConceptNestedInput = {
    create?: XOR<DocumentConceptCreateWithoutConceptInput, DocumentConceptUncheckedCreateWithoutConceptInput> | DocumentConceptCreateWithoutConceptInput[] | DocumentConceptUncheckedCreateWithoutConceptInput[]
    connectOrCreate?: DocumentConceptCreateOrConnectWithoutConceptInput | DocumentConceptCreateOrConnectWithoutConceptInput[]
    upsert?: DocumentConceptUpsertWithWhereUniqueWithoutConceptInput | DocumentConceptUpsertWithWhereUniqueWithoutConceptInput[]
    createMany?: DocumentConceptCreateManyConceptInputEnvelope
    set?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    disconnect?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    delete?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    connect?: DocumentConceptWhereUniqueInput | DocumentConceptWhereUniqueInput[]
    update?: DocumentConceptUpdateWithWhereUniqueWithoutConceptInput | DocumentConceptUpdateWithWhereUniqueWithoutConceptInput[]
    updateMany?: DocumentConceptUpdateManyWithWhereWithoutConceptInput | DocumentConceptUpdateManyWithWhereWithoutConceptInput[]
    deleteMany?: DocumentConceptScalarWhereInput | DocumentConceptScalarWhereInput[]
  }

  export type DocumentCreateNestedOneWithoutConceptLinksInput = {
    create?: XOR<DocumentCreateWithoutConceptLinksInput, DocumentUncheckedCreateWithoutConceptLinksInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutConceptLinksInput
    connect?: DocumentWhereUniqueInput
  }

  export type ConceptCreateNestedOneWithoutDocumentLinksInput = {
    create?: XOR<ConceptCreateWithoutDocumentLinksInput, ConceptUncheckedCreateWithoutDocumentLinksInput>
    connectOrCreate?: ConceptCreateOrConnectWithoutDocumentLinksInput
    connect?: ConceptWhereUniqueInput
  }

  export type DocumentUpdateOneRequiredWithoutConceptLinksNestedInput = {
    create?: XOR<DocumentCreateWithoutConceptLinksInput, DocumentUncheckedCreateWithoutConceptLinksInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutConceptLinksInput
    upsert?: DocumentUpsertWithoutConceptLinksInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutConceptLinksInput, DocumentUpdateWithoutConceptLinksInput>, DocumentUncheckedUpdateWithoutConceptLinksInput>
  }

  export type ConceptUpdateOneRequiredWithoutDocumentLinksNestedInput = {
    create?: XOR<ConceptCreateWithoutDocumentLinksInput, ConceptUncheckedCreateWithoutDocumentLinksInput>
    connectOrCreate?: ConceptCreateOrConnectWithoutDocumentLinksInput
    upsert?: ConceptUpsertWithoutDocumentLinksInput
    connect?: ConceptWhereUniqueInput
    update?: XOR<XOR<ConceptUpdateToOneWithWhereWithoutDocumentLinksInput, ConceptUpdateWithoutDocumentLinksInput>, ConceptUncheckedUpdateWithoutDocumentLinksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DocumentConceptCreateWithoutDocumentInput = {
    excerpt?: string | null
    confidence?: number
    concept: ConceptCreateNestedOneWithoutDocumentLinksInput
  }

  export type DocumentConceptUncheckedCreateWithoutDocumentInput = {
    conceptId: string
    excerpt?: string | null
    confidence?: number
  }

  export type DocumentConceptCreateOrConnectWithoutDocumentInput = {
    where: DocumentConceptWhereUniqueInput
    create: XOR<DocumentConceptCreateWithoutDocumentInput, DocumentConceptUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentConceptCreateManyDocumentInputEnvelope = {
    data: DocumentConceptCreateManyDocumentInput | DocumentConceptCreateManyDocumentInput[]
  }

  export type DocumentConceptUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentConceptWhereUniqueInput
    update: XOR<DocumentConceptUpdateWithoutDocumentInput, DocumentConceptUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentConceptCreateWithoutDocumentInput, DocumentConceptUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentConceptUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentConceptWhereUniqueInput
    data: XOR<DocumentConceptUpdateWithoutDocumentInput, DocumentConceptUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentConceptUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentConceptScalarWhereInput
    data: XOR<DocumentConceptUpdateManyMutationInput, DocumentConceptUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentConceptScalarWhereInput = {
    AND?: DocumentConceptScalarWhereInput | DocumentConceptScalarWhereInput[]
    OR?: DocumentConceptScalarWhereInput[]
    NOT?: DocumentConceptScalarWhereInput | DocumentConceptScalarWhereInput[]
    documentId?: StringFilter<"DocumentConcept"> | string
    conceptId?: StringFilter<"DocumentConcept"> | string
    excerpt?: StringNullableFilter<"DocumentConcept"> | string | null
    confidence?: FloatFilter<"DocumentConcept"> | number
  }

  export type DocumentConceptCreateWithoutConceptInput = {
    excerpt?: string | null
    confidence?: number
    document: DocumentCreateNestedOneWithoutConceptLinksInput
  }

  export type DocumentConceptUncheckedCreateWithoutConceptInput = {
    documentId: string
    excerpt?: string | null
    confidence?: number
  }

  export type DocumentConceptCreateOrConnectWithoutConceptInput = {
    where: DocumentConceptWhereUniqueInput
    create: XOR<DocumentConceptCreateWithoutConceptInput, DocumentConceptUncheckedCreateWithoutConceptInput>
  }

  export type DocumentConceptCreateManyConceptInputEnvelope = {
    data: DocumentConceptCreateManyConceptInput | DocumentConceptCreateManyConceptInput[]
  }

  export type DocumentConceptUpsertWithWhereUniqueWithoutConceptInput = {
    where: DocumentConceptWhereUniqueInput
    update: XOR<DocumentConceptUpdateWithoutConceptInput, DocumentConceptUncheckedUpdateWithoutConceptInput>
    create: XOR<DocumentConceptCreateWithoutConceptInput, DocumentConceptUncheckedCreateWithoutConceptInput>
  }

  export type DocumentConceptUpdateWithWhereUniqueWithoutConceptInput = {
    where: DocumentConceptWhereUniqueInput
    data: XOR<DocumentConceptUpdateWithoutConceptInput, DocumentConceptUncheckedUpdateWithoutConceptInput>
  }

  export type DocumentConceptUpdateManyWithWhereWithoutConceptInput = {
    where: DocumentConceptScalarWhereInput
    data: XOR<DocumentConceptUpdateManyMutationInput, DocumentConceptUncheckedUpdateManyWithoutConceptInput>
  }

  export type DocumentCreateWithoutConceptLinksInput = {
    id?: string
    googleFileId?: string | null
    title: string
    mimeType: string
    plainText: string
    summary?: string | null
    sourceUrl?: string | null
    importedAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutConceptLinksInput = {
    id?: string
    googleFileId?: string | null
    title: string
    mimeType: string
    plainText: string
    summary?: string | null
    sourceUrl?: string | null
    importedAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutConceptLinksInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutConceptLinksInput, DocumentUncheckedCreateWithoutConceptLinksInput>
  }

  export type ConceptCreateWithoutDocumentLinksInput = {
    id?: string
    title: string
    normalizedTitle: string
    summary: string
    aliasesJson?: string
    relatedJson?: string
    examplesJson?: string
    confidence?: number
    embeddingJson?: string
    duplicateOfId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConceptUncheckedCreateWithoutDocumentLinksInput = {
    id?: string
    title: string
    normalizedTitle: string
    summary: string
    aliasesJson?: string
    relatedJson?: string
    examplesJson?: string
    confidence?: number
    embeddingJson?: string
    duplicateOfId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConceptCreateOrConnectWithoutDocumentLinksInput = {
    where: ConceptWhereUniqueInput
    create: XOR<ConceptCreateWithoutDocumentLinksInput, ConceptUncheckedCreateWithoutDocumentLinksInput>
  }

  export type DocumentUpsertWithoutConceptLinksInput = {
    update: XOR<DocumentUpdateWithoutConceptLinksInput, DocumentUncheckedUpdateWithoutConceptLinksInput>
    create: XOR<DocumentCreateWithoutConceptLinksInput, DocumentUncheckedCreateWithoutConceptLinksInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutConceptLinksInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutConceptLinksInput, DocumentUncheckedUpdateWithoutConceptLinksInput>
  }

  export type DocumentUpdateWithoutConceptLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleFileId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    plainText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutConceptLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleFileId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    plainText?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConceptUpsertWithoutDocumentLinksInput = {
    update: XOR<ConceptUpdateWithoutDocumentLinksInput, ConceptUncheckedUpdateWithoutDocumentLinksInput>
    create: XOR<ConceptCreateWithoutDocumentLinksInput, ConceptUncheckedCreateWithoutDocumentLinksInput>
    where?: ConceptWhereInput
  }

  export type ConceptUpdateToOneWithWhereWithoutDocumentLinksInput = {
    where?: ConceptWhereInput
    data: XOR<ConceptUpdateWithoutDocumentLinksInput, ConceptUncheckedUpdateWithoutDocumentLinksInput>
  }

  export type ConceptUpdateWithoutDocumentLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    normalizedTitle?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    aliasesJson?: StringFieldUpdateOperationsInput | string
    relatedJson?: StringFieldUpdateOperationsInput | string
    examplesJson?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    embeddingJson?: StringFieldUpdateOperationsInput | string
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConceptUncheckedUpdateWithoutDocumentLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    normalizedTitle?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    aliasesJson?: StringFieldUpdateOperationsInput | string
    relatedJson?: StringFieldUpdateOperationsInput | string
    examplesJson?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    embeddingJson?: StringFieldUpdateOperationsInput | string
    duplicateOfId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentConceptCreateManyDocumentInput = {
    conceptId: string
    excerpt?: string | null
    confidence?: number
  }

  export type DocumentConceptUpdateWithoutDocumentInput = {
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
    concept?: ConceptUpdateOneRequiredWithoutDocumentLinksNestedInput
  }

  export type DocumentConceptUncheckedUpdateWithoutDocumentInput = {
    conceptId?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
  }

  export type DocumentConceptUncheckedUpdateManyWithoutDocumentInput = {
    conceptId?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
  }

  export type DocumentConceptCreateManyConceptInput = {
    documentId: string
    excerpt?: string | null
    confidence?: number
  }

  export type DocumentConceptUpdateWithoutConceptInput = {
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
    document?: DocumentUpdateOneRequiredWithoutConceptLinksNestedInput
  }

  export type DocumentConceptUncheckedUpdateWithoutConceptInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
  }

  export type DocumentConceptUncheckedUpdateManyWithoutConceptInput = {
    documentId?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DocumentCountOutputTypeDefaultArgs instead
     */
    export type DocumentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DocumentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConceptCountOutputTypeDefaultArgs instead
     */
    export type ConceptCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConceptCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DocumentDefaultArgs instead
     */
    export type DocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConceptDefaultArgs instead
     */
    export type ConceptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConceptDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DocumentConceptDefaultArgs instead
     */
    export type DocumentConceptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DocumentConceptDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SettingDefaultArgs instead
     */
    export type SettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SettingDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}