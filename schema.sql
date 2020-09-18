CREATE TABLE "public"."Packs" (id SERIAL PRIMARY KEY NOT NULL, name TEXT);
CREATE TABLE "public"."BlackCards" (
  id SERIAL PRIMARY KEY NOT NULL,
  text TEXT NOT NULL,
  pick VARCHAR(255) NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "packId" INTEGER,
  CONSTRAINT pack FOREIGN KEY ("packId") REFERENCES "public"."Packs" (id) ON DELETE
  SET NULL
);
CREATE TABLE "public"."WhiteCards" (
  id SERIAL PRIMARY KEY NOT NULL,
  text TEXT NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "packId" INTEGER,
  CONSTRAINT pack FOREIGN KEY ("packId") REFERENCES "public"."Packs" (id) ON DELETE
  SET NULL
);
